// assets/data/blog/tags.js
const raw = [
  "payroll",
  "compliance",
  "pension",
  "nhf",
  "wellness",
  "operations",
  "transparency",
];

const TagsData = raw.map((name) => ({
  name,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
}));

export default TagsData;
