import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'
import SectionHeader from '@/components/SectionHeader'
import { siteContent } from '@/content/siteContent'

export default function WorksSection() {
  return (
    <section id="works" className="section-anchor border-t border-black/10 pt-20">
      <SectionHeader
        index="03"
        title="Research"
        description="Current research directions and project placeholders aligned with world models, agents, and finance."
      />

      <div className="space-y-6">
        {siteContent.works.map((work, index) => (
          <Reveal key={work.slug} delay={index * 0.08}>
            <article className="border-b border-black/10 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-black/45">
                <span>{work.year}</span>
                <span>{work.tags.join(' · ')}</span>
              </div>

              <div className="mt-3 space-y-3">
                <h3 className="text-2xl text-black">{work.title}</h3>
                <p className="text-sm leading-7 text-black/58">{work.subtitle}</p>
                <p className="max-w-4xl text-sm leading-7 text-black/62">{work.summary}</p>
              </div>

              <div className="mt-4">
                <Link to={`/work/${work.slug}`} className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-black">
                  Read more
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
