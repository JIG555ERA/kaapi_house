const WebGLFallback = ({ compact = false }) => (
  <div className={`webgl-fallback ${compact ? 'webgl-fallback--compact' : ''}`} role="img" aria-label="A steaming filter coffee tumbler and brass dabarah">
    <span className="fallback-steam fallback-steam--one" />
    <span className="fallback-steam fallback-steam--two" />
    <span className="fallback-cup" />
    <span className="fallback-saucer" />
  </div>
)

export default WebGLFallback
