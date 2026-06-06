import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import Navigation from '@/components/Navigation'
import NewsSection from '@/components/NewsSection'
import TimelineSection from '@/components/TimelineSection'
import WorksSection from '@/components/WorksSection'

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-5 pb-20 pt-24 sm:px-8 lg:pt-28">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <WorksSection />
        <NewsSection />
        <ContactSection />
      </main>
      <footer className="mx-auto max-w-5xl px-5 pb-10 text-sm text-black/38 sm:px-8">
        Last updated in 2026.
      </footer>
    </div>
  )
}
