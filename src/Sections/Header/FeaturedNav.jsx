import { NavLink } from "react-router-dom";
import featuredNav from "../../assets/data/header/featuredNav";
import CentaImg from "../../assets/images/mega-menu/centaAI.svg";
import "./featured-nav.css";

const FeaturedNav = () => {
  const { title, url, appearance } = featuredNav;

  return (
    <li
      className={`nav-item nav-item--featured tone-${appearance.tone} variant-${appearance.variant} emphasis-${appearance.emphasis}`}
    >
      <NavLink to={url} className="nav-link nav-link--featured">
        <img
          src={CentaImg}
          alt=""
          className="featured-icon"
          aria-hidden="true"
        />
        <span className="featured-label">{title}</span>
        {appearance.showBadge && (
          <span className="featured-badge">{appearance.badgeText}</span>
        )}
      </NavLink>
    </li>
  );
};

export default FeaturedNav;
