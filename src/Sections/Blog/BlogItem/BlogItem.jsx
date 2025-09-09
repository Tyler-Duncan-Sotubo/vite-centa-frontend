import { NavLink } from "react-router-dom";
import BlogItemStyleWrapper from "./BlogItem.style";
import { GoArrowRight } from "react-icons/go";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import PropTypes from "prop-types";

const BlogItem = ({
  thumbnail,
  category,
  date,
  title,
  details,
  delay,
  slug,
}) => {
  console.log(slug);
  return (
    <ScrollAnimate delay={delay}>
      <BlogItemStyleWrapper>
        <NavLink to={`/blog/${slug}`} className="letest-blog-img">
          <img src={thumbnail} alt="post thumbnail" />
        </NavLink>
        <div className="letest-blog-info">
          <div className="letest-blog-info-inner">
            <h5>
              <span>{category}</span> . {date}
            </h5>
            <h4>
              <NavLink to={`/blog/${slug}`}>{title}</NavLink>
            </h4>
            <p>{details}</p>
            <NavLink to={`/blog/${slug}`} className="text-link">
              <span>Read More</span>
              <GoArrowRight />
            </NavLink>
          </div>
        </div>
      </BlogItemStyleWrapper>
    </ScrollAnimate>
  );
};
BlogItem.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  delay: PropTypes.number,
  slug: PropTypes.string.isRequired,
};

export default BlogItem;
