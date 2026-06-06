import { ArrowRight, MapPin } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { siteContent } from '@/content/siteContent'

export default function HeroSection() {
  return (
    <section id="top" className="section-anchor pt-4">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <Reveal className="space-y-7 lg:col-span-2">
          <div>
            <p className="text-center text-sm uppercase tracking-[0.24em] text-black/40">{siteContent.profile.title}</p>
          </div>

          <div className="space-y-5">
            <h1
              className="mx-auto max-w-4xl text-center text-4xl leading-tight text-black sm:text-5xl lg:text-[3.7rem]"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              {siteContent.profile.name}
            </h1>
            <p className="mx-auto max-w-3xl text-center text-base leading-8 text-black/70 sm:text-lg">{siteContent.profile.statement}</p>
            <p className="mx-auto max-w-3xl text-center text-[15px] leading-8 text-black/58">{siteContent.profile.summary}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm">
            <a href="#works" className="inline-flex items-center gap-2 font-semibold text-black/78 transition hover:text-black">
              View research
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${siteContent.profile.email}`}
              className="inline-flex items-center gap-2 font-semibold text-black/78 transition hover:text-black"
            >
              Email me
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-black/10 pt-6 text-sm text-black/60">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {siteContent.profile.location}
            </span>
            <span>{siteContent.profile.availability}</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto hidden max-w-md space-y-6 border-t border-black/10 pt-8 lg:block lg:w-full lg:max-w-none lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-xs uppercase tracking-[0.24em] text-black/40">Overview</p>
            <div className="grid gap-4">
              {siteContent.metrics.map((metric) => (
                <div key={metric.label} className="border-b border-black/10 pb-4">
                  <p className="serif-display text-2xl text-black">{metric.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-black/45">{metric.label}</p>
                  <p className="mt-3 text-sm leading-6 text-black/55">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
