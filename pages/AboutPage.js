'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Footer, PageHeader, SectionLabel, SectionTitle, SectionHeader } from '../components'
import { ABOUT_FEATURES, TEACHER_BIO, SITE } from '../constants'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Mithu Gaana Layam Fine Arts"
          title="About the Teacher"
        />

        {/* ── MAIN BIO ── */}
        <section className="section">
          <div className="about-grid">
            <div className="about-img-wrap">
              <div className="about-corner about-corner--tl" />
              <div className="about-corner about-corner--tr" />
              <div className="about-corner about-corner--bl" />
              <div className="about-corner about-corner--br" />
              <Image
                src="/images/teacher-veena.jpg"
                alt="Smt. Tharmini Thishyan with veena"
                width={460}
                height={560}
                className="about-img"
                priority
              />
              <div className="about-img-overlay">
                <div className="about-img-name">{SITE.teacher}</div>
                <div className="about-img-title">Isaikalaimani</div>
                <div className="about-img-org">{SITE.name}</div>
              </div>
            </div>

            <div className="about-text">
              <SectionLabel>Who She Is</SectionLabel>
              <SectionTitle>25+ Years of Musical Mastery</SectionTitle>

              <div style={{ margin: '0.5rem 0 1.2rem' }}>
                <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.7rem' }}>
                  Prestigious Titles Awarded
                </p>
                <div className="titles-grid">
                  {TEACHER_BIO.titles.map((t) => (
                    <div key={t.tamil} className="title-item">
                      <span className="title-tamil">{t.tamil}</span>
                      <span className="title-english">{t.english}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-prose">
                {TEACHER_BIO.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="about-stats">
                {[
                  { label: 'Vocal', desc: 'Carnatic classical singing' },
                  { label: 'Pannisai', desc: 'South Indian instruments' },
                  { label: 'Violin', desc: 'Carnatic violin tradition' },
                ].map((s) => (
                  <div key={s.label} className="about-stat">
                    <strong>{s.label}</strong>
                    <span>{s.desc}</span>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: '1.6' }}>
                Trained at the <strong style={{ color: 'var(--text-mid)' }}>University of Jaffna, Sri Lanka</strong>
                &nbsp;&middot;&nbsp; Teaching since 2009
              </div>

              <Link href="/contact" className="btn btn--gold" style={{ alignSelf: 'flex-start' }}>
                Enroll Today
              </Link>
            </div>
          </div>
        </section>

        {/* ── STAGE PHOTO ── */}
        <section className="section--alt" style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="institution-grid">
              <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <Image
                  src="/images/logo.jpg"
                  alt="Mithu Gaana Layam Logo"
                  width={200}
                  height={200}
                  className="institution-logo"
                />
                <div className="institution-logo-name">Mithu Gaana Layam</div>
                <div className="institution-logo-sub">நுண்கலைக்கூடம் · Fine Arts Academy</div>
                <div className="institution-logo-sub">Est. 2009 · Durham Region, Ontario</div>
                <Image
                  src="/images/teacher-stage.jpg"
                  alt="Smt. Tharmini Thishyan speaking on stage"
                  width={280}
                  height={190}
                  style={{ borderRadius: '4px', border: '2px solid var(--gold-border)', objectFit: 'cover', width: '100%', maxWidth: '260px', height: 'auto' }}
                />
              </div>
              <div>
                <SectionLabel>The Institution</SectionLabel>
                <SectionTitle>Mithu Gaana Layam Fine Arts</SectionTitle>
                <p className="institution-desc" style={{ marginTop: '1rem' }}>
                  Founded in 2009, Mithu Gaana Layam Fine Arts — மிது கான லயம் நுண்கலைக்கூடம் — is
                  more than a music school. It is a cultural home for the Tamil community across
                  Durham Region, the GTA, and all of Ontario.
                </p>
                <p className="institution-desc">
                  From intimate beginners' lessons to large-scale stage performances at cultural
                  gatherings, the institution nurtures each student as a whole musician and as a
                  keeper of a centuries-old tradition.
                </p>
                <div className="feature-list">
                  {ABOUT_FEATURES.map((f) => (
                    <div key={f} className="feature-item">
                      <span className="feature-dot" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="about-cta">
          <div className="about-cta-inner">
            <h3 className="about-cta-title">Ready to Begin?</h3>
            <p className="about-cta-desc">Spots are limited — reach out today to register your interest.</p>
            <div className="about-cta-actions">
              <Link href="/contact" className="btn btn--gold">Contact Smt. Thishyan</Link>
              <Link href="/learn" className="btn btn--outline">Explore What We Teach</Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
