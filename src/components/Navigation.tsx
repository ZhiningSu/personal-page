import { ArrowUpRight, Mail } from 'lucide-react'
import { siteContent } from '@/content/siteContent'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Experience' },
  { id: 'works', label: 'Research' },
  { id: 'interests', label: 'Interests' },
  { id: 'news', label: 'Updates' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation() {
  const primaryLink = siteContent.socialLinks[0]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[rgba(247,245,241,0.94)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="text-sm font-semibold tracking-[0.02em] text-black">
          Yanda Su
        </a>

        <nav className="hidden items-center gap-5 text-sm text-black/62 md:flex">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="transition hover:text-black">
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {primaryLink ? (
            <a
              href={primaryLink.href}
              className="hidden text-sm text-black/62 transition hover:text-black sm:inline-flex"
            >
              {primaryLink.label}
            </a>
          ) : null}
          <a
            href={`mailto:${siteContent.profile.email}`}
            className="inline-flex items-center gap-2 text-sm text-black/62 transition hover:text-black"
          >
            <Mail className="h-4 w-4" />
            Contact
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
