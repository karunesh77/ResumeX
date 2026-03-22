import { useRef, useState } from "react";
import Navbar from "./Navbar";
import AIPanel from "./AIPanel";
import Portfolio from "./Portfolio";
import ResumeModern from "./ResumeModern";
import ResumeMinimal from "./ResumeMinimal";
import ResumeCreative from "./ResumeCreative";

const TEMPLATE_MAP = {
  modern:   ResumeModern,
  minimal:  ResumeMinimal,
  creative: ResumeCreative,
};

export default function Preview({ data, template, setTemplate, onEdit, onHome }) {
  const [tab, setTab] = useState("resume");
  const resumeRef     = useRef(null);

  const ResumeComponent = TEMPLATE_MAP[template] ?? ResumeModern;

  const handlePrint = () => {
    const content = resumeRef.current?.innerHTML;
    if (!content) return;
    const w = window.open("", "_blank");
    w.document.write(`
      <!DOCTYPE html><html><head>
        <title>${data.name || "Resume"}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'DM Sans',sans-serif}
          /* paste the resume-specific CSS rules here or link the stylesheet */
        </style>
        <link rel="stylesheet" href="/src/styles.css" />
      </head><body>${content}</body></html>
    `);
    w.document.close();
    setTimeout(() => { w.print(); w.close(); }, 600);
  };

  return (
    <div className="app">
      <div className="grid-bg" />

      <Navbar
        onLogoClick={onHome}
        rightSlot={
          <>
            <button className="btn btn-ghost btn-sm" onClick={onEdit}>← Edit</button>
            <button className="btn btn-primary btn-sm" onClick={handlePrint}>⬇ Download PDF</button>
          </>
        }
      />

      <div className="preview-sec">
        <div className="prev-inner">
          <div className="prev-title">{data.name ? `${data.name}'s Resume` : "Your Resume"}</div>
          <div className="prev-sub">Looking great! Download your resume or explore templates below.</div>

          {/* Tabs + Template switcher */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", margin: "1.5rem 0" }}>
            <div className="prev-tabs">
              <button className={`prev-tab ${tab === "resume"    ? "active" : ""}`} onClick={() => setTab("resume")}>📄 Resume</button>
              <button className={`prev-tab ${tab === "portfolio" ? "active" : ""}`} onClick={() => setTab("portfolio")}>🌐 Portfolio</button>
            </div>
            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              {["modern", "minimal", "creative"].map((t) => (
                <button
                  key={t}
                  className={`btn btn-sm ${template === t ? "btn-primary" : "btn-ghost"}`}
                  onClick={() => setTemplate(t)}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          {tab === "resume" ? (
            <>
              <div className="resume-frame" ref={resumeRef}>
                <ResumeComponent d={data} />
              </div>
              <div style={{ display: "flex", gap: ".75rem", marginTop: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button className="btn btn-success btn-lg" onClick={handlePrint}>⬇ Download PDF</button>
                <button className="btn btn-outline btn-lg" onClick={onEdit}>✐ Edit Resume</button>
              </div>
              <AIPanel data={data} />
            </>
          ) : (
            <>
              <Portfolio d={data} />
              <div style={{ display: "flex", gap: ".75rem", marginTop: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button className="btn btn-outline btn-lg" onClick={onEdit}>✐ Edit Info</button>
                <button className="btn btn-ghost btn-lg" onClick={() => setTab("resume")}>📄 View Resume</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
