export default function Portfolio({ d }) {
  const firstName = (d.name || "You").split(" ")[0];

  return (
    <div className="pf">
      {/* Nav */}
      <div className="pnav">
        <div className="pnl">
          {firstName}<span style={{ color: "#3b82f6" }}>.</span>
        </div>
        <div className="pnlinks">
          {["About", "Skills", "Projects", "Contact"].map((l) => (
            <span key={l} className="pnlink">{l}</span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className="phero">
        <div className="phn">
          Hi, I'm <span>{d.name || "Your Name"}</span>
        </div>
        <div className="phr">{d.title || "Your Professional Title"}</div>
        {d.location && (
          <div style={{ fontSize: ".82rem", color: "#64748b", marginTop: ".5rem" }}>
            📍 {d.location}
          </div>
        )}
      </div>

      {/* About */}
      {d.summary && (
        <div className="psec">
          <div className="pstitle">About Me</div>
          <p className="pab">{d.summary}</p>
        </div>
      )}

      {/* Skills */}
      {d.skills?.length > 0 && (
        <div className="psec">
          <div className="pstitle">Skills</div>
          <div className="psg">
            {d.skills.map((s) => <span key={s} className="psk">{s}</span>)}
          </div>
        </div>
      )}

      {/* Projects */}
      {d.projects?.some((p) => p.name) && (
        <div className="psec">
          <div className="pstitle">Projects</div>
          <div className="ppg">
            {d.projects.filter((p) => p.name).map((p, i) => (
              <div key={i} className="pp">
                <div className="ppt">{p.name}</div>
                {p.tech && (
                  <div style={{ fontSize: ".72rem", color: "#3b82f6", marginBottom: ".4rem" }}>{p.tech}</div>
                )}
                <div className="ppd">{p.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {d.experience?.some((e) => e.company) && (
        <div className="psec">
          <div className="pstitle">Experience</div>
          {d.experience.filter((e) => e.company).map((e, i) => (
            <div key={i} className="pei">
              <div className="pet">{e.role}</div>
              <div className="pes">
                {e.company} · {e.start}
                {e.start && (e.end || e.current) ? " – " : ""}
                {e.current ? "Present" : e.end}
              </div>
              {e.description && <div className="ped">{e.description}</div>}
            </div>
          ))}
        </div>
      )}

      {/* Contact */}
      <div className="psec">
        <div className="pstitle">Contact</div>
        <div className="pcont">
          {d.email    && <span className="pci">✉ {d.email}</span>}
          {d.phone    && <span className="pci">✆ {d.phone}</span>}
          {d.linkedin && <span className="pci">LinkedIn: {d.linkedin}</span>}
          {d.github   && <span className="pci">GitHub: {d.github}</span>}
          {!d.email && !d.phone && (
            <span style={{ fontSize: ".85rem", color: "#64748b" }}>Add your contact info in the form</span>
          )}
        </div>
      </div>
    </div>
  );
}
