// assets/data/blog/categories.js
import blogData from "./blogData";

const slugify = (s = "") =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const inferCategory = (title) => {
  const t = title.toLowerCase();
  if (t.includes("compliance")) return "Compliance";
  if (t.includes("transparency")) return "HR Policy";
  if (t.includes("salary advance")) return "Financial Wellness";
  if (t.includes("errors") || t.includes("accuracy")) return "Operations";
  return "Payroll";
};

const counts = blogData.reduce((acc, p) => {
  const cat = inferCategory(p.title);
  acc[cat] = (acc[cat] || 0) + 1;
  return acc;
}, {});

const data = Object.entries(counts).map(([name, count], i) => ({
  id: i + 1,
  name,
  count,
  slug: slugify(name),
}));

export default data;
