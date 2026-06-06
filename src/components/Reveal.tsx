import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { cn } from '@/utils/cn'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
}>

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.21, 1, 0.35, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
