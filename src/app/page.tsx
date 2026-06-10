'use client';

import { useState } from 'react';

const APP_URL = 'https://app.kanaku.co.in';
const WA_URL  = 'https://wa.me/919787499502';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-extrabold text-[#00307e] tracking-tight">
            kanaku<span className="text-slate-400 font-light">.co.in</span>
          </a>

          {/* desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-[#00307e] transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-[#00307e] transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-[#00307e] transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`${APP_URL}/login`}
              className="text-sm font-medium text-[#00307e] hover:underline"
            >
              Log in
            </a>
            <a
              href={`${APP_URL}/register`}
              className="bg-[#00307e] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* mobile hamburger */}
          <button
            className="md:hidden text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium text-slate-700">
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <hr className="border-slate-100" />
            <a href={`${APP_URL}/login`} className="text-[#00307e]">Log in</a>
            <a
              href={`${APP_URL}/register`}
              className="bg-[#00307e] text-white text-center py-2 rounded-lg"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="bg-[#00307e] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            Smart Compliance Platform for Small Business
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Structured Accounting.<br />Stress-free Compliance.
          </h1>
          <p className="text-blue-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Upload invoices, manage compliance, and track filings from one structured dashboard — built for Small businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#00307e] font-bold text-base px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Call Us
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white font-semibold text-base px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Pillars bar ── */}
      <section className="bg-[#001f52] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 sm:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
          {[
            { icon: '🏢', label: 'Built for Indian SMEs' },
            { icon: '⚙️', label: 'Structured Compliance Workflow' },
            { icon: '🔒', label: 'Secure Document Handling' },
            { icon: '🏆', label: 'Run by Experts with 20+ Years of Experience' },
          ].map(p => (
            <div key={p.label} className="py-5 sm:py-4 px-6">
              <span className="text-2xl block mb-2">{p.icon}</span>
              <p className="text-white font-bold text-sm sm:text-base">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00307e] mb-3">Everything you need to stay compliant</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">A complete business finance operations platform</p>
          </div>

          <div className="flex flex-col gap-8">

            {/* GST Management Suite */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#00307e] text-white flex items-center justify-center px-8 py-6 sm:py-0 sm:min-h-[180px] sm:w-52 shrink-0">
                  <p className="font-extrabold text-base text-center leading-snug">GST Management Suite</p>
                </div>
                <div className="flex-1 p-6">
                  <p className="text-sm text-slate-500 bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 mb-5 leading-relaxed">
                    Structured GST workflows with automated reconciliation, compliance monitoring, and expert-reviewed filing support.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { icon: '📄', label: 'Smart Invoice Processing' },
                      { icon: '🔄', label: 'Smart ITC Reconciliation' },
                      { icon: '⚠️', label: 'Compliance Alerts' },
                      { icon: '✅', label: 'Expert Compliance Review' },
                      { icon: '⏰', label: 'Deadline Tracking' },
                    ].map(f => (
                      <div key={f.label} className="flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2.5">
                        <span className="text-lg shrink-0">{f.icon}</span>
                        <span className="text-xs font-semibold text-slate-700 leading-snug">{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Finance & Bookkeeping Operations */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#00307e] text-white flex items-center justify-center px-8 py-6 sm:py-0 sm:min-h-[180px] sm:w-52 shrink-0">
                  <p className="font-extrabold text-base text-center leading-snug">Finance &amp; Bookkeeping Operations</p>
                </div>
                <div className="flex-1 p-6">
                  <p className="text-sm text-slate-500 bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 mb-5 leading-relaxed">
                    Professional bookkeeping operations with structured accounting workflows and financial visibility.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { icon: '📘', label: 'Structured Bookkeeping' },
                      { icon: '📊', label: 'Financial Reporting' },
                      { icon: '📈', label: 'Business Dashboard' },
                      { icon: '🔒', label: 'Secure Document Vault' },
                      { icon: '💼', label: 'AP/AR Insights' },
                    ].map(f => (
                      <div key={f.label} className="flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2.5">
                        <span className="text-lg shrink-0">{f.icon}</span>
                        <span className="text-xs font-semibold text-slate-700 leading-snug">{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00307e] mb-3">How Kanaku works</h2>
            <p className="text-slate-500 text-lg">Four simple steps — from invoice to filed return.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Upload',          desc: 'Upload invoices, purchase bills, and GST documents securely from any device.' },
              { step: '02', title: 'AI Extracts',     desc: 'Our AI reads every field and flags anything unusual for review.' },
              { step: '03', title: 'Expert Verifies', desc: 'Compliance experts reconcile with GSTR-2B and validate filing accuracy.' },
              { step: '04', title: 'Return Filed',    desc: 'GST returns are prepared, reviewed, and filed with confirmation tracking.' },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#00307e] text-white text-xl font-extrabold mb-4">
                  {item.step}
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-0 h-0.5 bg-slate-200" />
                )}
                <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#00307e] font-bold text-lg mt-14">
            Built to simplify monthly GST operations for Small businesses.
          </p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00307e] mb-3">Simple, transparent pricing</h2>
            <p className="text-slate-500 text-lg">Choose a plan that fits your business. No hidden charges.</p>
          </div>

          {/* GST Management Suite Plans */}
          <div className="mb-12">
            <h3 className="text-center text-xl font-bold text-slate-700 mb-6">GST Management Suite</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  name: 'Basic',
                  price: '₹999',
                  period: '/month',
                  desc: 'Micro & Individuals consultants',
                  features: ['Up to 100 invoices/month', 'AI invoice extraction', 'GSTR-1 & GSTR-3B filing', 'On call Support'],
                  cta: 'Get Started',
                  highlight: false,
                },
                {
                  name: 'Professional',
                  price: '₹1,999',
                  period: '/month',
                  desc: 'For growing businesses with higher volume',
                  features: ['Up to 500 invoices/month', 'AI extraction + GSTR-2B reconciliation', 'Dedicated Expert Support', 'WhatsApp alerts', 'Deadline reminders'],
                  cta: 'Get Started',
                  highlight: true,
                },
                {
                  name: 'QRMP',
                  price: '₹2,499',
                  period: '/Quarter',
                  desc: 'Unlimited volume, dedicated accountant',
                  features: ['250 invoices', 'GSTR-1 & GSTR-3B', 'ITC Reconciliation'],
                  cta: 'Contact Us',
                  highlight: false,
                },
              ].map(plan => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 border-2 flex flex-col ${
                    plan.highlight
                      ? 'border-[#00307e] bg-[#00307e] text-white shadow-xl scale-105'
                      : 'border-slate-200 bg-white text-slate-800'
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 self-start">
                      Most Popular
                    </span>
                  )}
                  <h4 className={`text-xl font-extrabold mb-1 ${plan.highlight ? 'text-white' : 'text-[#00307e]'}`}>{plan.name}</h4>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl font-extrabold">{plan.price}</span>
                    <span className={`text-sm mb-1 ${plan.highlight ? 'text-blue-200' : 'text-slate-400'}`}>{plan.period}</span>
                  </div>
                  <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>{plan.desc}</p>
                  <ul className="flex-1 space-y-2 mb-6">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className={plan.highlight ? 'text-green-300' : 'text-green-500'}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.cta === 'Contact Us' ? WA_URL : `${APP_URL}/register`}
                    target={plan.cta === 'Contact Us' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`text-center font-bold py-2.5 rounded-xl transition-colors text-sm ${
                      plan.highlight
                        ? 'bg-white text-[#00307e] hover:bg-blue-50'
                        : 'bg-[#00307e] text-white hover:bg-blue-900'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Accountant Plans */}
          <div>
            <h3 className="text-center text-xl font-bold text-slate-700 mb-6">Smart Accountant Plans</h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                {
                  name: 'Starter',
                  price: '₹2,999',
                  period: '/month',
                  desc: 'Full bookkeeping for small businesses',
                  features: ['Up to 40 Lacs revenue', 'P&L and Balance Sheet', 'GST compliance included', 'Monthly MIS report'],
                  highlight: false,
                },
                {
                  name: 'Growth',
                  price: '₹4,999',
                  period: '/month',
                  desc: 'Advanced accounting + tax planning',
                  features: ['Unlimited transactions', 'Dedicated accountant', 'Tax planning advisory', 'Priority support'],
                  highlight: true,
                },
              ].map(plan => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 border-2 flex flex-col ${
                    plan.highlight
                      ? 'border-[#00307e] bg-[#00307e] text-white shadow-xl'
                      : 'border-slate-200 bg-white text-slate-800'
                  }`}
                >
                  <h4 className={`text-xl font-extrabold mb-1 ${plan.highlight ? 'text-white' : 'text-[#00307e]'}`}>{plan.name}</h4>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl font-extrabold">{plan.price}</span>
                    <span className={`text-sm mb-1 ${plan.highlight ? 'text-blue-200' : 'text-slate-400'}`}>{plan.period}</span>
                  </div>
                  <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>{plan.desc}</p>
                  <ul className="flex-1 space-y-2 mb-6">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className={plan.highlight ? 'text-green-300' : 'text-green-500'}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${APP_URL}/register`}
                    className={`text-center font-bold py-2.5 rounded-xl transition-colors text-sm ${
                      plan.highlight
                        ? 'bg-white text-[#00307e] hover:bg-blue-50'
                        : 'bg-[#00307e] text-white hover:bg-blue-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-[#00307e] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Reduce Manual GST Workload by up to 80%?</h2>
          <p className="text-blue-200 text-lg mb-8">Trusted by Indian businesses for structured bookkeeping and on-time GST compliance</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#00307e] font-bold text-base px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Call Us
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white font-semibold text-base px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-white font-extrabold text-lg">kanaku<span className="text-slate-400 font-light">.co.in</span></span>
            <p className="text-xs mt-1">Smart GST &amp; Accounting for Indian Businesses</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
            <a href={`${APP_URL}/login`} className="hover:text-white transition-colors">Login</a>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} kanaku.co.in. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
