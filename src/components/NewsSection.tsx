import Reveal from '@/components/Reveal'
import SectionHeader from '@/components/SectionHeader'
import { siteContent } from '@/content/siteContent'

export default function NewsSection() {
  return (
    <section id="statement" className="section-anchor border-t border-black/10 pt-20">
      <SectionHeader
        index="05"
        title="Statement"
        description="A short written statement about how I work, what drives me, and the kind of systems I want to build."
      />

      <div className="divide-y divide-black/10">
        {siteContent.statement.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <article className="grid gap-2 py-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
              <p className="text-xs uppercase tracking-[0.24em] text-black/45">{item.title}</p>
              <p className="text-sm leading-8 text-black/64 sm:text-[15px]">{item.content}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
