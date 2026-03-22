export default function ResumeModern({ d }) {
  return (
    <div className="rm" style={{ fontFamily: "'DM Sans',sans-serif", background: "white", color: "#1e293b" }}>
      {/* Header */}
      <div className="rh">
        <div className="rn">{d.name || "Your Name"}</div>
        <div className="rt">{d.title || "Professional Title"}</div>
        <div className="rc">
          {d.email    && <span>✉ {d.email}</span>}
          {d.phone    && <span>✆ {d.phone}</span>}
          {d.location && <span>⌖ {d.location}</span>}
          {d.linkedin && <span>in {d.linkedin}</span>}
          {d.github   && <span>⌘ {d.github}</span>}
        </div>
      </div>

      {/* Body */}
      <div className="rb">
        {/* Main column */}
        <div className="rmain">
          {d.summary && (
            <div className="rsec">
              <div className="rstl">Summary</div>
              <p className="rsum">{d.summary}</p>
            </div>
          )}

          {d.experience?.some((e) => e.company) && (
            <div className="rsec">
              <div className="rstl">Experience</div>
              {d.experience.filter((e) => e.company).map((e, i) => (
                <div className="ri" key={i}>
                  <div className="rit">{e.role || "Role"}</div>
                  <div className="ris">{e.company}</div>
                  <div className="rid">
                    {e.start}{e.start && (e.end || e.current) ? " — " : ""}
                    {e.current ? "Present" : e.end}
                  </div>
                  {e.description && <div className="ridesc">{e.description}</div>}
                </div>
              ))}
            </div>
          )}

          {d.projects?.some((p) => p.name) && (
            <div className="rsec">
              <div className="rstl">Projects</div>
              {d.projects.filter((p) => p.name).map((p, i) => (
                <div className="ri" key={i}>
                  <div className="rit">{p.name}</div>
                  {p.tech && <div className="ris">{p.tech}</div>}
                  {p.description && <div className="ridesc">{p.description}</div>}
                </div>
              ))}
            </div>
          )}

          {d.achievements && (
            <div className="rsec">
              <div className="rstl">Achievements</div>
              <p className="rsum">{d.achievements}</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="rside">
          {d.education?.some((e) => e.school) && (
            <div className="rsec">
              <div className="rstl">Education</div>
              {d.education.filter((e) => e.school).map((e, i) => (
                <div className="ri" key={i}>
                  <div className="rit">{e.school}</div>
                  <div className="ris">{e.degree}{e.field ? ` — ${e.field}` : ""}</div>
                  <div className="rid">{e.start}{e.start && e.end ? " — " : ""}{e.end}</div>
                  {e.gpa && <div className="rid">GPA: {e.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {d.skills?.length > 0 && (
            <div className="rsec">
              <div className="rstl">Skills</div>
              {d.skills.map((s, i) => (
                <div className="rski" key={i}>
                  <div className="rskn">{s}</div>
                  <div className="rsk">
                    <div className="rskf" style={{ width: `${70 + (i * 7) % 30}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {d.certifications?.some((c) => c.name) && (
            <div className="rsec">
              <div className="rstl">Certifications</div>
              {d.certifications.filter((c) => c.name).map((c, i) => (
                <div className="ri" key={i}>
                  <div className="rit" style={{ fontSize: ".82rem" }}>{c.name}</div>
                  {c.issuer && <div className="ris">{c.issuer}</div>}
                  {c.year   && <div className="rid">{c.year}</div>}
                </div>
              ))}
            </div>
          )}

          {d.languages?.length > 0 && (
            <div className="rsec">
              <div className="rstl">Languages</div>
              <div>{d.languages.map((l) => <span key={l} className="rtag">{l}</span>)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
