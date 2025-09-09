// Sections/Blog/BlogList/BlogList.jsx
import BlogListStyleWrapper from "./BlogList.style";
import StickyBox from "react-sticky-box";
import BlogItem from "../BlogItem/BlogItem";
import Data from "../../../assets/data/blog/posts";
import Pagination from "../../../Components/Pagination/Pagination";
import Sidebar from "../Sidebar/Sidebar";
import { useParams, useLocation } from "react-router-dom";

const slugify = (s = "") =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const useQuery = () => new URLSearchParams(useLocation().search);

const BlogList = () => {
  const { cat, tag } = useParams();
  const query = useQuery();
  const q = (query.get("q") || "").trim().toLowerCase();

  let filtered = Data;

  // Category filter (match inferred category we put on posts)
  if (cat) {
    filtered = filtered.filter(
      (p) => slugify(p.category) === cat.toLowerCase()
    );
  }

  // Tag filter (simple title/details match; if you add tags per post, filter on those instead)
  if (tag) {
    filtered = filtered.filter(
      (p) =>
        slugify(p.title).includes(tag.toLowerCase()) ||
        slugify(p.details).includes(tag.toLowerCase()) ||
        slugify(p.category).includes(tag.toLowerCase())
    );
  }

  // Search filter (?q=...)
  if (q) {
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.details.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  return (
    <BlogListStyleWrapper>
      <div className="container">
        <div className="row g-4">
          {/* blog section */}
          <div className="col-lg-8">
            <div className="latest-blog-content">
              <div className="row">
                {filtered?.length ? (
                  filtered.map((post, i) => (
                    <div key={i} className="col-md-6">
                      <BlogItem {...post} />
                    </div>
                  ))
                ) : (
                  <p className="text-muted p-3">No posts found.</p>
                )}
              </div>
            </div>
            {/* pagination (optional to wire later) */}
            <Pagination />
          </div>

          {/* sidebar section */}
          <div className="col-lg-4">
            <StickyBox offsetTop={20} offsetBottom={20}>
              <Sidebar />
            </StickyBox>
          </div>
        </div>
      </div>
    </BlogListStyleWrapper>
  );
};

export default BlogList;
