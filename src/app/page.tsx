"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Users, Zap, BarChart3, Database, ChevronRight, Shield, RefreshCw } from "lucide-react";

const PARTICLES = [
  { left: "12%",  top: "30%", delay: "0s",    dur: "6s"  },
  { left: "24%",  top: "55%", delay: "1.2s",  dur: "8s"  },
  { left: "38%",  top: "20%", delay: "0.5s",  dur: "7s"  },
  { left: "52%",  top: "70%", delay: "2s",    dur: "9s"  },
  { left: "65%",  top: "40%", delay: "0.8s",  dur: "6.5s"},
  { left: "75%",  top: "15%", delay: "1.5s",  dur: "7.5s"},
  { left: "82%",  top: "60%", delay: "0.3s",  dur: "8.5s"},
  { left: "91%",  top: "35%", delay: "2.5s",  dur: "6s"  },
  { left: "8%",   top: "75%", delay: "1.8s",  dur: "7s"  },
  { left: "44%",  top: "85%", delay: "0.9s",  dur: "9.5s"},
];

const FEATURES = [
  {
    icon: BookOpen,
    title: "Knowledge Base",
    desc: "Structured repository of SOPs, best practices and plant operations expertise from every SAIL facility.",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    icon: Users,
    title: "Expert Network",
    desc: "Connect instantly with 250+ Subject Matter Experts across Blast Furnace, Steel Making, and Rolling Mills.",
    color: "from-cyan-500/20 to-cyan-600/10",
    iconColor: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    icon: RefreshCw,
    title: "Replication Engine",
    desc: "Deploy proven solutions and operational improvements across all SAIL plants with tracked rollouts.",
    color: "from-violet-500/20 to-violet-600/10",
    iconColor: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    icon: Zap,
    title: "AI-Powered Insights",
    desc: "Surface the right knowledge at the right time — auto-linked to alerts, challenges, and plant events.",
    color: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Real-time executive view of knowledge health, replication KPIs, and innovation pipeline metrics.",
    color: "from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Governance & Audit",
    desc: "Ensure knowledge quality with structured templates, approval workflows, and full audit trails.",
    color: "from-rose-500/20 to-rose-600/10",
    iconColor: "text-rose-400",
    border: "border-rose-500/20",
  },
];

const STATS = [
  { value: "10,000+", label: "Knowledge Articles" },
  { value: "250+",    label: "Subject Matter Experts" },
  { value: "5",       label: "SAIL Plant Locations" },
  { value: "94%",     label: "Replication Success Rate" },
];

