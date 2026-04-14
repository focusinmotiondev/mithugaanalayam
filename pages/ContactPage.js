'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Navbar, Footer, PageHeader } from '../components'
import { SITE } from '../constants'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    interest: '',
    format: '',
    age: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New Enrollment Inquiry — ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested In: ${form.interest}\nPreferred Format: ${form.format}\nStudent Age: ${form.age}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const infoItems = [
    { label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/\D/g,'')}` },
    { label: 'Location', value: SITE.location, href: null },
    { label: 'Classes', value: 'In-Person & Online Available', href: null },
    { label: 'Facebook', value: 'Mithu Gaana Layam Fine Arts', href: SITE.facebook },
    { label: 'Instagram', value: '@mithu_gaana_layam', href: SITE.instagram },
    { label: 'YouTube', value: 'Mithu Gaana Layam Fine Arts', href: SITE.youtube },
  ]

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Get in Touch"
          title="Let's Start Your Journey"
          subtitle="Reach out to enroll or learn more — we'd love to hear from you"
        />

        <section className="section">
          <div className="contact-grid">

            {/* ── FORM ── */}
            <div className="contact-form-wrap">
              <div className="contact-form-title">Send Us a Message</div>
              <p className="contact-form-sub">Fill out the form below and we&rsquo;ll get back to you as soon as possible.</p>

              {submitted ? (
                <div className="success-box">
                  <div className="success-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="14" stroke="#5cb85c" strokeWidth="2" fill="rgba(92,184,92,0.1)" />
                      <path d="M10 16 L14 20 L22 12" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="success-title">Message Sent!</div>
                  <p className="success-desc">
                    Thank you for reaching out. Your email client should have opened with your message.
                    Smt. Thishyan will reply soon.
                  </p>
                  <button className="btn btn--gold" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} className="form-input" placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange} className="form-input" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="(647) 000-0000" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Student Age</label>
                      <input type="text" name="age" value={form.age} onChange={handleChange} className="form-input" placeholder="e.g. 8, Adult" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Interested In *</label>
                      <select name="interest" required value={form.interest} onChange={handleChange} className="form-select">
                        <option value="" disabled>Select a discipline</option>
                        <option>Carnatic Vocal</option>
                        <option>Pannisai</option>
                        <option>Carnatic Violin</option>
                        <option>Vocal &amp; Pannisai</option>
                        <option>Vocal &amp; Violin</option>
                        <option>All Three</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Preferred Format *</label>
                      <select name="format" required value={form.format} onChange={handleChange} className="form-select">
                        <option value="" disabled>Select a format</option>
                        <option>In-Person (Durham Region, ON)</option>
                        <option>Online (Google Meet)</option>
                        <option>Either works</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} className="form-textarea" rows={5} placeholder="Tell us about your musical background, goals, or any questions..." />
                  </div>
                  <button type="submit" className="btn btn--gold" style={{ width: '100%' }}>Send Message</button>
                </form>
              )}
            </div>

            {/* ── SIDEBAR ── */}
            <div className="contact-sidebar">
              <div className="teacher-card">
                <Image
                  src="/images/teacher-veena.jpg"
                  alt="Smt. Tharmini Thishyan"
                  width={400}
                  height={280}
                  className="teacher-thumb"
                />
                <div className="teacher-card-body">
                  <div className="teacher-card-name">{SITE.teacher}</div>
                  <div className="teacher-card-title-text">{SITE.teacherTitle}</div>
                </div>
              </div>

              <div className="info-cards">
                {infoItems.map((item) =>
                  item.href ? (
                    <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="info-card">
                      <div className="info-label">{item.label}</div>
                      <div className="info-value">{item.value}</div>
                    </a>
                  ) : (
                    <div key={item.label} className="info-card">
                      <div className="info-label">{item.label}</div>
                      <div className="info-value">{item.value}</div>
                    </div>
                  )
                )}
              </div>

              <div className="enroll-note">
                <span className="enroll-note-dot" />
                <div>
                  <div className="enroll-note-title">Now Accepting Students</div>
                  <div className="enroll-note-desc">Reach out today — limited spots available.</div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
