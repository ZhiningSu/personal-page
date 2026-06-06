import Reveal from '@/components/Reveal'
import SectionHeader from '@/components/SectionHeader'
import { siteContent } from '@/content/siteContent'

export default function NewsSection() {
  return (
    <section id="news" className="section-anchor border-t border-black/10 pt-20">
      <SectionHeader
        index="04"
        title="Updates"
        description="Short notes on the current state of the research page and ongoing directions."
      />

      <div className="divide-y divide-black/10">
        {siteContent.news.map((item, index) => (
          <Reveal key={`${item.date}-${item.content}`} delay={index * 0.05}>
            <article className="grid gap-2 py-4 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-6">
              <p className="text-xs uppercase tracking-[0.24em] text-black/45">{item.date}</p>
              <p className="text-sm leading-7 text-black/64 sm:text-[15px]">{item.content}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
