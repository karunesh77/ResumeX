import { useState } from "react";
import "./styles.css";

import Landing  from "./components/Landing";
import Builder  from "./components/Builder";
import Preview  from "./components/Preview";
import { EMPTY_DATA } from "./data/constants";

/**
 * App
 * Manages top-level view routing ("landing" | "builder" | "preview")
 * and shared resume state passed down to Builder & Preview.
 */
export default function App() {
  const [view,     setView]     = useState("landing");
  const [data,     setData]     = useState(EMPTY_DATA);
  const [template, setTemplate] = useState("modern");

  switch (view) {
    case "landing":
      return (
        <Landing
          onGetStarted={() => setView("builder")}
        />
      );

    case "builder":
      return (
        <Builder
          data={data}
          setData={setData}
          template={template}
          setTemplate={setTemplate}
          onPreview={() => setView("preview")}
          onHome={() => setView("landing")}
        />
      );

    case "preview":
      return (
        <Preview
          data={data}
          template={template}
          setTemplate={setTemplate}
          onEdit={() => setView("builder")}
          onHome={() => setView("landing")}
        />
      );

    default:
      return null;
  }
}
