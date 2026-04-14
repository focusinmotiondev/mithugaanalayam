'use client'
import Link from 'next/link'
import { Navbar, Footer, PageHeader, SectionHeader, EnrollBanner } from '../components'
import { DISCIPLINES, CLASS_FORMATS, LEVELS } from '../constants'

export default function LearnPage() {
  const examPoints = [
    'Structured syllabus aligned with recognized Carnatic music examination boards',
    'Theory and practical components both covered',
    'Age-appropriate exam levels from beginner to advanced',
    'Students perform in recitals as part of their development',
    'Clear milestones and progress tracking throughout',
  ]

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Curriculum & Classes"
          title="What We Teach"
          subtitle="Carnatic vocal, pannisai & violin — from your first note to the concert stage"
        />

        {/* ── DISCIPLINES (3 col) ── */}
        <section className="section">
          <SectionHeader label="Our Disciplines" title="Three Paths to Musical Mastery" />
          <div className="discipline-grid--3">
            {DISCIPLINES.map((d) => (
              <div key={d.title} className="discipline-card">
                <div className="discipline-title">{d.title}</div>
                <p className="discipline-desc">{d.desc}</p>
                <ul className="discipline-list">
                  {d.topics.map((t) => (
                    <li key={t}><span className="discipline-dot" />{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── FORMATS ── */}
        <section className="section--alt" style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionHeader label="Class Formats" title="Learn Your Way" />
            <div className="format-grid">
              {CLASS_FORMATS.map((f) => (
                <div key={f.title} className="format-card">
                  <div className="format-num">{f.num}</div>
                  <div className="format-title">{f.title}</div>
                  {f.subtitle && <div className="format-subtitle">{f.subtitle}</div>}
                  <p className="format-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEVELS ── */}
        <section className="section">
          <SectionHeader label="Who Is This For?" title="Students at Every Stage" />
          <div className="levels-grid">
            {LEVELS.map((l) => (
              <div key={l.title} className="level-card">
                <div className="level-label">{l.level}</div>
                <div className="level-title">{l.title}</div>
                <p className="level-desc">{l.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXAMS ── */}
        <section className="section--dark" style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="exam-grid">
              <div>
                <span className="section-label">Examinations</span>
                <h2 className="section-title section-title--light" style={{ marginBottom: '1.5rem' }}>
                  Formal Grading &amp; Certification
                </h2>
                <p className="exam-body">
                  Smt. Thishyan prepares students for formal Carnatic music examinations, offering
                  a structured pathway of achievement. Exams mark clear milestones in a student&apos;s
                  journey and give families a visible measure of their child's progress.
                </p>
                <p className="exam-body">
                  Students are prepared thoroughly — understanding not just the pieces but the
                  theory, history, and tradition behind them.
                </p>
              </div>
              <div className="exam-points">
                {examPoints.map((p) => (
                  <div key={p} className="exam-point">
                    <span className="exam-dot" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <EnrollBanner
          title="Ready to Start Learning?"
          subtitle="Reach out to discuss class availability and schedules."
        />

      </main>
      <Footer />
    </>
  )
}
