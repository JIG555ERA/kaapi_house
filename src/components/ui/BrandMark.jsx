const BrandMark = ({ compact = false, inverted = false }) => (
  <a className={`brand-mark ${inverted ? 'brand-mark--inverted' : ''}`} href="#home" aria-label="Kaapi House home">
    <span className="brand-mark__seal" aria-hidden="true">
      <span className="brand-mark__steam">⌁</span>
      <span className="brand-mark__cup" />
    </span>
    {!compact && (
      <span className="brand-mark__type">
        <strong>Kaapi House</strong>
        <small>Bengaluru · Nagavara</small>
      </span>
    )}
  </a>
)

export default BrandMark
