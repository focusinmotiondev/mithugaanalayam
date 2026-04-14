'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, SITE } from './constants'

// ─── Page Header ─────────────────────────────────────────────
export function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="page-header">
      <div className="page-header-pattern" />
      <div className="page-header-content">
        {eyebrow && <span className="page-eyebrow">{eyebrow}</span>}
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </div>
  )
}

// ─── Section Label ───────────────────────────────────────────
export function SectionLabel({ children }) {
  return <span className="section-label">{children}</span>
}

// ─── Section Title ───────────────────────────────────────────
export function SectionTitle({ children, light = false }) {
  return <h2 className={`section-title${light ? ' section-title--light' : ''}`}>{children}</h2>
}

// ─── Section Header ──────────────────────────────────────────
export function SectionHeader({ label, title, light = false }) {
  return (
    <div className="section-header">
      <SectionLabel>{label}</SectionLabel>
      <SectionTitle light={light}>{title}</SectionTitle>
    </div>
  )
}

// ─── Enroll Chip ─────────────────────────────────────────────
export function EnrollChip() {
  return (
    <div className="enroll-chip">
      <span className="enroll-dot" />
      Now Enrolling Students
    </div>
  )
}

// ─── Enroll Banner ───────────────────────────────────────────
export function EnrollBanner({ title, subtitle }) {
  return (
    <div className="enroll-banner">
      <div>
        <h3 className="enroll-banner-title">{title}</h3>
        <p className="enroll-banner-sub">{subtitle}</p>
      </div>
      <Link href="/contact" className="btn btn--dark">Get in Touch</Link>
    </div>
  )
}

// ─── Ornamental Divider ──────────────────────────────────────
export function OrnamentalDivider() {
  return (
    <div className="ornamental-divider">
      <span>✦</span>
    </div>
  )
}

// ─── YouTube Embed ───────────────────────────────────────────
export function YouTubeEmbed({ url, title = 'Mithu Gaana Layam' }) {
  return (
    <div className="yt-wrap">
      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="yt-iframe"
      />
    </div>
  )
}

// ─── Navbar ──────────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <div className="navbar-logo-img-wrap">
            <Image src="/images/logo.jpg" alt="Mithu Gaana Layam Logo" width={46} height={46} className="navbar-logo-img" />
          </div>
          <div className="navbar-brand">
            <span className="navbar-brand-main">Mithu Gaana Layam</span>
            <span className="navbar-brand-sub">Fine Arts</span>
          </div>
        </Link>

        <ul className={`navbar-links${menuOpen ? ' navbar-links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="navbar-link" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="navbar-cta" onClick={() => setMenuOpen(false)}>
              Enroll Now
            </Link>
          </li>
        </ul>

        <button
          className="navbar-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`burger-line${menuOpen ? ' burger-line--1' : ''}`} />
          <span className={`burger-line${menuOpen ? ' burger-line--2' : ''}`} />
          <span className={`burger-line${menuOpen ? ' burger-line--3' : ''}`} />
        </button>
      </div>
    </nav>
  )
}

// ─── Footer ──────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <Image src="/images/logo.jpg" alt="Mithu Gaana Layam" width={50} height={50} className="footer-logo-img" />
          </div>
          <div>
            <div className="footer-brand-name">Mithu Gaana Layam Fine Arts</div>
            <div className="footer-brand-sub">{SITE.location}</div>
            <div className="footer-social">
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
          ))}
        </div>

        <div className="footer-contact">
          <a href={`mailto:${SITE.email}`} className="footer-link">{SITE.email}</a>
          <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="footer-link">{SITE.phone}</a>
          <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
          <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="footer-link">YouTube</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mithu Gaana Layam Fine Arts. All rights reserved.</p>
      </div>
    </footer>
  )
}
