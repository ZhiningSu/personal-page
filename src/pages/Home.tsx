import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import Navigation from '@/components/Navigation'
import NewsSection from '@/components/NewsSection'
import TimelineSection from '@/components/TimelineSection'
import WorksSection from '@/components/WorksSection'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(143,111,79,0.12),transparent_28%)]" />
      <Navigation />
      <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <WorksSection />
        <NewsSection />
        <ContactSection />
      </main>
      <footer className="relative mx-auto max-w-7xl px-5 pb-10 text-xs uppercase tracking-[0.24em] text-black/38 sm:px-8 lg:px-10">
        Editorial Homepage Template · React + Tailwind + Motion
      </footer>
    </div>
  )
}
