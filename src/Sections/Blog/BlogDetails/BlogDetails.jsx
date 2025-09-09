/* eslint-disable no-unused-vars */
import { useMemo } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import BlogDetailsStyleWrapper from "./BlogDetails.style";
import StickyBox from "react-sticky-box";
import Sidebar from "../Sidebar/Sidebar";
import Comments from "../Comments/Comments";

import ShapeIcon1 from "../../../assets/images/shape/breadcrumb-shape1.svg";
import ShapeIcon2 from "../../../assets/images/shape/breadcrumb-shape2.svg";
import ShareIcon from "../../../assets/images/icons/share-icon.svg";
import PrevImg from "../../../assets/images/blog/blog-prev-img.png";
import NextImg from "../../../assets/images/blog/blog-next-img.png";

import BlogDetailsImg from "../../../assets/images/blog/blog-details-img.png"; // keep your hero image
import ProfileImg from "../../../assets/images/icons/icon_profile.svg";
import CategoryImg from "../../../assets/images/icons/icon_category.svg";
import CalendarImg from "../../../assets/images/icons/icon_calendar.svg";
import QuotationImg from "../../../assets/images/icons/quotation.svg";
import BlogDetailsSubImg1 from "../../../assets/images/blog/blog-details-sub-img1.png";
import BlogDetailsSubImg2 from "../../../assets/images/blog/blog-details-sub-img2.png";

import ScrollAnimate from "../../../Components/ScrollAnimate";

// import your master blog data (the array you posted)
import blogData from "../../../assets/data/blog/blogData";

// lightweight category inference to populate the breadcrumb info line
const inferCategory = (title) => {
  const t = (title || "").toLowerCase();
  if (t.includes("compliance")) return "Compliance";
  if (t.includes("transparency")) return "HR Policy";
  if (t.includes("salary advance")) return "Financial Wellness";
  if (t.includes("errors") || t.includes("accuracy")) return "Operations";
  return "Payroll";
};

