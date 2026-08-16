import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Camera, Menu, Navigation, X } from 'lucide-react'
import BrandMark from '../ui/BrandMark'
import { navigation, siteConfig } from '../../data/siteData'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header ${scrolled || menuOpen ? 'site-header--solid' : ''}`}>
        <div className="site-header__inner shell">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="site-header__actions">
            <a className="icon-button desktop-only" href={siteConfig.links.instagram} target="_blank" rel="noreferrer" aria-label="Visit Kaapi House on Instagram">
              <Camera size={19} />
            </a>
            <a className="nav-cta desktop-only" href={siteConfig.links.directions} target="_blank" rel="noreferrer">
              <Navigation size={16} /> Get Directions
            </a>
            <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.nav
              aria-label="Mobile navigation"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } } }}
            >
              {navigation.map((item, index) => (
                <motion.a key={item.href} href={item.href} onClick={closeMenu} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
                  <span>0{index + 1}</span>{item.label}
                </motion.a>
              ))}
              <motion.a className="mobile-menu__direction" href={siteConfig.links.directions} target="_blank" rel="noreferrer" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <Navigation size={18} /> Get directions
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
