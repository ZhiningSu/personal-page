import { ArrowRight, MapPin } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { siteContent } from '@/content/siteContent'

export default function HeroSection() {
  return (
    <section id="top" className="section-anchor relative pt-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] lg:items-end">
        <Reveal className="space-y-8">
          <div>
            <span className="eyebrow">Personal Homepage</span>
            <p className="max-w-xl text-sm uppercase tracking-[0.28em] text-black/45">{siteContent.profile.title}</p>
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-6xl leading-[0.92] text-black sm:text-7xl lg:text-[7.5rem]">
              {siteContent.profile.name}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-black/68 sm:text-lg">{siteContent.profile.statement}</p>
            <p className="max-w-2xl text-sm leading-7 text-black/56 sm:text-[15px]">{siteContent.profile.summary}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#works"
              className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              浏览作品
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${siteContent.profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
            >
              发送邮件
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-black/10 pt-6 text-sm text-black/60">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {siteContent.profile.location}
            </span>
            <span>{siteContent.profile.availability}</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="paper-panel grain-border relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-x-8 top-6 flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-black/40">
              <span>Index</span>
              <span>2026</span>
            </div>

            <div className="mt-14 rounded-[1.75rem] border border-black/10 bg-[linear-gradient(135deg,rgba(143,111,79,0.18),rgba(255,255,255,0.8)_45%,rgba(21,19,18,0.05))] p-6">
              <div className="flex min-h-[18rem] flex-col justify-between rounded-[1.5rem] border border-black/10 bg-black/[0.02] p-6">
                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-black/45">Signature Frame</p>
                  <p className="serif-display text-5xl tracking-[0.08em] text-black">YN</p>
                </div>
                <p className="max-w-xs text-sm leading-7 text-black/58">
                  以更像出版物的方式组织个人信息，让访问者先感受到你的判断力，再理解你的履历。
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {siteContent.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.5rem] border border-black/10 bg-white/75 p-4">
                  <p className="serif-display text-3xl text-black">{metric.value}</p>
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
