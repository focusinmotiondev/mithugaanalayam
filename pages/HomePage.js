'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Footer, EnrollChip, EnrollBanner, OrnamentalDivider, SectionLabel, SectionTitle, SectionHeader, YouTubeEmbed } from '../components'
import { OFFERINGS, APPROACH, SITE } from '../constants'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-pattern" />

          {/* Left: text */}
          <div className="hero-left">
            <EnrollChip />
            <div className="hero-eyebrow">Carnatic Music</div>
            <h1 className="hero-title">
              Where <em>Ancient</em><br />
              Melodies Meet<br />
              Young Voices
            </h1>
            <p className="hero-sub">Vocal, Pannisai &amp; Violin — Durham Region, Ontario</p>
            <p className="hero-desc">
              Preserving the sacred tradition of Carnatic music and inspiring the next generation
              of artists through dedicated, heart-centered teaching.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn--gold">Begin Your Journey</Link>
              <Link href="/about" className="btn btn--outline">Meet the Teacher</Link>
            </div>
            <div className="hero-badges">
              {['In-Person Classes', 'Online Available', 'Exams & Grading', 'GTA & Ontario Programs'].map((b) => (
                <span key={b} className="hero-badge">{b}</span>
              ))}
            </div>
          </div>

          {/* Right: framed group photo */}
          <div className="hero-right">
            <div className="hero-img-frame">
              <div className="hero-img-corner hero-img-corner--tl" />
              <div className="hero-img-corner hero-img-corner--tr" />
              <div className="hero-img-corner hero-img-corner--bl" />
              <div className="hero-img-corner hero-img-corner--br" />
              <Image
                src="/images/students-group.jpg"
                alt="Mithu Gaana Layam students on stage"
                width={620}
                height={420}
                className="hero-img"
                priority
              />
              <div className="hero-img-caption">
                <span>Annual Recital — Mithu Gaana Layam Fine Arts</span>
              </div>
            </div>
          </div>
        </section>

        <OrnamentalDivider />

        {/* ── ABOUT TEASER ── */}
        <section className="section">
          <div className="home-about-grid">
            <div className="home-about-frame">
              <div className="home-about-corner home-about-corner--tl" />
              <div className="home-about-corner home-about-corner--tr" />
              <div className="home-about-corner home-about-corner--bl" />
              <div className="home-about-corner home-about-corner--br" />
              <Image
                src="/images/teacher-veena.jpg"
                alt="Smt. Tharmini Thishyan"
                width={400}
                height={540}
                className="home-about-img"
              />
              <div className="photo-overlay">
                <div className="photo-name">Smt. Tharmini Thishyan</div>
                <div className="photo-title">Isaikalaimani — Vocalist, Pannisai &amp; Violin</div>
              </div>
            </div>

            <div className="home-about-text">
              <SectionLabel>About the Teacher</SectionLabel>
              <SectionTitle>A Lifetime Devoted to Music</SectionTitle>
              <p>
                Smt. Tharmini Thishyan is a five-title acclaimed Carnatic musician and teacher
                based in Durham Region, Ontario, with over 25 years of experience in Vocal,
                Violin, and Pannisai.
              </p>
              <p>
                Through Mithu Gaana Layam Fine Arts — established in 2009 — she nurtures each
                student with patience and mastery, teaching not just the notes, but the soul
                behind them.
              </p>
              <p>
                Her students regularly perform at cultural events across Ontario and the Greater
                Toronto Area, and pursue formal examinations in Carnatic music.
              </p>
              <div className="home-highlights">
                {[
                  { label: 'Vocal', desc: 'Carnatic classical singing' },
                  { label: 'Pannisai', desc: 'Traditional South Indian instruments' },
                  { label: 'Violin', desc: 'Classical South Indian style' },
                  { label: 'Durham, ON', desc: 'GTA & Online available' },
                ].map((h) => (
                  <div key={h.label} className="home-highlight">
                    <strong>{h.label}</strong>
                    <span>{h.desc}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn btn--gold" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                Learn More About Her
              </Link>
            </div>
          </div>
        </section>

        {/* ── OFFERINGS ── */}
        <section className="section--alt" style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionHeader label="What We Offer" title="A Complete Musical Education" />
            <div className="offerings-grid">
              {OFFERINGS.map((o) => (
                <div key={o.title} className="offering-card">
                  <div className="offering-title">{o.title}</div>
                  <p className="offering-desc">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── YOUTUBE ── */}
        <section className="section">
          <div className="yt-section-grid">
            <div>
              <SectionLabel>Watch &amp; Listen</SectionLabel>
              <SectionTitle>See Our Students Perform</SectionTitle>
              <p style={{ fontSize: '15px', lineHeight: '1.85', color: 'var(--text-mid)', margin: '1rem 0 1.5rem' }}>
                Our YouTube channel features performances, recitals, and cultural programs from
                Mithu Gaana Layam Fine Arts. Subscribe to follow our students' musical journey.
              </p>
              <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="btn btn--gold">
                Visit Our Channel
              </a>
            </div>
            <YouTubeEmbed url={SITE.youtubeLatest} title="Mithu Gaana Layam Performance" />
          </div>
        </section>

        {/* ── APPROACH ── */}
        <section className="section--dark" style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionHeader label="Our Approach" title="Rooted in Tradition, Growing with Every Student" light />
            <div className="approach-grid">
              {APPROACH.map((a) => (
                <div key={a.title} className="approach-card">
                  <div className="approach-num">{a.num}</div>
                  <div>
                    <div className="approach-title">{a.title}</div>
                    <p className="approach-desc">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EnrollBanner
          title="Now Accepting New Students"
          subtitle="Limited spots — Durham Region & Online"
        />

      </main>
      <Footer />
    </>
  )
}
