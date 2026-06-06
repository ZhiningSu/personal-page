import { ArrowUpRight, Mail } from 'lucide-react'
import Reveal from '@/components/Reveal'
import SectionHeader from '@/components/SectionHeader'
import { siteContent } from '@/content/siteContent'

export default function ContactSection() {
  return (
    <section id="contact" className="section-anchor border-t border-black/10 pt-20">
      <SectionHeader
        index="05"
        title="联系与合作"
        description="把联系入口做得足够明确，也把合作语气处理得足够专业。"
      />

      <Reveal>
        <div className="paper-panel grid gap-8 p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-black/45">Open for collaboration</p>
            <h3 className="mt-4 max-w-2xl text-4xl leading-tight text-black sm:text-5xl">
              如果你希望把个人表达做得更有辨识度，这个模板就是一个足够好的起点。
            </h3>
            <a
              href={`mailto:${siteContent.profile.email}`}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {siteContent.profile.email}
            </a>
          </div>

          <div className="space-y-4 rounded-[1.75rem] border border-black/10 bg-black/[0.03] p-6">
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
