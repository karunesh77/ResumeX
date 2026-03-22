# ResumeX — AI Resume & Portfolio Builder

Build professional resumes and personal portfolio websites in minutes. A modern, AI-powered web app that guides you through a simple form and outputs polished resumes in multiple templates, plus an auto-generated portfolio preview.

![ResumeX](https://img.shields.io/badge/ResumeX-v1.0.0-blue) ![React](https://img.shields.io/badge/React-18.2-61DAFB) ![Vite](https://img.shields.io/badge/Vite-4.4-646CFF)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **AI Writing Assistant** | Generate professional summaries, improvement tips, and powerful keywords (requires Anthropic API key) |
| **3 Premium Templates** | Modern Blue, Clean Minimal, Creative Dark — each crafted for maximum impact |
| **PDF Download** | Export your resume as a print-ready PDF instantly via browser print |
| **Portfolio Generator** | Automatically turns your resume data into a personal portfolio website preview |
| **Step-by-Step Form** | 7 guided steps: Personal, Education, Experience, Skills, Projects, Extras, Template |
| **Live Preview** | See your resume update in real time. Switch templates without losing data |
| **Tags Input** | Add skills and languages with Enter or comma; supports backspace removal |
| **Responsive Design** | Works on desktop and mobile with a modern dark-themed UI |

---

## 🛠 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 4
- **Styling:** CSS3 (custom properties, grid, flexbox)
- **Fonts:** Outfit, DM Sans, DM Mono (Google Fonts)
- **AI (optional):** Anthropic Claude API

---

## 📁 Project Structure

```
ResumeX/
├── index.html
├── package.json
├── vercel.json          # Vercel deployment config
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx         # App entry point
    ├── App.jsx          # Root component, view routing
    ├── styles.css       # Global styles
    ├── data/
    │   └── constants.js # Steps, empty data shapes, updater helper
    └── components/
        ├── Landing.jsx      # Hero & features landing page
        ├── Navbar.jsx       # Top navigation bar
        ├── Builder.jsx      # 7-step resume form
        ├── Preview.jsx      # Resume + Portfolio preview + PDF
        ├── AIPanel.jsx      # AI suggestions (summary, tips, keywords)
        ├── Portfolio.jsx    # Auto-generated portfolio layout
        ├── TagsInput.jsx    # Skills/languages tag input
        ├── TemplatePicker.jsx # Template selection UI
        ├── ResumeModern.jsx   # Modern Blue template
        ├── ResumeMinimal.jsx  # Clean Minimal template
        └── ResumeCreative.jsx # Creative Dark template
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and **npm**

### Installation

```bash
# Clone or download the repo
cd ResumeX

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is written to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📋 Resume Data Structure

The app uses a single `data` object that flows through Builder and Preview:

```javascript
{
  name, title, email, phone, location,
  linkedin, github, website, summary,
  education: [{ school, degree, field, start, end, gpa }],
  experience: [{ company, role, start, end, current, description }],
  skills: ["React", "Node.js", ...],
  projects: [{ name, tech, description, link }],
  certifications: [{ name, issuer, year }],
  achievements: "string",
  languages: ["English", "Hindi", ...]
}
```

---

## 🤖 AI Panel (Optional)

The **AI Resume Assistant** panel (in the Preview view) can:

1. **Write Summary** — Generate a 3-sentence professional summary
2. **Improve Tips** — Get 3 actionable improvement suggestions
3. **Keywords** — Get 10 powerful resume keywords

**Setup:** The AIPanel calls `https://api.anthropic.com/v1/messages`. To enable it:

1. Sign up at [Anthropic](https://www.anthropic.com)
2. Get an API key
3. Add `Authorization: Bearer YOUR_KEY` to the fetch headers in `src/components/AIPanel.jsx`

> Without an API key, the AI panel will show "Error connecting to AI" — the rest of the app works normally.

---

## 🎨 Templates

| Template | Style |
|----------|-------|
| **Modern Blue** | Two-column layout, blue accent, professional |
| **Clean Minimal** | Single column, black & white, minimal |
| **Creative Dark** | Dark sidebar, gradient accents, bold |

You can switch templates in the Preview view without losing your data.

---

## 📤 PDF Export

The **Download PDF** button opens a new window with the resume content and triggers the browser’s print dialog. Choose “Save as PDF” as the destination.

---

## 🌐 Deployment (Vercel)

The project includes a `vercel.json` for easy deployment:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

The build script uses `node node_modules/vite/bin/vite.js build` to avoid permission issues (exit 126) on Vercel’s Linux environment.

### Deploy Steps

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite — no extra config needed
4. Deploy

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Vite) |
| `npm run build` | Build for production |
| `npm run preview` | Serve production build locally |

---

## 🔧 Configuration

- **Vite:** `vite.config.js` — React plugin only
- **Vercel:** `vercel.json` — build command, output dir, framework

---

## 📄 License

MIT

---

## 🙏 Credits

- Built with [React](https://react.dev) and [Vite](https://vitejs.dev)
- Fonts: [Google Fonts](https://fonts.google.com) (Outfit, DM Sans, DM Mono)
- AI: [Anthropic Claude](https://www.anthropic.com) (optional)
