export default function ResumeMinimal({ d }) {
  return (
    <div className="rmin" style={{ fontFamily: "'DM Sans',sans-serif", background: "white" }}>
      <div className="rh">
        <div className="rn">{d.name || "Your Name"}</div>
        <div className="rt">{d.title || "Professional Title"}</div>
        <div className="rc">
          {d.email    && <span>{d.email}</span>}
          {d.phone    && <span>{d.phone}</span>}
          {d.location && <span>{d.location}</span>}
          {d.linkedin && <span>{d.linkedin}</span>}
        </div>
      </div>

      <div className="rb">
        {d.summary && (
          <div className="rsec">
            <div className="rstl">About</div>
            <p className="rsum">{d.summary}</p>
          </div>
        )}

        {d.experience?.some((e) => e.company) && (
          <div className="rsec">
            <div className="rstl">Experience</div>
            {d.experience.filter((e) => e.company).map((e, i) => (
              <div className="ri" key={i}>
                <div>
                  <div className="rit">{e.role}</div>
                  <div className="ris">{e.company}</div>
                </div>
                <div className="rid">
                  {e.start}{e.start && (e.end || e.current) ? "–" : ""}
                  {e.current ? "Now" : e.end}
                </div>
                {e.description && <div className="ridesc">{e.description}</div>}
              </div>
            ))}
          </div>
        )}

        {d.education?.some((e) => e.school) && (
          <div className="rsec">
            <div className="rstl">Education</div>
            {d.education.filter((e) => e.school).map((e, i) => (
              <div className="ri" key={i}>
                <div>
                  <div className="rit">{e.school}</div>
                  <div className="ris">{e.degree}{e.field ? `, ${e.field}` : ""}</div>
                </div>
                <div className="rid">{e.start}{e.start && e.end ? "–" : ""}{e.end}</div>
              </div>
            ))}
          </div>
        )}

        {d.skills?.length > 0 && (
          <div className="rsec">
            <div className="rstl">Skills</div>
            <div className="rsr">
              {d.skills.map((s) => <span key={s} className="rtag">{s}</span>)}
            </div>
          </div>
        )}

        {d.projects?.some((p) => p.name) && (
          <div className="rsec">
            <div className="rstl">Projects</div>
            {d.projects.filter((p) => p.name).map((p, i) => (
              <div className="ri" key={i}>
                <div>
                  <div className="rit">{p.name}</div>
                  {p.tech && <div className="ris">{p.tech}</div>}
                </div>
                {p.link && (
                  <div className="rid" style={{ fontSize: ".75rem", color: "#3b82f6" }}>{p.link}</div>
                )}
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

        {d.certifications?.some((c) => c.name) && (
          <div className="rsec">
            <div className="rstl">Certifications</div>
            <div className="rsr">
              {d.certifications.filter((c) => c.name).map((c, i) => (
                <span key={i} className="rtag">{c.name}{c.year ? ` (${c.year})` : ""}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
