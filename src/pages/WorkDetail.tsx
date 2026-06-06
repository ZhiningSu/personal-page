import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { siteContent } from '@/content/siteContent'

function renderBlock(type: string, value: string, label?: string) {
  if (type === 'quote') {
    return (
      <blockquote className="rounded-[1.75rem] border border-black/10 bg-black/[0.03] p-6 text-xl leading-9 text-black sm:text-2xl">
        “{value}”
        {label ? <footer className="mt-4 text-xs uppercase tracking-[0.24em] text-black/45">{label}</footer> : null}
      </blockquote>
    )
  }

  if (type === 'metric') {
    return (
      <div className="rounded-[1.75rem] border border-black/10 bg-white/75 p-6">
        <p className="text-xs uppercase tracking-[0.24em] text-black/45">{label}</p>
        <p className="serif-display mt-3 text-4xl text-black">{value}</p>
      </div>
    )
  }

  if (type === 'image') {
    return (
      <figure className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/75">
        <img src={value} alt={label ?? 'Project image'} className="aspect-[16/10] w-full object-cover" />
        {label ? <figcaption className="px-5 py-4 text-sm text-black/52">{label}</figcaption> : null}
      </figure>
    )
  }

  return <p className="text-base leading-8 text-black/65">{value}</p>
}

export default function WorkDetail() {
  const { slug } = useParams()
  const workIndex = siteContent.works.findIndex((item) => item.slug === slug)
  const work = workIndex >= 0 ? siteContent.works[workIndex] : null

  if (!work) {
    return (
      <main className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-20">
        <div className="paper-panel w-full p-10 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-black/45">Not Found</p>
          <h1 className="mt-4 text-4xl text-black">Research item not found</h1>
          <Link to="/" className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </main>
    )
  }

  const previous = siteContent.works[workIndex - 1]
  const next = siteContent.works[workIndex + 1]

  return (
    <motion.main
      className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 lg:px-10"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.21, 1, 0.35, 1] }}
    >
      <div className="paper-panel overflow-hidden">
        <div className="border-b border-black/10 p-6 sm:p-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-black/62 transition hover:text-black">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-black/45">{work.year}</p>
            <h1 className="mt-4 text-5xl text-black sm:text-6xl">{work.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-black/62">{work.subtitle}</p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-black/58">{work.summary}</p>
          </div>
          <div className="rounded-[1.75rem] border border-black/10 bg-black/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">Project Links</p>
            <div className="mt-5 space-y-4">
              {work.links.map((link) => {
                const isInternal = link.href.startsWith('/work/')

                if (isInternal) {
                  return (
                    <Link key={link.label} to={link.href} className="flex items-center justify-between text-sm text-black/62 transition hover:text-black">
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-sm text-black/62 transition hover:text-black"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <img src={work.coverImage} alt={work.title} className="aspect-[16/8] w-full border-y border-black/10 object-cover" />

        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_220px]">
          <div className="space-y-6">
            {work.content.map((block, index) => (
              <div key={`${block.type}-${index}`}>{renderBlock(block.type, block.value, block.label)}</div>
            ))}
          </div>

          <aside className="space-y-4 border-t border-black/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">Keywords</p>
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black/52">
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div className="grid gap-4 border-t border-black/10 p-6 sm:grid-cols-2 sm:p-8">
          {previous ? (
            <Link to={`/work/${previous.slug}`} className="rounded-[1.5rem] border border-black/10 p-5 text-sm text-black/62 transition hover:bg-black hover:text-white">
              ← Previous · {previous.title}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/work/${next.slug}`}
              className="rounded-[1.5rem] border border-black/10 p-5 text-right text-sm text-black/62 transition hover:bg-black hover:text-white"
            >
              Next · {next.title} →
            </Link>
          ) : null}
        </div>
      </div>
    </motion.main>
  )
}