const BlogDetails = () => {
  const { slug } = useParams(); // URL should be /blog/:slug where slug === post.id in blogData

  const { post, index, prevPost, nextPost } = useMemo(() => {
    const idx = blogData.findIndex((p) => p.id === slug);
    const safeIdx = idx >= 0 ? idx : 0;
    const current = blogData[safeIdx];
    return {
      post: current,
      index: safeIdx,
      prevPost: safeIdx > 0 ? blogData[safeIdx - 1] : null,
      nextPost: safeIdx < blogData.length - 1 ? blogData[safeIdx + 1] : null,
    };
  }, [slug]);

  // Fallbacks (defensive)
  const title = post?.title || "Blog Details";
  const date = post?.date || "—";
  const description = post?.description || "";
  const contentHTML = post?.content || "";
  const category = inferCategory(post?.title);

  return (
    <BlogDetailsStyleWrapper>
      {/* breadcrumb section */}
      <section className="breadcrumb-section blog-details-breadcrumb-section">
        <div className="bg-shape">
          <div className="shape-img img-1">
            <ScrollAnimate>
              <img src={ShapeIcon1} alt="shape" />
            </ScrollAnimate>
          </div>
          <div className="shape-img img-2">
            <ScrollAnimate>
              <img src={ShapeIcon2} alt="shape" />
            </ScrollAnimate>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <ScrollAnimate>
                <div className="breadcrumb-content">
                  <nav aria-label="breadcrumb">
                    <ul className="breadcrumb breadcrumb-list">
                      <li className="breadcrumb-item">
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li className="breadcrumb-item">
                        <NavLink to="/blog">Latest Blogs</NavLink>
                      </li>
                      <li className="breadcrumb-item active">Blog Details</li>
                    </ul>
                  </nav>
                  <div className="breadcrumb-sec">
                    <h1 className="breadcrumb-title">
                      {title.split(":")[0]}
                      {title.includes(":") && (
                        <>
                          :<br />
                          {title.split(":").slice(1).join(":").trim()}
                        </>
                      )}
                    </h1>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </section>

      {/* blog details section */}
      <section className="blog-details-section">
        <div className="container">
          <div className="row">
            {/* main content */}
            <div className="col-lg-8">
              <div className="blog-details-content">
                <ScrollAnimate>
                  <div className="blog-details-img">
                    {/* Keep your static hero image per your request */}
                    <img src={BlogDetailsImg} alt="Blog hero" />
                  </div>
                </ScrollAnimate>

                <div className="blog-details-inner">
                  {/* info line */}
                  <div className="blog-details-info-list">
                    <ScrollAnimate>
                      <ul>
                        <li>
                          <span>
                            <img src={ProfileImg} alt="author" />
                          </span>
                          By - <NavLink to="#">CentaHR Team</NavLink>
                        </li>
                        <li>
                          <span>
                            <img src={CategoryImg} alt="category" />
                          </span>
                          <NavLink to="#">{category}</NavLink>
                        </li>
                        <li>
                          <span>
                            <img src={CalendarImg} alt="date" />
                          </span>
                          {date}
                        </li>
                      </ul>
                    </ScrollAnimate>
                  </div>

                  {/* short intro / excerpt */}
                  {description && (
                    <ScrollAnimate>
                      <p className="blog-details-headline">{description}</p>
                    </ScrollAnimate>
                  )}

                  {/* main HTML content from your blogData */}
                  {contentHTML && (
                    <ScrollAnimate>
                      <div
                        className="blog-text blog-content"
                        // your content is already safe-authored HTML
                        dangerouslySetInnerHTML={{ __html: contentHTML }}
                      />
                    </ScrollAnimate>
                  )}

                  {/* Keep your existing quote + sub images section for visual variety */}
                  <ScrollAnimate>
                    <div className="blog-quotation-section">
                      <div className="quotation-icon">
                        <img src={QuotationImg} alt="icon" />
                      </div>
                      <h4>
                        “Great payroll is about trust, accuracy, and clarity —
                        the foundation of employee satisfaction.”
                      </h4>
                    </div>
                  </ScrollAnimate>

                  <div className="row">
                    <div className="col-sm-6 mb-4">
                      <ScrollAnimate>
                        <img src={BlogDetailsSubImg1} alt="sub visual 1" />
                      </ScrollAnimate>
                    </div>
                    <div className="col-sm-6 mb-4">
                      <ScrollAnimate>
                        <img src={BlogDetailsSubImg2} alt="sub visual 2" />
                      </ScrollAnimate>
                    </div>
                  </div>

                  {/* tags + share (leave as-is; you can wire tags later) */}
                  <ScrollAnimate>
                    <div className="blog-tag-section">
                      <ul>
                        <li>
                          <NavLink to="#">payroll</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">compliance</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">hr-policy</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">operations</NavLink>
                        </li>
                      </ul>

                      <button type="button">
                        <img src={ShareIcon} alt="share" />
                        Share
                      </button>
                    </div>
                  </ScrollAnimate>
                </div>
              </div>

              {/* previous / next */}
              <div className="blog-previous-next-section">
                <div className="row">
                  {/* previous */}
                  <div className="col-sm-6">
                    <ScrollAnimate>
                      <div className="blog-card">
                        <Link
                          to={prevPost ? `/blog/${prevPost.id}` : "#"}
                          className="blog-card-img"
                        >
                          <img src={PrevImg} alt="Previous" />
                        </Link>
                        <div className="blog-card-text">
                          <Link to={prevPost ? `/blog/${prevPost.id}` : "#"}>
                            Previous
                          </Link>
                          <h6>
                            <Link to={prevPost ? `/blog/${prevPost.id}` : "#"}>
                              {prevPost ? prevPost.title : "—"}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </ScrollAnimate>
                  </div>

                  {/* next */}
                  <div className="col-sm-6">
                    <ScrollAnimate>
                      <div className="blog-card justify-right">
                        <Link
                          to={nextPost ? `/blog/${nextPost.id}` : "#"}
                          className="blog-card-img"
                        >
                          <img src={NextImg} alt="Next" />
                        </Link>
                        <div className="blog-card-text">
                          <Link to={nextPost ? `/blog/${nextPost.id}` : "#"}>
                            Next
                          </Link>
                          <h6>
                            <Link to={nextPost ? `/blog/${nextPost.id}` : "#"}>
                              {nextPost ? nextPost.title : "—"}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </ScrollAnimate>
                  </div>
                </div>
              </div>

              {/* comments */}
              <Comments />
            </div>

            {/* sidebar */}
            <div className="col-lg-4">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
          </div>
        </div>
      </section>
    </BlogDetailsStyleWrapper>
  );
};

export default BlogDetails;
