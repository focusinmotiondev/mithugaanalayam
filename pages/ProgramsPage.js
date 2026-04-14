'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Footer, PageHeader, SectionHeader, EnrollBanner } from '../components'
import { PROGRAM_STEPS, SITE } from '../constants'

export default function ProgramsPage() {
  const highlights = [
    {
      title: 'Annual Recitals',
      desc: 'Fully organized performances where all students — from beginners to advanced — come together to showcase what they have learned throughout the year.',
    },
    {
      title: 'GTA & Ontario Cultural Programs',
      desc: 'Tamil community celebrations and cultural events across the Greater Toronto Area and Ontario, where students represent Mithu Gaana Layam on stage.',
    },
    {
      title: 'Student Milestone Performances',
      desc: 'Special performances marking major achievements in a student\'s musical journey — a meaningful moment for families and the school community.',
    },
  ]

  const examItems = [
    {
      title: 'Theory & Practical',
      desc: 'Examinations cover both written music theory and live performance — developing truly well-rounded Carnatic musicians.',
    },
    {
      title: 'All Skill Levels',
      desc: 'From beginner grades through to advanced certification — a clear, structured pathway for every student regardless of age.',
    },
    {
      title: 'Dedicated Preparation',
      desc: 'Smt. Thishyan tailors lessons in the months leading up to exams, ensuring every student feels fully confident and prepared.',
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Beyond the Lesson"
          title="Programs & Performances"
          subtitle="Music comes alive when shared — our students perform, grow, and inspire"
        />

        {/* ── INTRO ── */}
        <section className="section">
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Cultural Programs</span>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Our Students Take the Stage</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.9', color: 'var(--text-mid)', marginBottom: '1rem' }}>
              Smt. Thishyan believes deeply that performing is as important as practising. Students
              at Mithu Gaana Layam Fine Arts regularly participate in cultural events, community
              programs, and organized recitals — gaining confidence, stage presence, and the
              irreplaceable experience of sharing their music with a live audience.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.9', color: 'var(--text-mid)' }}>
              These programs connect our students to the broader Tamil-Canadian community across
              Ontario and the GTA, creating lasting memories that inspire them to keep growing.
            </p>
          </div>
        </section>

        {/* ── PERFORMANCE TYPES ── */}
        <section className="section--alt" style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionHeader label="What We Participate In" title="Three Types of Performances" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {highlights.map((h, i) => (
                <div key={h.title} className="programs-highlight-card" style={{ borderTopWidth: '3px', borderTopStyle: 'solid', borderTopColor: 'var(--gold)', borderLeft: 'none', padding: '2rem' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '40px', fontWeight: 700, color: 'rgba(200,146,42,0.22)', lineHeight: 1, marginBottom: '1rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="programs-highlight-card-title">{h.title}</div>
                  <div className="programs-highlight-card-desc">{h.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GROUP PHOTO ── */}
        <section className="section">
          <div className="gallery-hero-wrap">
            <Image
              src="/images/students-group.jpg"
              alt="Mithu Gaana Layam students at annual recital"
              width={1200}
              height={500}
              className="gallery-hero-img"
            />
            <div className="gallery-hero-caption">
              <div className="gallery-hero-title">Annual Recital — Mithu Gaana Layam Fine Arts</div>
              <div className="gallery-hero-sub">Students performing across Ontario &amp; the Greater Toronto Area</div>
            </div>
          </div>
        </section>

        {/* ── PROCESS STEPS ── */}
        <section className="section--alt" style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionHeader label="How We Prepare" title="The Journey to Performance" />
            <div className="programs-steps-grid">
              {PROGRAM_STEPS.map((s, i) => (
                <div key={s.title} className="programs-step-card">
                  <div className="programs-step-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="programs-step-title">{s.title}</div>
                  <p className="programs-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXAMS ── */}
        <section className="section--dark" style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="section-label">Examinations</span>
              <h2 className="section-title section-title--light">Formal Grading &amp; Certification</h2>
              <p style={{ fontSize: '15px', color: 'rgba(245,230,200,0.7)', lineHeight: '1.8', maxWidth: '620px', margin: '1rem auto 0' }}>
                For families who want a formal record of their child's musical progress, we offer
                structured exam preparation aligned with recognized Carnatic music examination boards.
                Examinations are a milestone — not a finish line.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {examItems.map((e) => (
                <div key={e.title} style={{ background: 'rgba(200,146,42,0.07)', border: '1px solid rgba(200,146,42,0.2)', padding: '2rem', borderRadius: '4px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--gold-light)', marginBottom: '0.6rem' }}>{e.title}</div>
                  <div style={{ fontSize: '14px', lineHeight: '1.75', color: 'rgba(245,230,200,0.65)' }}>{e.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link href="/contact" className="btn btn--gold">Ask About Exams</Link>
            </div>
          </div>
        </section>

        <EnrollBanner
          title="Want Your Child on Stage?"
          subtitle="Enroll today — new students are welcome."
        />

      </main>
      <Footer />
    </>
  )
}
