import Navbar from "./Navbar";

const FEATURES = [
  { icon: "✦", title: "AI Writing Assistant",  desc: "Generate professional summaries, get improvement tips, and discover powerful keywords with one click." },
  { icon: "◈", title: "3 Premium Templates",    desc: "Modern Blue, Clean Minimal, or Creative Dark — each crafted for maximum impact." },
  { icon: "⬇", title: "PDF Download",           desc: "Export your resume as a print-ready PDF instantly and share with employers." },
  { icon: "◎", title: "Portfolio Generator",    desc: "Automatically turns your resume data into a personal portfolio website preview." },
  { icon: "✐", title: "Step-by-Step Form",      desc: "7 guided steps covering Personal Info, Education, Experience, Skills, Projects, and more." },
  { icon: "⚡", title: "Live Preview",           desc: "See your resume update as you type. Switch templates without losing your data." },
];

const STATS = [
  ["3", "Templates"],
  ["AI", "Powered"],
  ["PDF", "Export"],
  ["Free", "Forever"],
];

export default function Landing({ onGetStarted }) {
  return (
    <div className="app">
      <div className="grid-bg" />

      <Navbar
        onLogoClick={onGetStarted}
        rightSlot={
          <>
            <button className="btn btn-ghost btn-sm" onClick={onGetStarted}>Get Started</button>
            <button className="btn btn-primary btn-sm" onClick={onGetStarted}>Build Free →</button>
          </>
        }
      />

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">✦ AI-Powered Resume Builder</div>
        <h1 className="hero-title">
          Build Your <span className="grad">Dream Resume</span><br />in Minutes
        </h1>
        <p className="hero-sub">
          Fill out a simple form, and our AI transforms your information into a
          professional resume and personal portfolio — instantly.
        </p>
        <div className="hero-acts">
          <button className="btn btn-primary btn-lg" onClick={onGetStarted}>
            ✦ Start Building Free →
          </button>
        </div>
        <div className="hero-stats">
          {STATS.map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div className="h-stat-num">{n}</div>
              <div className="h-stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="sec-label">// What's included</div>
        <h2 className="sec-title">Everything you need to<br />land your next role</h2>
        <p className="sec-sub">AI writing, beautiful templates, PDF export, and portfolio generation — all in one place.</p>
        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <div className="feat-card" key={i}>
              <div className="feat-icon">{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button className="btn btn-primary btn-lg" onClick={onGetStarted}>
            Start Building Now →
          </button>
        </div>
      </section>
    </div>
  );
}
