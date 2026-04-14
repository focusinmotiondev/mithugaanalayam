'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Footer, PageHeader, SectionHeader, EnrollBanner, YouTubeEmbed } from '../components'
import { GALLERY_MOMENTS, SITE } from '../constants'

const GALLERY_PHOTOS = [
  { src: '/images/gallery/gallery-1.jpg', alt: 'Students at a cultural event — Mithu Gaana Layam' },
  { src: '/images/gallery/gallery-2.jpg', alt: 'Students group photo — Mithu Gaana Layam' },
  { src: '/images/gallery/gallery-3.jpg', alt: 'Students performing — Tamil Isai Kalaamanram' },
  { src: '/images/gallery/gallery-4.jpg', alt: 'Students performing at Eelam event' },
  { src: '/images/gallery/gallery-5.jpg', alt: 'Students performing — Tamil Heritage Month' },
  { src: '/images/gallery/gallery-6.jpg', alt: 'Students performing — Tamil Isai Kalaamanram Ontario' },
  { src: '/images/students-group.jpg', alt: 'Annual Recital — Mithu Gaana Layam Fine Arts' },
]

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Moments & Memories"
          title="Gallery"
          subtitle="Students, performances, and the joy of music"
        />

        {/* ── GROUP PHOTO HERO ── */}
        <section className="section">
          <div className="gallery-hero-wrap">
            <Image
              src="/images/students-group.jpg"
              alt="Mithu Gaana Layam students — annual recital"
              width={1200}
              height={600}
              className="gallery-hero-img"
              priority
            />
            <div className="gallery-hero-caption">
              <div className="gallery-hero-title">Annual Recital — Mithu Gaana Layam Fine Arts</div>
              <div className="gallery-hero-sub">Students performing across Ontario &amp; the Greater Toronto Area</div>
            </div>
          </div>
        </section>

        {/* ── WHAT YOU'LL FIND ── */}
        <section className="section--alt" style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionHeader label="What You&apos;ll Find" title="A Living Record of Our Community" />
            <div className="gallery-moments-grid">
              {GALLERY_MOMENTS.map((m) => (
                <div key={m.title} className="gallery-moment-card">
                  <div className="gallery-moment-title">{m.title}</div>
                  <div className="gallery-moment-desc">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHOTO GRID ── */}
        <section className="section">
          <SectionHeader label="Photo Album" title="Performance Highlights" />
          <div className="gallery-real-grid">
            {GALLERY_PHOTOS.map((photo, i) => (
              <div key={i} className="gallery-real-item">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={420}
                  className="gallery-real-img"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── FACEBOOK BANNER ── */}
        <section className="gallery-fb-banner">
          <div className="gallery-fb-banner-inner">
            <div className="gallery-fb-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" fill="rgba(200,146,42,0.15)" stroke="var(--gold)" strokeWidth="1.5"/>
                <path d="M23 13h-3a4 4 0 00-4 4v3h-3v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 011-1h3v-3z" fill="var(--gold)"/>
              </svg>
            </div>
            <div className="gallery-fb-text">
              <div className="gallery-fb-title">See the Full Gallery on Facebook</div>
              <div className="gallery-fb-desc">
                Hundreds more photos from our performances, recitals, and cultural events across Ontario.
                Follow our page to stay connected with the Mithu Gaana Layam community.
              </div>
            </div>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold"
              style={{ fontSize: '14px', padding: '14px 36px', flexShrink: 0 }}
            >
              View All Photos on Facebook
            </a>
          </div>
        </section>

        {/* ── YOUTUBE ── */}
        <section className="section--alt" style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="yt-section-grid">
              <div>
                <span className="section-label">Latest Video</span>
                <h2 className="section-title" style={{ marginBottom: '1rem' }}>Watch Our Students Perform</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.85', color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
                  Subscribe to our YouTube channel to follow recitals, cultural programs, and
                  student performances from Mithu Gaana Layam Fine Arts across Ontario.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="btn btn--gold">
                    Subscribe on YouTube
                  </a>
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--gold">
                    Follow on Instagram
                  </a>
                </div>
              </div>
              <YouTubeEmbed url={SITE.youtubeLatest} title="Mithu Gaana Layam Performance" />
            </div>
          </div>
        </section>

        {/* ── SOCIAL LINKS ── */}
        <section className="section--dark" style={{ padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Follow Along</span>
            <h2 className="section-title section-title--light" style={{ marginBottom: '1rem' }}>
              Stay Connected With Us
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(245,230,200,0.7)', lineHeight: '1.75', marginBottom: '2rem' }}>
              More photos, videos, and community moments are shared across our social channels.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="btn btn--gold">Facebook</a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--gold">Instagram</a>
              <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="btn btn--gold">YouTube</a>
            </div>
          </div>
        </section>

        <EnrollBanner
          title="Want Your Child in Our Next Program?"
          subtitle="Enroll today and be part of our next performance."
        />

      </main>
      <Footer />
    </>
  )
}
