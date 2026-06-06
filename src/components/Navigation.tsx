import { ArrowUpRight, Mail } from 'lucide-react'
import { siteContent } from '@/content/siteContent'

const sections = [
  { id: 'about', label: '关于' },
  { id: 'timeline', label: '经历' },
  { id: 'works', label: '作品' },
  { id: 'news', label: '动态' },
  { id: 'contact', label: '联系' },
]

export default function Navigation() {
  const primaryLink = siteContent.socialLinks.find((item) => item.label === '简历')

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/70 px-4 py-3 shadow-[0_18px_40px_rgba(25,20,15,0.08)] backdrop-blur-md">
        <a href="#top" className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black text-[11px] tracking-[0.32em] text-white">
            YN
          </span>
          <span className="hidden sm:block">Editorial Profile</span>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium text-black/70 md:flex">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="transition hover:text-black">
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {primaryLink ? (
            <a
              href={primaryLink.href}
              className="hidden rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-black transition hover:-translate-y-0.5 hover:bg-black hover:text-white sm:inline-flex"
            >
              {primaryLink.label}
            </a>
          ) : null}
          <a
            href={`mailto:${siteContent.profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5"
          >
            <Mail className="h-3.5 w-3.5" />
            联系我
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
