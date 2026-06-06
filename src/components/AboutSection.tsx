import Reveal from '@/components/Reveal'
import SectionHeader from '@/components/SectionHeader'
import { siteContent } from '@/content/siteContent'

export default function AboutSection() {
  return (
    <section id="about" className="section-anchor border-t border-black/10 pt-20">
      <SectionHeader
        index="01"
        title="关于我"
        description="用一页讲清楚你是谁、你在做什么，以及你希望如何被理解。"
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <Reveal className="paper-panel p-8 sm:p-10">
          <div className="space-y-5 text-sm leading-8 text-black/65 sm:text-[15px]">
            {siteContent.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="paper-panel p-8 sm:p-10">
          <p className="eyebrow">Themes</p>
          <div className="flex flex-wrap gap-3">
            {siteContent.themes.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/62"
              >
                {theme}
              </span>
            ))}
          </div>
          <div className="mt-8 border-t border-black/10 pt-6 text-sm leading-7 text-black/58">
            内容与链接集中维护在 <span className="font-semibold text-black">siteContent.ts</span>，后续替换你的真实信息会非常直接。
          </div>
        </Reveal>
      </div>
    </section>
  )
}
