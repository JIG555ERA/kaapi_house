import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useInView, useReducedMotion, useScroll, useTransform, motion } from 'framer-motion'
import { MathUtils } from 'three'
import WebGLFallback from './WebGLFallback'

const MorphingBrew = ({ progress, reducedMotion }) => {
  const bean = useRef()
  const cup = useRef()

  useFrame((_, delta) => {
    const value = reducedMotion ? 1 : progress.get()
    if (bean.current) {
      bean.current.rotation.y += delta * 0.55
      bean.current.scale.setScalar(MathUtils.lerp(1, 0.12, Math.min(1, value * 1.45)))
    }
    if (cup.current) {
      const scale = MathUtils.clamp((value - 0.38) * 1.8, 0.05, 1)
      cup.current.scale.setScalar(scale)
      cup.current.rotation.y = value * -0.45
    }
  })

  return (
    <group>
        <mesh ref={bean} castShadow rotation={[0.2, 0, 0.65]} position={[-0.8, 0.3, 0]}>
          <sphereGeometry args={[0.75, 48, 48]} />
          <meshStandardMaterial color="#71351d" roughness={0.54} />
        </mesh>
        <group ref={cup} position={[0.35, 0, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.72, 0.52, 1.6, 64]} />
            <meshStandardMaterial color="#d2d1c4" metalness={0.86} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.82, 0]}>
            <cylinderGeometry args={[0.69, 0.69, 0.05, 64]} />
            <meshStandardMaterial color="#65402c" roughness={0.45} />
          </mesh>
          <mesh position={[0, -0.82, 0]}>
            <torusGeometry args={[0.68, 0.1, 20, 64]} />
            <meshStandardMaterial color="#d4a13a" metalness={0.85} roughness={0.24} />
          </mesh>
        </group>
    </group>
  )
}

const BeanToBrewScene = () => {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { margin: '200px' })
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const leftOpacity = useTransform(scrollYProgress, [0.12, 0.35, 0.48], [1, 1, 0.25])
  const middleOpacity = useTransform(scrollYProgress, [0.28, 0.5, 0.7], [0.25, 1, 0.25])
  const rightOpacity = useTransform(scrollYProgress, [0.52, 0.74, 0.9], [0.25, 1, 1])

  return (
    <section ref={sectionRef} className="brew-interlude" aria-labelledby="brew-title">
      <div className="shell brew-interlude__inner">
        <div>
          <p className="eyebrow eyebrow--light">From bean to brew</p>
          <h2 id="brew-title">A small ritual,<br />made with care.</h2>
          <div className="brew-steps" aria-label="Coffee process">
            <motion.span style={{ opacity: leftOpacity }}>01 · Selected</motion.span>
            <motion.span style={{ opacity: middleOpacity }}>02 · Brewed</motion.span>
            <motion.span style={{ opacity: rightOpacity }}>03 · Served with love</motion.span>
          </div>
        </div>
        <div className="brew-canvas">
          <Canvas camera={{ position: [0, 0.5, 5], fov: 36 }} dpr={[1, 1.35]} frameloop={inView ? 'always' : 'never'} fallback={<WebGLFallback compact />}>
            <ambientLight intensity={1.6} />
            <directionalLight position={[3, 4, 4]} intensity={4} color="#ffd799" />
            <pointLight position={[-3, 1, 2]} intensity={12} color="#7abb9a" />
            <MorphingBrew progress={scrollYProgress} reducedMotion={reducedMotion} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default BeanToBrewScene
