import Reveal from '@/components/Reveal'
import SectionHeader from '@/components/SectionHeader'
import { siteContent } from '@/content/siteContent'

export default function TimelineSection() {
  return (
    <section id="timeline" className="section-anchor border-t border-black/10 pt-20">
      <SectionHeader
        index="02"
        title="经历时间线"
        description="让访问者以最少的阅读成本，快速理解你的成长路径、身份变化与判断边界。"
      />

      <div className="space-y-4">
        {siteContent.timeline.map((item, index) => (
          <Reveal key={`${item.year}-${item.title}`} delay={index * 0.06}>
            <article className="paper-panel grid gap-4 p-6 sm:grid-cols-[140px_minmax(0,1fr)] sm:p-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-[var(--accent)]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-black/45">{item.year}</p>
                  <p className="mt-2 text-sm text-black/55">{item.organization}</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-black">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-black/60 sm:text-[15px]">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
