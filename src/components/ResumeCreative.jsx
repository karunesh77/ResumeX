export default function ResumeCreative({ d }) {
  const initials = (d.name || "YN")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="rcr" style={{ fontFamily: "'DM Sans',sans-serif", minHeight: "600px" }}>
      {/* Sidebar */}
      <div className="rsb">
        <div className="rav">{initials}</div>
        <div className="rn">{d.name || "Your Name"}</div>
        <div className="rt">{d.title || "Professional Title"}</div>
        <div style={{ height: "1.5rem" }} />

        <div className="rsecs">
          <div className="rstls">Contact</div>
          {d.email    && <div className="rci">✉ {d.email}</div>}
          {d.phone    && <div className="rci">✆ {d.phone}</div>}
          {d.location && <div className="rci">⌖ {d.location}</div>}
          {d.linkedin && <div className="rci">in {d.linkedin}</div>}
          {d.github   && <div className="rci">⌘ {d.github}</div>}
        </div>

        {d.skills?.length > 0 && (
          <div className="rsecs">
            <div className="rstls">Skills</div>
            {d.skills.map((s, i) => (
              <div className="rski" key={i}>
                <div className="rskn">{s}</div>
                <div className="rsk">
                  <div className="rskf" style={{ width: `${65 + (i * 11) % 35}%` }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {d.languages?.length > 0 && (
          <div className="rsecs">
            <div className="rstls">Languages</div>
            <div>{d.languages.map((l) => <span key={l} className="rtags">{l}</span>)}</div>
          </div>
        )}

        {d.certifications?.some((c) => c.name) && (
          <div className="rsecs">
            <div className="rstls">Certifications</div>
            {d.certifications.filter((c) => c.name).map((c, i) => (
              <div key={i} style={{ fontSize: ".78rem", color: "#94a3b8", marginBottom: ".4rem" }}>
                <div style={{ color: "#cbd5e1", fontWeight: 600 }}>{c.name}</div>
                {c.issuer && <div>{c.issuer}{c.year ? ` · ${c.year}` : ""}</div>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main area */}
      <div className="rma">
        {d.summary && (
          <div className="rsecm">
            <div className="rstlm">Profile</div>
            <p className="rsum">{d.summary}</p>
          </div>
        )}

        {d.experience?.some((e) => e.company) && (
          <div className="rsecm">
            <div className="rstlm">Experience</div>
            {d.experience.filter((e) => e.company).map((e, i) => (
              <div className="ri" key={i}>
                <div className="rit">{e.role || "Role"}</div>
                <div className="rim">
                  <span className="ris">{e.company}</span>
                  <span className="rid">
                    {e.start}{e.start && (e.end || e.current) ? " – " : ""}
                    {e.current ? "Present" : e.end}
                  </span>
                </div>
                {e.description && <div className="ridesc">{e.description}</div>}
              </div>
            ))}
          </div>
        )}

        {d.education?.some((e) => e.school) && (
          <div className="rsecm">
            <div className="rstlm">Education</div>
            {d.education.filter((e) => e.school).map((e, i) => (
              <div className="ri" key={i}>
                <div className="rit">{e.school}</div>
                <div className="rim">
                  <span className="ris">{e.degree}{e.field ? ` — ${e.field}` : ""}</span>
                  <span className="rid">{e.start}{e.start && e.end ? "–" : ""}{e.end}</span>
                </div>
                {e.gpa && <div className="ridesc">GPA: {e.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {d.projects?.some((p) => p.name) && (
          <div className="rsecm">
            <div className="rstlm">Projects</div>
            {d.projects.filter((p) => p.name).map((p, i) => (
              <div className="ri" key={i}>
                <div className="rit">{p.name}</div>
                {p.tech && (
                  <div style={{ fontSize: ".8rem", color: "#3b82f6", fontWeight: 600, marginTop: ".2rem" }}>{p.tech}</div>
                )}
                {p.description && <div className="ridesc">{p.description}</div>}
              </div>
            ))}
          </div>
        )}

        {d.achievements && (
          <div className="rsecm">
            <div className="rstlm">Achievements</div>
            <p className="rsum">{d.achievements}</p>
          </div>
        )}
      </div>
    </div>
  );
}
