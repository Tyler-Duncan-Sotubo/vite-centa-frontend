// assets/data/blog/posts.js
import blogData from "./blogData";
import PostImg1 from "../../images/blog/blog1.png";
import PostImg2 from "../../images/blog/blog2.png";
import PostImg3 from "../../images/blog/blog3.png";
import PostImg4 from "../../images/blog/blog4.png";
import PostImg5 from "../../images/blog/blog5.png";
import PostImg6 from "../../images/blog/blog6.png";

const thumbs = [PostImg1, PostImg2, PostImg3, PostImg4, PostImg5, PostImg6];

const inferCategory = (title) => {
  const t = title.toLowerCase();
  if (t.includes("compliance")) return "Compliance";
  if (t.includes("transparency")) return "HR Policy";
  if (t.includes("salary advance")) return "Financial Wellness";
  if (t.includes("errors") || t.includes("accuracy")) return "Operations";
  return "Payroll";
};

const Data = blogData.map((p, i) => ({
  delay: 200 + (i % 6) * 50, // keep your stagger pattern
  thumbnail: thumbs[i % thumbs.length], // keep existing images
  category: inferCategory(p.title), // lightweight categorization
  date: p.date, // use your date
  title: p.title, // use your title
  details: p.description, // use your description
  slug: p.id, // handy for routing
}));

export default Data;
