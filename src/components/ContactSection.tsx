import { ArrowUpRight, Mail } from 'lucide-react'
import Reveal from '@/components/Reveal'
import SectionHeader from '@/components/SectionHeader'
import { siteContent } from '@/content/siteContent'

export default function ContactSection() {
  return (
    <section id="contact" className="section-anchor border-t border-black/10 pt-20">
      <SectionHeader
        index="05"
        title="Contact"
        description="For research exchange, collaboration, or discussion related to world models, agents, and finance."
      />

      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-black/45">Get in touch</p>
            <h3 className="mt-4 max-w-2xl text-3xl leading-tight text-black sm:text-4xl">
              I am happy to connect on research topics related to world models, agents, and financial intelligence.
            </h3>
            <a
              href={`mailto:${siteContent.profile.email}`}
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-black transition hover:text-black/70"
            >
              <Mail className="h-4 w-4" />
              {siteContent.profile.email}
            </a>
          </div>

          <div className="space-y-4 border-t border-black/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {siteContent.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center justify-between border-b border-black/10 pb-4 text-sm text-black/62 transition last:border-b-0 last:pb-0 hover:text-black"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