export default function LandingPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden relative"
      style={{ background: "linear-gradient(160deg, #050912 0%, #080e1a 50%, #0a1020 100%)" }}
    >
      {/* ── Ambient glow blobs ─────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Top-left glow */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 600,
            height: 600,
            top: "-120px",
            left: "-180px",
            background: "radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 70%)",
            animation: "ambientPulse 8s ease-in-out infinite",
          }}
        />
        {/* Center-right glow */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 700,
            height: 700,
            top: "10%",
            right: "-200px",
            background: "radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)",
            animation: "ambientPulse 10s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />
        {/* Bottom glow */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 500,
            height: 500,
            bottom: "-100px",
            left: "30%",
            background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)",
            animation: "ambientPulse 12s ease-in-out infinite",
            animationDelay: "6s",
          }}
        />

        {/* Floating particles */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.dur }}
          />
        ))}

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,150,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(100,150,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── 3-D Decorative shapes (top-right) ──────────────── */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{ top: "-40px", right: "-60px", width: 480, height: 520 }}
      >
        {/* Large pyramid silhouette */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 20,
            width: 260,
            height: 310,
            background: "linear-gradient(160deg, #1a2e48 0%, #0d1828 40%, #060e1a 100%)",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.6))",
            animation: "pyramidFloat 7s ease-in-out infinite",
            opacity: 0.75,
          }}
        />
        {/* Pyramid side face (lighter) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 20,
            width: 130,
            height: 310,
            background: "linear-gradient(160deg, #243d5c 0%, #152840 100%)",
            clipPath: "polygon(50% 0%, 0% 100%, 50% 100%)",
            filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))",
            animation: "pyramidFloat 7s ease-in-out infinite",
            opacity: 0.55,
          }}
        />

        {/* CSS 3-D cube */}
        <div
          className="cube-scene"
          style={{ position: "absolute", top: 220, right: 60 }}
        >
          <div className="css-cube">
            <div className="face front"  />
            <div className="face back"   />
            <div className="face left"   />
            <div className="face right"  />
            <div className="face top"    />
            <div className="face bottom" />
          </div>
        </div>

        {/* Floating sphere / coin */}
        <div
          style={{
            position: "absolute",
            top: 180,
            right: 240,
            width: 90,
            height: 90,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 35%, #2a4a70 0%, #0d1f35 55%, #050d1a 100%)",
            border: "1px solid rgba(100,160,220,0.2)",
            animation: "sphereGlow 4s ease-in-out infinite, floatY 5s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />

        {/* Diagonal platform / floor */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: -80,
            right: -60,
            height: 120,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(13,24,40,0.6) 40%, rgba(8,14,26,0.9) 100%)",
            transform: "perspective(400px) rotateX(55deg)",
            transformOrigin: "bottom center",
          }}
        />
      </div>

      {/* ═══════════════ NAVIGATION ════════════════════════ */}
      <header className="relative z-20 landing-fade-1">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #3b82f6)" }}
            >
              <Database className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">SAIL</span>
            <span
              className="hidden text-sm font-medium sm:inline"
              style={{ color: "rgba(148,163,184,0.7)" }}
            >
              IdeaForge
            </span>
          </Link>

          {/* Nav links */}
          <div className="hidden items-center gap-8 md:flex">
            {["Features", "Knowledge Base", "Experts", "Analytics"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(148,163,184,0.85)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(148,163,184,0.85)")}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="hidden text-sm font-medium transition-colors sm:inline"
              style={{ color: "rgba(148,163,184,0.85)" }}
            >
              Log in
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #1e40af, #1d4ed8)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #1d4ed8, #2563eb)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Get started
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </header>

      {/* ═══════════════ HERO ══════════════════════════════ */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-28">
        {/* Badge */}
        <div className="landing-fade-1 mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
          style={{ borderColor: "rgba(59,130,246,0.3)", background: "rgba(59,130,246,0.08)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" style={{ animation: "sphereGlow 2s infinite" }} />
          <span className="text-xs font-semibold text-blue-300 tracking-wide uppercase">
            SAIL Knowledge Transfer Platform
          </span>
        </div>

        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="landing-fade-2 mb-6 font-bold leading-[1.08] tracking-tight text-white"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)" }}
          >
            Unlock Knowledge,
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #60a5fa, #93c5fd, #bfdbfe)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Power Your Plant
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="landing-fade-3 mb-10 max-w-lg text-lg leading-relaxed"
            style={{ color: "rgba(148,163,184,0.85)" }}
          >
            Capture critical operational expertise, replicate proven practices across
            facilities, and accelerate knowledge transfer across all SAIL steel plants.
          </p>

          {/* CTA row */}
          <div className="landing-fade-4 flex flex-wrap items-center gap-4">
            <Link
              href="/dashboard"
              className="group flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all"
              style={{
                background: "linear-gradient(135deg, #ea580c, #f97316)",
                boxShadow: "0 8px 24px rgba(249,115,22,0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(249,115,22,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(249,115,22,0.35)";
              }}
            >
              Enter Dashboard
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#features"
              className="flex items-center gap-2 rounded-xl border px-6 py-3.5 text-base font-semibold transition-all"
              style={{
                borderColor: "rgba(100,150,200,0.25)",
                color: "rgba(203,213,225,0.9)",
                background: "rgba(255,255,255,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(100,150,200,0.5)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(100,150,200,0.25)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
            >
              Explore Features
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="landing-fade-5 mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border sm:grid-cols-4"
          style={{ borderColor: "rgba(59,130,246,0.15)", background: "rgba(59,130,246,0.08)" }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-5"
              style={{ background: "rgba(8,14,26,0.7)" }}
            >
              <span className="text-2xl font-extrabold text-white">{s.value}</span>
              <span className="mt-1 text-xs font-medium" style={{ color: "rgba(148,163,184,0.7)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ FEATURES ══════════════════════════ */}
      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "rgba(96,165,250,0.8)" }}
          >
            Platform Capabilities
          </p>
          <h2
            className="text-3xl font-bold text-white md:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Everything your team needs to
            <br className="hidden md:block" />
            <span
              style={{
                background: "linear-gradient(90deg, #60a5fa, #93c5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}transfer knowledge at scale
            </span>
          </h2>
        </div>

        {/* Feature cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${f.border}`}
              style={{
                background: "rgba(8,14,26,0.6)",
                backdropFilter: "blur(12px)",
                animation: `fadeInUp 0.6s ease both`,
                animationDelay: `${0.1 + i * 0.08}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Card background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative">
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${f.iconColor}`}
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.8)" }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ BOTTOM CTA ════════════════════════ */}
      <section className="relative z-10 pb-24 px-6">
        <div
          className="mx-auto max-w-3xl rounded-3xl border p-12 text-center"
          style={{
            borderColor: "rgba(59,130,246,0.2)",
            background: "linear-gradient(135deg, rgba(29,78,216,0.12) 0%, rgba(8,14,26,0.8) 100%)",
            backdropFilter: "blur(16px)",
          }}
        >
          <h2
            className="mb-4 text-3xl font-bold text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ready to power your plant
            <br />with collective intelligence?
          </h2>
          <p className="mb-8 text-base" style={{ color: "rgba(148,163,184,0.8)" }}>
            Join SAIL teams already using IdeaForge to capture, replicate, and scale
            operational expertise across every facility.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #ea580c, #f97316)",
                boxShadow: "0 8px 24px rgba(249,115,22,0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Get started now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium underline underline-offset-4"
              style={{ color: "rgba(148,163,184,0.8)" }}
            >
              Talk to a specialist
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ════════════════════════════ */}
      <footer
        className="relative z-10 border-t px-6 py-8"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm sm:flex-row"
          style={{ color: "rgba(100,116,139,0.8)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-md"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #3b82f6)" }}
            >
              <Database className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-white">SAIL IdeaForge</span>
            <span style={{ color: "rgba(100,116,139,0.6)" }}>
              — Knowledge Transfer Platform
            </span>
          </div>
          <span>© {new Date().getFullYear()} Steel Authority of India Limited. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
