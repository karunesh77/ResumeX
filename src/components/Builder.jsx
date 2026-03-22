import { useState } from "react";
import Navbar from "./Navbar";
import TagsInput from "./TagsInput";
import TemplatePicker from "./TemplatePicker";
import { STEPS, EMPTY_EDU, EMPTY_EXP, EMPTY_PROJ, EMPTY_CERT, upd } from "../data/constants";

export default function Builder({ data, setData, template, setTemplate, onPreview, onHome }) {
  const [step, setStep] = useState(0);

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  // ── individual step renderers ───────────────────────────────────────────
  const renderStep = () => {
    switch (step) {
      /* ── 0: Personal ── */
      case 0:
        return (
          <div>
            <div className="step-title">Personal Information</div>
            <div className="step-sub">Start with the basics — your name, contact details, and title.</div>
            <div className="form-grid">
              {[
                ["Full Name",          "name",     "Karunesh Gupta"],
                ["Professional Title", "title",    "Full Stack Developer"],
                ["Email",              "email",    "you@email.com"],
                ["Phone",              "phone",    "+91 98765 43210"],
              ].map(([label, key, ph]) => (
                <div className="form-group" key={key}>
                  <label className="form-label">{label}</label>
                  <input className="form-input" placeholder={ph} value={data[key]} onChange={(e) => set(key, e.target.value)} />
                </div>
              ))}
              <div className="form-group fg-1">
                <label className="form-label">Location</label>
                <input className="form-input" placeholder="Noida, India" value={data.location} onChange={(e) => set("location", e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">LinkedIn</label>
                <input className="form-input" placeholder="linkedin.com/in/you" value={data.linkedin} onChange={(e) => set("linkedin", e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">GitHub / Website</label>
                <input className="form-input" placeholder="github.com/you" value={data.github} onChange={(e) => set("github", e.target.value)} />
              </div>
              <div className="form-group fg-1">
                <label className="form-label">Professional Summary</label>
                <textarea className="form-textarea" placeholder="2-3 sentences about yourself, your expertise, and the value you bring..." value={data.summary} onChange={(e) => set("summary", e.target.value)} style={{ minHeight: "120px" }} />
              </div>
            </div>
          </div>
        );

      /* ── 1: Education ── */
      case 1:
        return (
          <div>
            <div className="step-title">Education</div>
            <div className="step-sub">Your academic qualifications — degrees, institutions, and dates.</div>
            {data.education.map((edu, i) => (
              <div className="entry-card" key={i}>
                <div className="entry-hd">
                  <span className="entry-lbl">🎓 Education #{i + 1}</span>
                  {data.education.length > 1 && (
                    <button className="btn btn-ghost btn-sm" onClick={() => set("education", data.education.filter((_, j) => j !== i))}>Remove</button>
                  )}
                </div>
                <div className="form-grid">
                  <div className="form-group fg-1">
                    <label className="form-label">Institution</label>
                    <input className="form-input" placeholder="IIT Delhi / Amity University" value={edu.school} onChange={(e) => set("education", upd(data.education, i, "school", e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Degree</label>
                    <input className="form-input" placeholder="B.Tech" value={edu.degree} onChange={(e) => set("education", upd(data.education, i, "degree", e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Field of Study</label>
                    <input className="form-input" placeholder="Computer Science" value={edu.field} onChange={(e) => set("education", upd(data.education, i, "field", e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Start Year</label>
                    <input className="form-input" placeholder="2020" value={edu.start} onChange={(e) => set("education", upd(data.education, i, "start", e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">End Year</label>
                    <input className="form-input" placeholder="2024" value={edu.end} onChange={(e) => set("education", upd(data.education, i, "end", e.target.value))} />
                  </div>
                  <div className="form-group fg-1">
                    <label className="form-label">GPA / % (optional)</label>
                    <input className="form-input" placeholder="8.5/10 or 85%" value={edu.gpa} onChange={(e) => set("education", upd(data.education, i, "gpa", e.target.value))} />
                  </div>
                </div>
              </div>
            ))}
            <button className="add-btn" onClick={() => set("education", [...data.education, EMPTY_EDU()])}>+ Add Education</button>
          </div>
        );

      /* ── 2: Experience ── */
      case 2:
        return (
          <div>
            <div className="step-title">Work Experience</div>
            <div className="step-sub">Roles, companies, and key accomplishments.</div>
            {data.experience.map((exp, i) => (
              <div className="entry-card" key={i}>
                <div className="entry-hd">
                  <span className="entry-lbl">💼 Experience #{i + 1}</span>
                  {data.experience.length > 1 && (
                    <button className="btn btn-ghost btn-sm" onClick={() => set("experience", data.experience.filter((_, j) => j !== i))}>Remove</button>
                  )}
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Job Title</label>
                    <input className="form-input" placeholder="Senior Developer" value={exp.role} onChange={(e) => set("experience", upd(data.experience, i, "role", e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input className="form-input" placeholder="Infosys / Startup" value={exp.company} onChange={(e) => set("experience", upd(data.experience, i, "company", e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Start</label>
                    <input className="form-input" placeholder="Jan 2022" value={exp.start} onChange={(e) => set("experience", upd(data.experience, i, "start", e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">End</label>
                    <input className="form-input" placeholder="Dec 2023" value={exp.end} onChange={(e) => set("experience", upd(data.experience, i, "end", e.target.value))} disabled={exp.current} />
                  </div>
                  <div className="form-group fg-1" style={{ flexDirection: "row", alignItems: "center", gap: ".75rem" }}>
                    <input type="checkbox" id={`curr-${i}`} checked={exp.current} onChange={(e) => set("experience", upd(data.experience, i, "current", e.target.checked))} style={{ width: "16px", height: "16px", accentColor: "var(--accent)" }} />
                    <label htmlFor={`curr-${i}`} style={{ fontSize: ".88rem", color: "var(--text2)", cursor: "pointer" }}>Currently working here</label>
                  </div>
                  <div className="form-group fg-1">
                    <label className="form-label">Responsibilities & Achievements</label>
                    <textarea className="form-textarea" placeholder="Led a team of 5 engineers… Built Y using Z… Increased performance by 40%…" value={exp.description} onChange={(e) => set("experience", upd(data.experience, i, "description", e.target.value))} />
                  </div>
                </div>
              </div>
            ))}
            <button className="add-btn" onClick={() => set("experience", [...data.experience, EMPTY_EXP()])}>+ Add Experience</button>
          </div>
        );

      /* ── 3: Skills ── */
      case 3:
        return (
          <div>
            <div className="step-title">Skills & Languages</div>
            <div className="step-sub">Press Enter or comma after each skill to add it as a tag.</div>
            <div className="form-grid">
              <div className="form-group fg-1">
                <label className="form-label">Technical & Soft Skills</label>
                <TagsInput value={data.skills} onChange={(v) => set("skills", v)} placeholder="Type a skill and press Enter (React, Node.js, Python…)" />
                <span style={{ fontSize: ".75rem", color: "var(--text3)" }}>Press Enter or comma after each skill</span>
              </div>
              <div className="form-group fg-1">
                <label className="form-label">Languages Spoken</label>
                <TagsInput value={data.languages} onChange={(v) => set("languages", v)} placeholder="English, Hindi, French…" />
              </div>
            </div>
          </div>
        );

      /* ── 4: Projects ── */
      case 4:
        return (
          <div>
            <div className="step-title">Projects</div>
            <div className="step-sub">Your best work — personal projects, open source, or client work.</div>
            {data.projects.map((p, i) => (
              <div className="entry-card" key={i}>
                <div className="entry-hd">
                  <span className="entry-lbl">🚀 Project #{i + 1}</span>
                  {data.projects.length > 1 && (
                    <button className="btn btn-ghost btn-sm" onClick={() => set("projects", data.projects.filter((_, j) => j !== i))}>Remove</button>
                  )}
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Project Name</label>
                    <input className="form-input" placeholder="VYBE Music App" value={p.name} onChange={(e) => set("projects", upd(data.projects, i, "name", e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tech Stack</label>
                    <input className="form-input" placeholder="React, Node.js, Supabase" value={p.tech} onChange={(e) => set("projects", upd(data.projects, i, "tech", e.target.value))} />
                  </div>
                  <div className="form-group fg-1">
                    <label className="form-label">Link (optional)</label>
                    <input className="form-input" placeholder="github.com/you/project" value={p.link} onChange={(e) => set("projects", upd(data.projects, i, "link", e.target.value))} />
                  </div>
                  <div className="form-group fg-1">
                    <label className="form-label">Description</label>
                    <textarea className="form-textarea" placeholder="What it does, problems it solves, your role and impact…" value={p.description} onChange={(e) => set("projects", upd(data.projects, i, "description", e.target.value))} />
                  </div>
                </div>
              </div>
            ))}
            <button className="add-btn" onClick={() => set("projects", [...data.projects, EMPTY_PROJ()])}>+ Add Project</button>
          </div>
        );

      /* ── 5: Extras ── */
      case 5:
        return (
          <div>
            <div className="step-title">Certifications & Achievements</div>
            <div className="step-sub">Awards, certifications, and notable accomplishments.</div>
            {data.certifications.map((c, i) => (
              <div className="entry-card" key={i}>
                <div className="entry-hd">
                  <span className="entry-lbl">🏆 Certification #{i + 1}</span>
                  {data.certifications.length > 1 && (
                    <button className="btn btn-ghost btn-sm" onClick={() => set("certifications", data.certifications.filter((_, j) => j !== i))}>Remove</button>
                  )}
                </div>
                <div className="form-grid">
                  <div className="form-group fg-1">
                    <label className="form-label">Certification Name</label>
                    <input className="form-input" placeholder="AWS Certified Developer" value={c.name} onChange={(e) => set("certifications", upd(data.certifications, i, "name", e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Issuer</label>
                    <input className="form-input" placeholder="Amazon / Google" value={c.issuer} onChange={(e) => set("certifications", upd(data.certifications, i, "issuer", e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Year</label>
                    <input className="form-input" placeholder="2024" value={c.year} onChange={(e) => set("certifications", upd(data.certifications, i, "year", e.target.value))} />
                  </div>
                </div>
              </div>
            ))}
            <button className="add-btn" onClick={() => set("certifications", [...data.certifications, EMPTY_CERT()])}>+ Add Certification</button>
            <div className="form-group" style={{ marginTop: "1.5rem" }}>
              <label className="form-label">Notable Achievements</label>
              <textarea className="form-textarea" placeholder="Hackathon wins, publications, open source contributions…" value={data.achievements} onChange={(e) => set("achievements", e.target.value)} style={{ minHeight: "120px" }} />
            </div>
          </div>
        );

      /* ── 6: Template ── */
      case 6:
        return (
          <div>
            <div className="step-title">Choose Your Template</div>
            <div className="step-sub">Pick the design that best fits your style.</div>
            <TemplatePicker selected={template} onSelect={setTemplate} />
            <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".5rem" }}>
                <span>✓</span>
                <span style={{ fontWeight: 600, fontSize: ".88rem" }}>You're all set!</span>
              </div>
              <p style={{ fontSize: ".83rem", color: "var(--text2)", lineHeight: 1.6 }}>
                Click "Preview My Resume" to see your finished resume and portfolio.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <div className="grid-bg" />

      <Navbar
        onLogoClick={onHome}
        rightSlot={
          <>
            <button className="btn btn-ghost btn-sm" onClick={onPreview}>Preview Resume</button>
            <button className="btn btn-primary btn-sm" onClick={onPreview}>View Results →</button>
          </>
        }
      />

      <div className="builder">
        <div className="builder-inner">
          {/* Header */}
          <div className="bld-header">
            <div className="bld-title">Build Your Resume</div>
            <div className="bld-sub">Step {step + 1} of {STEPS.length} — {STEPS[step].label}</div>
          </div>

          {/* Progress */}
          <div className="prog-bar">
            {STEPS.map((s, i) => (
              <div className="prog-step" key={s.id}>
                <div className="prog-step-w">
                  <div className={`prog-dot ${i < step ? "done" : i === step ? "active" : ""}`} onClick={() => setStep(i)}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <div className="prog-label">{s.label}</div>
                </div>
                {i < STEPS.length - 1 && <div className={`prog-line ${i < step ? "done" : ""}`} />}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="form-card">{renderStep()}</div>

          {/* Navigation */}
          <div className="form-nav">
            <button className="btn btn-ghost" onClick={() => (step === 0 ? onHome() : setStep((s) => s - 1))}>
              ← {step === 0 ? "Home" : "Back"}
            </button>
            {step < STEPS.length - 1 ? (
              <button className="btn btn-primary" onClick={() => setStep((s) => s + 1)}>Continue →</button>
            ) : (
              <button className="btn btn-success btn-lg" onClick={onPreview}>✦ Preview My Resume →</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
