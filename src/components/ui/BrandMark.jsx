import logo from '../../assets/logos/kaapiHouseLogo.jpg'

const BrandMark = ({ compact = false, inverted = false }) => (
  <a className={`brand-mark ${inverted ? 'brand-mark--inverted' : ''}`} href="#home" aria-label="Kaapi House home">
    <span className="brand-mark__seal">
      <img src={logo} alt="Kaapi House logo featuring an illustrated hostess holding filter coffee" />
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
