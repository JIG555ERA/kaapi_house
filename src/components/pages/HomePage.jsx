import { lazy, Suspense } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Building2, Camera, Check, Clock3, MapPin, MessageCircle, Phone, Route, Sparkles } from 'lucide-react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import MobileActionDock from '../ui/MobileActionDock'
import BrandMark from '../ui/BrandMark'
import { PrimaryButton, SecondaryButton } from '../ui/Buttons'
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal'
import CorporateEnquiryForm from '../sections/CorporateEnquiryForm'
import WebGLFallback from '../three/WebGLFallback'
import { highlights, instagramImages, menuItems, siteConfig, workdayUses } from '../../data/siteData'

const KaapiHeroScene = lazy(() => import('../three/KaapiHeroScene'))
const BeanToBrewScene = lazy(() => import('../three/BeanToBrewScene'))

const SectionHeading = ({ eyebrow, title, copy }) => (
  <Reveal className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</Reveal>
)

const FoodCard = ({ item, index }) => (
  <StaggerItem className={`food-card food-card--${index + 1}`}><article>
    <div className="food-card__media"><img src={item.image} alt={`${item.name} served at a warm cafe table`} loading="lazy" /><span>{item.tag}</span></div>
    <div className="food-card__body"><span>0{index + 1}</span><div><h3>{item.name}</h3><p>{item.note}</p></div><ArrowUpRight size={20} /></div>
  </article></StaggerItem>
)

