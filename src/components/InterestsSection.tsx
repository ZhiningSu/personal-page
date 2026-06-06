import Reveal from '@/components/Reveal'
import SectionHeader from '@/components/SectionHeader'
import { siteContent } from '@/content/siteContent'
import { ArrowUpRight } from 'lucide-react'

export default function InterestsSection() {
  return (
    <section id="interests" className="section-anchor border-t border-black/10 pt-20">
      <SectionHeader
        index="04"
        title="Interests"
        description="A few creative interests outside my core research work. Click the preview to open the corresponding video file."
      />

      <div className="space-y-6">
        {siteContent.interests.map((interest, index) => (
          <Reveal key={interest.title} delay={index * 0.05}>
            <article className="grid gap-5 border-b border-black/10 pb-6 sm:grid-cols-[220px_minmax(0,1fr)]">
              <a
                href={interest.videoHref}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden border border-black/10"
              >
                <img
                  src={interest.posterImage}
                  alt={interest.title}
                  className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </a>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-black/45">
                  <span>{interest.year}</span>
                  <a
                    href={interest.videoHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-black/62 transition hover:text-black"
                  >
                    Open video
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="mt-3 text-2xl text-black">{interest.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-black/62 sm:text-[15px]">{interest.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
