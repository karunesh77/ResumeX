const TEMPLATES = [
  {
    id: "modern",
    name: "Modern Blue",
    preview: (
      <div style={{ width: "100%", height: "100%", background: "white", padding: "8px" }}>
        <div style={{ background: "#1e40af", padding: "8px", borderRadius: "2px" }}>
          <div style={{ background: "rgba(255,255,255,.9)", height: "5px", width: "50%", borderRadius: "1px", marginBottom: "2px" }} />
          <div style={{ background: "rgba(255,255,255,.5)", height: "3px", width: "35%", borderRadius: "1px" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "4px", marginTop: "4px" }}>
          <div>
            {[60, 90, 70].map((w, i) => (
              <div key={i} style={{ background: "#e2e8f0", height: "3px", width: `${w}%`, borderRadius: "1px", marginBottom: "2px" }} />
            ))}
          </div>
          <div style={{ background: "#f8fafc", borderRadius: "2px" }}>
            {[50, 70, 45].map((w, i) => (
              <div key={i} style={{ background: "#dbeafe", height: "3px", width: `${w}%`, borderRadius: "1px", margin: "2px" }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "minimal",
    name: "Clean Minimal",
    preview: (
      <div style={{ width: "100%", height: "100%", background: "white", padding: "8px" }}>
        <div style={{ borderBottom: "2px solid #111", paddingBottom: "6px", marginBottom: "6px" }}>
          <div style={{ background: "#111", height: "6px", width: "45%", borderRadius: "1px", marginBottom: "2px" }} />
          <div style={{ background: "#ccc", height: "3px", width: "30%", borderRadius: "1px" }} />
        </div>
        {[80, 60, 90, 50, 70].map((w, i) => (
          <div key={i} style={{ background: "#e2e8f0", height: "3px", width: `${w}%`, borderRadius: "1px", marginBottom: "4px" }} />
        ))}
      </div>
    ),
  },
  {
    id: "creative",
    name: "Creative Dark",
    preview: (
      <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "40% 1fr" }}>
        <div style={{ background: "#0f172a", padding: "6px" }}>
          <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", marginBottom: "4px" }} />
          {[60, 80, 50].map((w, i) => (
            <div key={i} style={{ background: "#1e293b", height: "3px", width: `${w}%`, borderRadius: "1px", marginBottom: "2px" }} />
          ))}
        </div>
        <div style={{ background: "white", padding: "6px" }}>
          {[70, 90, 60, 80, 50].map((w, i) => (
            <div key={i} style={{ background: "#e2e8f0", height: "3px", width: `${w}%`, borderRadius: "1px", marginBottom: "3px" }} />
          ))}
        </div>
      </div>
    ),
  },
];

export default function TemplatePicker({ selected, onSelect }) {
  return (
    <div className="tmpl-grid">
      {TEMPLATES.map((t) => (
        <div
          key={t.id}
          className={`tmpl-card ${selected === t.id ? "selected" : ""}`}
          onClick={() => onSelect(t.id)}
        >
          <div className="tmpl-prev">{t.preview}</div>
          <div className="tmpl-name">{t.name}</div>
        </div>
      ))}
    </div>
  );
}