const HomePage = () => {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <motion.div className="site" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Header />
      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero__noise" />
          <div className="shell hero__grid">
            <motion.div className="hero__copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}>
              <motion.p className="eyebrow eyebrow--light" variants={fadeUp}>Traditional South Indian Café <span>·</span> Nagavara</motion.p>
              <div className="hero__title-wrap"><motion.h1 id="hero-title" variants={{ hidden: { y: '105%' }, visible: { y: 0, transition: { duration: 0.9, ease: ease } } }}>Bengaluru’s everyday ritual, <em>brewed the traditional way.</em></motion.h1></div>
              <motion.p className="hero__description" variants={fadeUp}>From aromatic filter kaapi to comforting South Indian favourites, Kaapi House serves familiar flavours with warmth, honesty and a little taste of home.</motion.p>
              <motion.div className="hero__actions" variants={fadeUp}><PrimaryButton href="#menu">Explore the Menu</PrimaryButton><SecondaryButton href={siteConfig.links.directions} external>Get Directions</SecondaryButton></motion.div>
              <motion.p className="hero__location" variants={fadeUp}><MapPin size={17} /> Beside IBIS · Near Manyata Tech Park</motion.p>
            </motion.div>
            <motion.div className="hero__visual" initial={{ opacity: 0, scale: 0.86, rotate: 4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, delay: 0.2, ease }}>
              <Suspense fallback={<WebGLFallback />}><KaapiHeroScene /></Suspense><span className="hero__orbit hero__orbit--one" /><span className="hero__orbit hero__orbit--two" />
            </motion.div>
          </div>
          <a className="scroll-cue" href="#why"><span>Scroll to savour</span><ArrowDown size={18} /></a>
        </section>

        <section className="value-strip" id="why" aria-label="Why visit Kaapi House"><StaggerGroup className="shell value-strip__grid">
          {highlights.map(({ title, icon: Icon }, index) => <StaggerItem className="highlight-card" key={title}><span>0{index + 1}</span><Icon /><p>{title}</p></StaggerItem>)}
        </StaggerGroup></section>

        <section className="story section" id="story" aria-labelledby="story-title"><div className="shell story__grid">
          <Reveal className="story__visual"><div className="story__image-wrap"><img src={instagramImages[0].src} alt="Traditional South Indian breakfast presented with warmth" loading="lazy" /><span className="story__stamp"><BrandMark compact /><small>Made with warmth</small></span></div><span className="story__line" /></Reveal>
          <div className="story__content"><p className="eyebrow">Our story · Familiar by design</p><h2 id="story-title">A familiar taste, <em>served with heart.</em></h2><p>Kaapi House was created around a simple idea: everyday food should feel fresh, comforting and welcoming. Familiar recipes, traditional flavours and warm hospitality come together to offer a genuine taste of home.</p><div className="story__words"><span>Fresh</span><span>Familiar</span><span>Made with warmth</span></div><SecondaryButton href="#experience">Discover the experience</SecondaryButton></div>
        </div></section>

        <div className="marquee" aria-label="Kaapi House favourites"><div className="marquee__track"><span>Filter Kaapi <i>✦</i> Thatte Idli <i>✦</i> Chai Breaks <i>✦</i> Bengaluru Comfort <i>✦</i></span><span aria-hidden="true">Filter Kaapi <i>✦</i> Thatte Idli <i>✦</i> Chai Breaks <i>✦</i> Bengaluru Comfort <i>✦</i></span></div></div>

        <section className="menu-section section" id="menu" aria-labelledby="menu-title"><div className="shell">
          <div className="section-top"><SectionHeading eyebrow="House favourites" title="Comfort, plated with character." copy="A taste of what could be waiting at the counter—familiar flavours made for everyday cravings." /><PrimaryButton href="#visit">View Full Menu</PrimaryButton></div>
          <StaggerGroup className="food-grid">{menuItems.map((item, index) => <FoodCard item={item} index={index} key={item.name} />)}</StaggerGroup>
          <p className="menu-note">Menu and availability may vary. Confirm current selections with Kaapi House.</p>
        </div></section>

        <Suspense fallback={<section className="brew-interlude"><WebGLFallback compact /></section>}><BeanToBrewScene /></Suspense>

        <section className="workday section" id="experience" aria-labelledby="workday-title"><div className="shell">
          <SectionHeading eyebrow="Made for Manyata days" title="Your workday break, made better." copy="Quick breakfasts, refreshing tea breaks and comforting meals—just minutes from Manyata Tech Park." />
          <div className="workday__grid"><Reveal className="route-card"><div className="route-card__top"><span>Manyata Tech Park</span><span>Kaapi House</span></div><div className="route-card__map"><span className="map-road map-road--one" /><span className="map-road map-road--two" /><span className="route-card__start"><Building2 size={18} /></span><motion.span className="route-card__path" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} /><motion.span className="route-card__pin" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}><MapPin /></motion.span></div><p>Close enough for a calm pause between a busy morning and the next meeting.</p></Reveal>
            <StaggerGroup className="workday__uses">{workdayUses.map(({ title, text, icon: Icon }) => <StaggerItem className="use-card" key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></StaggerItem>)}</StaggerGroup>
          </div><Reveal className="workday__actions"><PrimaryButton href="#corporate">Enquire for Your Team</PrimaryButton><SecondaryButton href={siteConfig.links.whatsapp}>Order on WhatsApp</SecondaryButton></Reveal>
        </div></section>

        <section className="social-section section" id="instagram"><div className="shell"><div className="section-top"><SectionHeading eyebrow="From the community" title="Fresh from @kaapi_house" copy="A glimpse of comforting plates, everyday rituals and what’s happening at the café." /><SecondaryButton href={siteConfig.links.instagram} external>Follow on Instagram</SecondaryButton></div><div className="instagram-grid">
          {instagramImages.map((image, index) => <Reveal className={`instagram-card instagram-card--${index + 1}`} delay={index * 0.08} key={image.src}><a href={siteConfig.links.instagram} target="_blank" rel="noreferrer"><img src={image.src} alt={image.alt} loading="lazy" /><span><Camera size={18} /> View post</span></a></Reveal>)}
        </div></div></section>

        <section className="corporate section" id="corporate" aria-labelledby="corporate-title"><div className="shell corporate__grid">
          <Reveal className="corporate__intro"><p className="eyebrow eyebrow--light">Corporate orders</p><h2 id="corporate-title">Make the next team break feel less routine.</h2><p>Planning breakfast, a round of chai or snacks for the office? Share the basics and let Kaapi House take it from there.</p><div className="corporate__benefits"><span><Check /> Flexible team sizes</span><span><Check /> One-off or recurring</span><span><Check /> Built around your need</span></div></Reveal>
          <Reveal className="corporate__form" delay={0.1}><CorporateEnquiryForm /></Reveal>
        </div></section>

        <section className="visit section" id="visit" aria-labelledby="visit-title"><div className="shell visit__grid">
          <div className="visit__content"><SectionHeading eyebrow="Visit Kaapi House" title="Your next kaapi is closer than you think." /><address><MapPin /><span>{siteConfig.address}</span></address><div className="visit__details"><p><Clock3 /><span><small>Opening hours</small>{siteConfig.hours}</span></p><p><Phone /><span><small>Call</small>{siteConfig.phoneLabel}</span></p><p><MessageCircle /><span><small>WhatsApp</small>{siteConfig.whatsappLabel}</span></p></div><div className="visit__actions"><PrimaryButton href={siteConfig.links.directions} external>Open in Google Maps</PrimaryButton><SecondaryButton href={siteConfig.links.whatsapp}>WhatsApp</SecondaryButton></div></div>
          <Reveal className="location-panel"><div className="location-panel__map"><span className="location-panel__road location-panel__road--one" /><span className="location-panel__road location-panel__road--two" /><span className="landmark landmark--manyata">Manyata Tech Park</span><span className="landmark landmark--ibis">IBIS</span><span className="landmark landmark--nagavara">Nagavara</span><span className="location-panel__pin"><MapPin /></span><span className="location-panel__label">Kaapi House<small>Beside IBIS</small></span></div><p><Route size={18} /> Illustrative landmark map · Open Google Maps for verified directions.</p></Reveal>
        </div></section>

        <section className="closing" aria-labelledby="closing-title"><span className="closing__steam closing__steam--one" /><span className="closing__steam closing__steam--two" /><Reveal className="shell closing__inner"><Sparkles /><h2 id="closing-title">Good food. Great kaapi.<br /><em>Right around the corner.</em></h2><p>Whether it’s your morning coffee, an office snack run or a comforting evening meal, there’s always something waiting at Kaapi House.</p><div><PrimaryButton href={siteConfig.links.directions} external>Get Directions</PrimaryButton><SecondaryButton href={siteConfig.links.whatsapp}>Chat on WhatsApp</SecondaryButton></div></Reveal></section>
      </main>
      <Footer /><MobileActionDock />
    </motion.div>
  )
}

const ease = [0.22, 1, 0.36, 1]
const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }

export default HomePage
