import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Brain, Cloud, Lock, Smartphone, Link as LinkIcon, BarChart3, Bot, Globe } from 'lucide-react';
import { useScrollReveal, useGSAPReveal } from '../hooks/useAnimations';
import { Helmet } from "react-helmet-async";
import EncryptedText from '../components/ui/EncryptedText';
import CometCard from '../components/ui/CometCard';

const SERVICES = [
  { Icon: Zap, title: 'Website Design and Development', desc: 'We create responsive, modern websites focused on performance, user experience, and scalable design for growing businesses online.' },
  { Icon: Brain, title: 'IT Support & Consulting', desc: 'Providing reliable IT support and expert consulting to optimize systems, reduce downtime, and improve overall business efficiency.' },
  { Icon: Cloud, title: 'Software Solutions', desc: 'Custom software solutions designed to solve complex business problems, improve workflows, and enhance operational productivity across industries.' },
  { Icon: Lock, title: 'Digital Transformations', desc: 'Helping businesses modernize operations through digital tools, automation, and technology-driven strategies that improve efficiency and growth.' },
  { Icon: Smartphone, title: 'Technology Integration', desc: 'Seamlessly connecting systems, platforms, and APIs to streamline workflows, improve communication, and unify business operations effectively.' },
  { Icon: LinkIcon, title: 'Business Automation', desc: 'Automating repetitive business processes to save time, reduce errors, and increase productivity using smart digital solutions.' },
];

const TESTIMONIALS = [
  {
    text: "Avarionyx Technologies transformed our legacy system into a modern, AI-powered platform. Delivery was ahead of schedule and the quality was exceptional.",
    name: 'Sarah Chen', role: 'CTO, Nexus Corp', initial: 'S',
  },
  {
    text: "Their cloud architecture reduced our infrastructure costs by 60% while improving performance threefold. Truly remarkable engineering.",
    name: 'Marcus Reid', role: 'VP Engineering, Orbit Labs', initial: 'M',
  },
  {
    text: "The mobile app they built for us hit 50k downloads in the first month. The attention to detail in the UX was outstanding.",
    name: 'Priya Nair', role: 'Product Lead, Vela Health', initial: 'P',
  },
];

const MARQUEE_ITEMS = [
  { Icon: Zap, text: 'Custom Software' },
  { Icon: Brain, text: 'Artificial Intelligence' },
  { Icon: Cloud, text: 'Cloud Solutions' },
  { Icon: Lock, text: 'Cybersecurity' },
  { Icon: Smartphone, text: 'Mobile Apps' },
  { Icon: LinkIcon, text: 'API Integration' },
  { Icon: BarChart3, text: 'Data Analytics' },
  { Icon: Bot, text: 'Process Automation' },
  { Icon: Globe, text: 'Web Platforms' },
];

export default function Home() {
  useScrollReveal();
  const servicesRef = useRef(null);
  const bentoRef = useRef(null);
  useGSAPReveal(servicesRef);
  useGSAPReveal(bentoRef);

  return (
    <>
      <Helmet>
        <title>Avarionyx Technologies | AI-Powered Software Safety Solutions</title>

        <meta
          name="description"
          content="Avarionyx Technologies develops AI-powered software, cloud infrastructure, cybersecurity, and industrial safety solutions."
        />
      </Helmet>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-glow" />
        <div className="hero-content container">
          <div className="hero-badge">
            <span />
            Now Available — Enterprise Plans
          </div>
          <h1>
            Innovating the Future,<br />
            <span className="gradient-text">One Solution at a Time</span>
          </h1>
          <p className="hero-sub">
            <EncryptedText
              text="We deliver intelligent, scalable and reliable technology solutiomns that empower  businesses to grow and and operate more efficiently."
              speed={20}
            />
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn-primary">
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link to="/about" className="btn-ghost">Our Story</Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <div key={i} className="marquee-inner">
              {MARQUEE_ITEMS.map((item, j) => {
                const IconComponent = item.Icon;
                return (
                  <div key={j} className="marquee-item">
                    <IconComponent size={18} style={{ display: 'inline-block', marginRight: '8px' }} />
                    {item.text}
                    {j < MARQUEE_ITEMS.length - 1 && <span style={{ margin: '0 12px', opacity: 0.2 }}>·</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="services" id="services" ref={servicesRef}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag">What We Do</div>
            <h2>End-to-end software<br />engineering excellence</h2>
            <p>From concept to deployment, we handle every layer of your digital stack with precision and craft.</p>
          </div>
          <div className="services-grid" style={{ marginTop: '64px' }}>
            {SERVICES.map((s, i) => {
              const IconComponent = s.Icon;
              return (
                <div key={i} className="service-card" data-reveal style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="service-icon"><IconComponent size={32} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BENTO ── */}
      <section className="bento" ref={bentoRef}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag">Why Avarionyx</div>
            <h2>Built for scale,<br />crafted for humans</h2>
          </div>
          <div className="bento-grid">
            <CometCard className="bento-card bento-1" >
              <div data-reveal>
                <div className="bento-badge">Performance</div>
                <h3>10x faster delivery without compromising quality</h3>
                <p>Our agile-first methodology and battle-tested frameworks let us ship production-ready code in record time.</p>
                <div className="bento-visual-chart">
                  {[40, 65, 55, 80, 70, 90, 85, 100].map((h, i) => (
                    <div key={i} className="chart-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>
            </CometCard>

            <CometCard className="bento-card bento-2">
              <div data-reveal>
                <div className="bento-badge">Security</div>
                <h3>Zero-compromise security baked in from line one</h3>
                <p>SOC 2 compliant. GDPR ready. Every system we build meets enterprise security standards by default.</p>
                <div className="bento-orbit">
                  <div className="orbit-ring"><div className="orbit-dot" /></div>
                  <div className="orbit-center">🔐</div>
                </div>
              </div>
            </CometCard>

            <CometCard className="bento-card bento-3">
              <div data-reveal>
                <div className="bento-badge">AI-First</div>
                <h3>Intelligent by default</h3>
                <p>Every product we build can integrate machine learning — from recommendation engines to predictive analytics.</p>
                <div style={{ marginTop: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['GPT-4o', 'Gemini', 'Claude', 'LLaMA', 'Custom Models'].map((t) => (
                    <span key={t} style={{ background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>
            </CometCard>

            <CometCard className="bento-card bento-4">
              <div data-reveal>
                <div className="bento-badge">Partnership</div>
                <h3>We're not a vendor — we're your engineering partner</h3>
                <p>Dedicated teams, transparent communication, and a shared stake in your success. We celebrate when you win.</p>
                <div style={{ display: 'flex', gap: '20px', marginTop: '28px', flexWrap: 'wrap' }}>
                  {[['150+', 'Projects'], ['98%', 'Retention'], ['24/7', 'Support']].map(([n, l]) => (
                    <div key={l}>
                      <div style={{ fontSize: '32px', fontWeight: 800, background: 'linear-gradient(135deg, #fff, var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{n}</div>
                      <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CometCard>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header centered fade-up">
            <div className="tag">Client Stories</div>
            <h2>Trusted by teams<br />around the world</h2>
            <p>Don't take our word for it — here's what our clients say.</p>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card fade-up" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner fade-up">
            <div className="tag" style={{ margin: '0 auto 24px' }}>Ready to Build?</div>
            <h2>Let's build something<br /><span className="gradient-text">extraordinary together</span></h2>
            <p>Whether you have a full spec or just an idea on a napkin — we'd love to hear from you.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link to="/about" className="btn-ghost">Meet the Team</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
