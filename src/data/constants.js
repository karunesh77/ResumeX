export const STEPS = [
  { id: 0, label: "Personal" },
  { id: 1, label: "Education" },
  { id: 2, label: "Experience" },
  { id: 3, label: "Skills" },
  { id: 4, label: "Projects" },
  { id: 5, label: "Extras" },
  { id: 6, label: "Template" },
];

export const EMPTY_EDU  = () => ({ school: "", degree: "", field: "", start: "", end: "", gpa: "" });
export const EMPTY_EXP  = () => ({ company: "", role: "", start: "", end: "", current: false, description: "" });
export const EMPTY_PROJ = () => ({ name: "", tech: "", description: "", link: "" });
export const EMPTY_CERT = () => ({ name: "", issuer: "", year: "" });

export const EMPTY_DATA = {
  name: "", title: "", email: "", phone: "", location: "",
  linkedin: "", github: "", website: "", summary: "",
  education:      [EMPTY_EDU()],
  experience:     [EMPTY_EXP()],
  skills:         [],
  projects:       [EMPTY_PROJ()],
  certifications: [EMPTY_CERT()],
  achievements:   "",
  languages:      [],
};

/** immutable array-of-objects updater */
export function upd(arr, i, k, v) {
  return arr.map((x, j) => (j === i ? { ...x, [k]: v } : x));
}
