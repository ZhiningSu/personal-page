import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { siteContent } from '@/content/siteContent'

export default function HeroSection() {
  const [photoAvailable, setPhotoAvailable] = useState(Boolean(siteContent.profile.photoPath))
  const profileLinks = [
    siteContent.socialLinks.find((link) => link.label === 'CV'),
    siteContent.socialLinks.find((link) => link.label === 'Email'),
    siteContent.socialLinks.find((link) => link.label === 'GitHub'),
  ].filter(Boolean)

  return (
    <section id="top" className="section-anchor pt-4">
      <div className="space-y-10">
        <div className="grid gap-8 md:grid-cols-[210px_minmax(0,1fr)] md:items-start lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12">
          <Reveal delay={0.05}>
            <div className="mx-auto w-full max-w-[250px] space-y-4">
              {siteContent.profile.photoPath ? (
                photoAvailable ? (
                  <img
                    src={siteContent.profile.photoPath}
                    alt={siteContent.profile.photoAlt ?? `${siteContent.profile.name} portrait`}
                    className="aspect-[4/5] w-full border border-black/10 object-cover"
                    onError={() => setPhotoAvailable(false)}
                  />
                ) : (
                  <div className="flex aspect-[4/5] items-center justify-center border border-dashed border-black/15 px-6 text-center text-sm leading-7 text-black/45">
                    Add your photo at public/profile-photo.jpg
                  </div>
                )
              ) : null}

              {profileLinks.length ? (
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-[14px] text-[#1f66c1] sm:text-[15px]">
                  {profileLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-3 transition hover:opacity-70"
                    >
                      <span className="text-black/85">|</span>
                      <span>{link.label}</span>
                    </a>
                  ))}
                  <span className="text-black/85">|</span>
                </div>
              ) : null}
            </div>
          </Reveal>

          <Reveal className="space-y-6">
            <div className="space-y-5">
              <h1 className="text-4xl leading-tight text-black sm:text-5xl lg:text-[3.2rem]">{siteContent.profile.name}</h1>
              <p className="max-w-3xl text-base leading-8 text-black/70 sm:text-lg">{siteContent.profile.statement}</p>
              <p className="max-w-3xl text-[15px] leading-8 text-black/58">{siteContent.profile.summary}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="grid gap-4 border-t border-black/10 pt-8 sm:grid-cols-3">
            {siteContent.metrics.map((metric) => (
              <div key={metric.label} className="border-b border-black/10 pb-4 sm:border-b-0 sm:border-r sm:pr-6 last:border-r-0">
                <p className="serif-display text-2xl text-black">{metric.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-black/45">{metric.label}</p>
                <p className="mt-3 text-sm leading-6 text-black/55">{metric.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
