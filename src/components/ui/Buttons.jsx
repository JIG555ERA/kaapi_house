import { ArrowDownRight } from 'lucide-react'
import { motion } from 'framer-motion'

export const PrimaryButton = ({ href, children, icon = true, className = '', external = false }) => (
  <motion.a
    className={`button button--primary ${className}`}
    href={href}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
  >
    <span>{children}</span>
    {icon && <ArrowDownRight size={18} aria-hidden="true" />}
  </motion.a>
)

export const SecondaryButton = ({ href, children, className = '', external = false }) => (
  <motion.a
    className={`button button--secondary ${className}`}
    href={href}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
  >
    {children}
  </motion.a>
)
