import { Camera } from 'lucide-react'
import BrandMark from '../ui/BrandMark'
import { navigation, siteConfig } from '../../data/siteData'

const Footer = () => (
  <footer className="footer">
    <div className="shell footer__grid">
      <div className="footer__brand">
        <BrandMark inverted />
        <p>{siteConfig.tagline}</p>
      </div>
      <div>
        <p className="footer__label">Explore</p>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </div>
      <div>
        <p className="footer__label">Come by</p>
        <address>{siteConfig.address}</address>
      </div>
      <div>
        <p className="footer__label">Stay close</p>
        <a className="footer__social" href={siteConfig.links.instagram} target="_blank" rel="noreferrer"><Camera size={18} /> {siteConfig.handle}</a>
        <p className="footer__placeholder">{siteConfig.phoneLabel}</p>
      </div>
    </div>
    <div className="shell footer__bottom">
      <span>Concept website prepared for Kaapi House</span>
      <span>Made with warmth in Bengaluru.</span>
    </div>
  </footer>
)

export default Footer
