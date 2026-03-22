import { useState } from "react";

const PROMPTS = {
  summary: (d) =>
    `Write a compelling 3-sentence professional summary for a resume.
Name: ${d.name}, Title: ${d.title},
Experience: ${d.experience?.filter((e) => e.company).map((e) => `${e.role} at ${e.company}`).join(", ")},
Skills: ${d.skills?.join(", ")}.
Output ONLY the summary paragraph, no labels or headings.`,

  improve: (d) =>
    `Give 3 specific actionable improvement tips for this resume:
Name: ${d.name}, Title: ${d.title}, Summary: ${d.summary},
Skills: ${d.skills?.join(", ")},
Experience: ${d.experience?.filter((e) => e.company).map((e) => `${e.role} at ${e.company}`).join(", ")}.
Output exactly 3 numbered tips, each 1–2 sentences.`,

  keywords: (d) =>
    `Suggest 10 powerful resume keywords for:
Title: ${d.title}, Skills: ${d.skills?.join(", ")},
Experience: ${d.experience?.filter((e) => e.company).map((e) => e.role).join(", ")}.
List exactly 10 numbered keywords/phrases, no extra explanation.`,
};

const LABELS = {
  summary: "✍ Write Summary",
  improve: "💡 Improve Tips",
  keywords: "🔑 Keywords",
};

export default function AIPanel({ data }) {
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading]       = useState(false);
  const [type, setType]             = useState("summary");

  const generate = async () => {
    setLoading(true);
    setSuggestion("");
    try {
      const res  = await fetch("https://api.anthropic.com/v1/messages", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model:      "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages:   [{ role: "user", content: PROMPTS[type](data) }],
        }),
      });
      const json = await res.json();
      setSuggestion(json.content?.find((c) => c.type === "text")?.text || "Could not generate.");
    } catch {
      setSuggestion("Error connecting to AI. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="ai-panel">
      <div className="ai-hd">
        <div className="ai-badge">✦ AI</div>
        <div className="ai-title">AI Resume Assistant</div>
      </div>

      {/* Type selector */}
      <div className="ai-btns">
        {Object.entries(LABELS).map(([k, l]) => (
          <button
            key={k}
            className={`btn btn-sm ${type === k ? "btn-primary" : "btn-ghost"}`}
            onClick={() => setType(k)}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Generate button */}
      <button
        className="btn btn-outline btn-sm w-full"
        style={{ marginBottom: "1rem" }}
        onClick={generate}
        disabled={loading}
      >
        {loading
          ? "Generating..."
          : `✦ Generate ${type === "summary" ? "Professional Summary" : type === "improve" ? "Improvement Tips" : "Keywords"}`}
      </button>

      {/* Output */}
      <div className="ai-out">
        {loading ? (
          <div className="ai-load">
            <div className="ai-dot" /><div className="ai-dot" /><div className="ai-dot" />
            <span style={{ marginLeft: ".5rem" }}>Generating AI suggestions...</span>
          </div>
        ) : suggestion || (
          <span style={{ color: "var(--text3)", fontStyle: "italic" }}>
            Click Generate to get AI-powered suggestions…
          </span>
        )}
      </div>

      {suggestion && (
        <button
          className="btn btn-ghost btn-sm"
          style={{ marginTop: ".75rem" }}
          onClick={() => navigator.clipboard?.writeText(suggestion)}
        >
          📋 Copy
        </button>
      )}
    </div>
  );
}
