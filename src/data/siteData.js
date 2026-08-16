import { Coffee, HeartHandshake, MapPin, Sunrise, UtensilsCrossed, Users } from 'lucide-react'

export const siteConfig = {
  name: 'Kaapi House',
  handle: '@kaapi_house',
  tagline: 'Brewed with tradition, served with love.',
  address: '78/1, 14th Cross Road, beside IBIS, Chanakya Layout, Nagavara, Bengaluru, Karnataka.',
  hours: 'Confirm with Kaapi House',
  phoneLabel: 'Phone number to be confirmed',
  whatsappLabel: 'WhatsApp number to be confirmed',
  links: {
    instagram: 'https://www.instagram.com/kaapi_house/',
    directions: 'https://www.google.com/maps/search/?api=1&query=78%2F1%2C%2014th%20Cross%20Road%2C%20beside%20IBIS%2C%20Chanakya%20Layout%2C%20Nagavara%2C%20Bengaluru',
    whatsapp: '#corporate',
    phone: '#visit',
  },
}

export const navigation = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Experience', href: '#experience' },
  { label: 'Visit Us', href: '#visit' },
]

export const highlights = [
  { title: 'Traditional Filter Kaapi', icon: Coffee },
  { title: 'South Indian Comfort Food', icon: UtensilsCrossed },
  { title: 'Honest Everyday Value', icon: HeartHandshake },
  { title: 'Near Manyata Tech Park', icon: MapPin },
]

export const menuItems = [
  {
    name: 'Filter Kaapi',
    note: 'Aromatic, frothy and poured the traditional way.',
    tag: 'House ritual',
    image: 'https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?auto=format&fit=crop&w=1000&q=85',
    position: 'center',
  },
  {
    name: 'Thatte Idli',
    note: 'Pillowy comfort with familiar South Indian accompaniments.',
    tag: 'Breakfast favourite',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=85',
    position: 'center',
  },
  {
    name: 'Lemon Rice',
    note: 'Bright, savoury and made for an easy everyday meal.',
    tag: 'Comfort bowl',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=85',
    position: 'center',
  },
  {
    name: 'Chai',
    note: 'A warm pause for conversations and workday breaks.',
    tag: 'Tea break',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=1000&q=85',
    position: 'center',
  },
  {
    name: 'Sandwiches',
    note: 'Toasty, satisfying and ready for the office rush.',
    tag: 'Quick bite',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=85',
    position: 'center',
  },
  {
    name: 'Seasonal Specials',
    note: 'Changing flavours and limited favourites from the kitchen.',
    tag: 'Ask the counter',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85',
    position: 'center',
  },
]

export const workdayUses = [
  { title: 'Breakfast before work', text: 'Begin the day with familiar flavours and a proper cup of kaapi.', icon: Sunrise },
  { title: 'Team tea & snack breaks', text: 'Simple crowd-pleasers for a quick reset between meetings.', icon: Users },
  { title: 'Corporate & bulk orders', text: 'Tell us what your team needs and we’ll help shape the order.', icon: UtensilsCrossed },
]

export const instagramImages = [
  {
    src: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=85',
    alt: 'South Indian breakfast served on a banana leaf',
  },
  {
    src: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?auto=format&fit=crop&w=900&q=85',
    alt: 'Freshly prepared Indian comfort food',
  },
  {
    src: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=85',
    alt: 'A warm cup of chai ready to serve',
  },
]

export const requirementTypes = [
  'Breakfast order',
  'Tea and snacks',
  'Team meal',
  'Recurring office order',
  'Something else',
]
