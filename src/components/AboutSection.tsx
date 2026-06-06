import Reveal from '@/components/Reveal'
import SectionHeader from '@/components/SectionHeader'
import { siteContent } from '@/content/siteContent'

export default function AboutSection() {
  return (
    <section id="about" className="section-anchor border-t border-black/10 pt-20">
      <SectionHeader
        index="01"
        title="About"
        description="A short overview of my academic background, research interests, and current agenda."
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)]">
        <Reveal>
          <div className="space-y-5 text-sm leading-8 text-black/65 sm:text-[15px]">
            {siteContent.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="border-t border-black/10 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-black/40">Research themes</p>
          <div className="flex flex-wrap gap-3">
            {siteContent.themes.map((theme) => (
              <span
                key={theme}
                className="border border-black/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-black/58"
              >
                {theme}
              </span>
            ))}
          </div>
          <div className="mt-8 border-t border-black/10 pt-6 text-sm leading-7 text-black/58">
            The current version is a concise research homepage and can be updated further as publications, CV, and scholar links become available.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
