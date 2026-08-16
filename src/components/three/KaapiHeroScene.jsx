import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import { useInView, useReducedMotion } from 'framer-motion'
import WebGLFallback from './WebGLFallback'

const Brass = '#c8942f'
const Steel = '#b8b9ad'

const Vessel = ({ reducedMotion }) => {
  const group = useRef()

  useFrame(({ pointer, clock }) => {
    if (!group.current || reducedMotion) return
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, pointer.x * 0.18 - 0.28, 0.035)
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, pointer.y * -0.08, 0.035)
    group.current.position.y = Math.sin(clock.elapsedTime * 1.15) * 0.035
  })

  return (
    <group ref={group} rotation={[0, -0.28, 0]}>
        <group position={[0.45, 0.2, 0]}>
          <mesh castShadow position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.72, 0.9, 0.14, 64]} />
            <meshStandardMaterial color={Brass} metalness={0.82} roughness={0.25} />
          </mesh>
          <mesh castShadow position={[0, 0.2, 0]}>
            <torusGeometry args={[0.77, 0.065, 20, 64]} />
            <meshStandardMaterial color="#f0be53" metalness={0.84} roughness={0.23} />
          </mesh>
          <mesh castShadow position={[0, 0.78, 0]}>
            <cylinderGeometry args={[0.52, 0.4, 1.18, 64]} />
            <meshStandardMaterial color={Steel} metalness={0.92} roughness={0.16} />
          </mesh>
          <mesh position={[0, 1.38, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 0.045, 64]} />
            <meshStandardMaterial color="#56301d" roughness={0.42} />
          </mesh>
          <mesh castShadow position={[0, 1.36, 0]}>
            <torusGeometry args={[0.5, 0.045, 18, 64]} />
            <meshStandardMaterial color="#e1e2d8" metalness={0.95} roughness={0.12} />
          </mesh>
        </group>
        <group position={[-1.05, 0.28, -0.25]} rotation={[0.05, 0, 0.08]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.5, 0.6, 1.48, 64]} />
            <meshStandardMaterial color={Steel} metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.75, 0]}>
            <torusGeometry args={[0.5, 0.04, 18, 64]} />
            <meshStandardMaterial color="#f3f0dc" metalness={0.88} roughness={0.18} />
          </mesh>
        </group>
        <mesh position={[-0.55, 1.58, 0]} rotation={[0, 0, -0.38]}>
          <cylinderGeometry args={[0.045, 0.085, 1.35, 18]} />
          <meshStandardMaterial color="#713c20" roughness={0.35} />
        </mesh>
    </group>
  )
}

const KaapiHeroScene = () => {
  const sceneRef = useRef(null)
  const inView = useInView(sceneRef, { margin: '150px' })
  const reducedMotion = useReducedMotion()

  return (
    <div ref={sceneRef} className="hero-scene">
      <Canvas
        camera={{ position: [0, 1.2, 5.4], fov: 38 }}
        dpr={[1, 1.5]}
        frameloop={inView ? 'always' : 'never'}
        shadows
        fallback={<WebGLFallback />}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 5, 4]} intensity={4.2} color="#ffd99a" castShadow shadow-mapSize={[512, 512]} />
        <pointLight position={[-3, 1, 2]} intensity={18} color="#8ac2a1" />
        <Vessel reducedMotion={reducedMotion} />
        <mesh position={[0, -0.58, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.75, 48]} />
          <meshBasicMaterial color="#001f13" transparent opacity={0.24} />
        </mesh>
      </Canvas>
      <span className="steam steam--one" aria-hidden="true" />
      <span className="steam steam--two" aria-hidden="true" />
      <span className="scene-label">The traditional<br />pour</span>
    </div>
  )
}

export default KaapiHeroScene
