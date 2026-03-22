import { useState } from "react";

export default function TagsInput({ value = [], onChange, placeholder }) {
  const [input, setInput] = useState("");

  const handleKey = (e) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      if (!value.includes(input.trim())) onChange([...value, input.trim()]);
      setInput("");
    }
    if (e.key === "Backspace" && !input && value.length) {
      onChange(value.slice(0, -1));
    }
  };

  return (
    <div
      className="tags-input"
      onClick={(e) => e.currentTarget.querySelector("input").focus()}
    >
      {value.map((t) => (
        <span key={t} className="tag">
          {t}
          <button onClick={() => onChange(value.filter((x) => x !== t))}>×</button>
        </span>
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKey}
        placeholder={value.length ? "" : placeholder}
      />
    </div>
  );
}
