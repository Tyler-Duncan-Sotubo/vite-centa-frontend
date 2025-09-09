// assets/data/blog/recentPosts.js
import blogData from "./blogData";
import PostImg1 from "../../images/blog/recent-post-img1.png";
import PostImg2 from "../../images/blog/recent-post-img2.png";
import PostImg3 from "../../images/blog/recent-post-img3.png";
import PostImg4 from "../../images/blog/recent-post-img4.png";

const thumbs = [PostImg1, PostImg2, PostImg3, PostImg4];

const sorted = [...blogData].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const data = sorted.slice(0, 4).map((p, i) => ({
  id: i + 1,
  date: new Date(p.date)
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase(), // e.g., "05 JUN, 2025"
  title: p.title,
  thumbnail: thumbs[i], // keep existing images
  slug: p.id,
}));

export default data;
