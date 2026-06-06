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
        title="代表作品"
        description="既可以展示论文、项目、文章，也可以展示产品案例。卡片与详情页共用同一份数据源。"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {siteContent.works.map((work, index) => (
          <Reveal key={work.slug} delay={index * 0.08}>
            <article className="paper-panel group flex h-full flex-col overflow-hidden">
              <div className="aspect-[16/11] overflow-hidden border-b border-black/10">
                <img
                  src={work.coverImage}
                  alt={work.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-black/45">
                  <span>{work.year}</span>
                  <span>{work.tags[0]}</span>
                </div>

                <div className="mt-5 space-y-3">
                  <h3 className="text-3xl text-black">{work.title}</h3>
                  <p className="text-sm leading-7 text-black/58">{work.subtitle}</p>
                  <p className="text-sm leading-7 text-black/58">{work.summary}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black/52">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-black/10 pt-5">
                  <Link to={`/work/${work.slug}`} className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-black">
                    打开详情
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={work.links[1]?.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-black/55 transition hover:text-black"
                  >
                    外部链接
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
