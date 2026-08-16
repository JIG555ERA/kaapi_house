import { MessageCircle, Navigation } from 'lucide-react'
import { siteConfig } from '../../data/siteData'

const MobileActionDock = () => (
  <aside className="mobile-dock" aria-label="Quick actions">
    <a href={siteConfig.links.directions} target="_blank" rel="noreferrer"><Navigation size={18} /> Directions</a>
    <a href={siteConfig.links.whatsapp}><MessageCircle size={18} /> WhatsApp</a>
  </aside>
)

export default MobileActionDock
