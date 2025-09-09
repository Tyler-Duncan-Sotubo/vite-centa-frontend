import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import OfferingStyleWrapper from "./Offering.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import CardImg1 from "../../../assets/images/accounting/card_img_1.png";
import CardImg2 from "../../../assets/images/accounting/card_img_2.png";
import CardImg3 from "../../../assets/images/accounting/card_img_3.png";
import CardImg4 from "../../../assets/images/accounting/card_img_4.png";
import WeOfferingSliderImg from "../../../assets/images/accounting/we-offering-slider-img.png";

// Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const Offering = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    asNavFor: sliderNavRef.current,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: false,
    arrows: false,
    autoplay: false, // optional: usually no autoplay for nav
    infinite: false, // stops creating clones
    focusOnSelect: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  useEffect(() => {
    setSettingsFor((prev) => ({ ...prev, asNavFor: sliderNavRef.current }));
    setSettingsNav((prev) => ({ ...prev, asNavFor: sliderForRef.current }));
  }, []);

  return (
    <OfferingStyleWrapper className="we-offering-section">
      <div className="container">
        <div className="row">
          {/* LEFT: title + tabs */}
          <div className="col-md-6">
            <div className="we-offering-text">
              <ScrollAnimate delay={200}>
                <SectionTitle
                  title="Your Core HR, organized"
                  subtitle="What’s included"
                  parentClass="v8 title2 md-mb-20"
                />
              </ScrollAnimate>

              <ScrollAnimate delay={250}>
                <Slider
                  {...settingsNav}
                  ref={sliderNavRef}
                  className="we-offering-slider-nav"
                >
                  <div className="slick-btn">Onboarding</div>
                  <div className="slick-btn">Employees</div>
                  <div className="slick-btn">Teams</div>
                  <div className="slick-btn">Offboarding</div>
                </Slider>
              </ScrollAnimate>
            </div>
          </div>

          {/* RIGHT: slides */}
          <div className="col-md-6">
            <ScrollAnimate delay={300}>
              <div className="we-offering-slider-content">
                <div className="we-offering-slide-bg-img">
                  <img src={WeOfferingSliderImg} alt="img" />
                </div>

                <Slider
                  {...settingsFor}
                  ref={sliderForRef}
                  className="we-offering-slider"
                >
                  {/* Onboarding */}
                  <div className="we-offering-slide-item">
                    <div className="we-offering-slide-img">
                      <img src={CardImg1} alt="Onboarding" />
                    </div>
                    <div className="we-offering-slide-item-text">
                      <h4>Onboarding</h4>
                      <p className="xl-mb-25">
                        Bring new hires in fast with guided checklists and data
                        capture (personal, bank, statutory). Assign equipment
                        and collect documents in one flow.
                      </p>
                      <div className="we-offering-slide-btns">
                        <button>
                          <span className="iconify" data-icon="bi:check-lg" />{" "}
                          Checklist & tasks
                        </button>
                        <button>
                          <span className="iconify" data-icon="bi:check-lg" />{" "}
                          Document & e-signature
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Employees */}
                  <div className="we-offering-slide-item">
                    <div className="we-offering-slide-img">
                      <img src={CardImg2} alt="Employees" />
                    </div>
                    <div className="we-offering-slide-item-text">
                      <h4>Employees</h4>
                      <p>
                        A single source of truth for employee profiles—contacts,
                        contracts, compensation, and lifecycle events—kept
                        secure and up to date.
                      </p>
                    </div>
                  </div>

                  {/* Teams */}
                  <div className="we-offering-slide-item">
                    <div className="we-offering-slide-img">
                      <img src={CardImg3} alt="Teams" />
                    </div>
                    <div className="we-offering-slide-item-text">
                      <h4>Teams</h4>
                      <p>
                        Visualize org structure with managers and reporting
                        lines. Organize people into teams for approvals,
                        reviews, and analytics.
                      </p>
                      <ul className="check-list">
                        <li>Org chart & reporting lines</li>
                        <li>Team-based permissions & workflows</li>
                      </ul>
                    </div>
                  </div>

                  {/* Offboarding */}
                  <div className="we-offering-slide-item">
                    <div className="we-offering-slide-img">
                      <img src={CardImg4} alt="Offboarding" />
                    </div>
                    <div className="we-offering-slide-item-text">
                      <h4>Offboarding</h4>
                      <p className="xl-mb-25">
                        Handle exits smoothly with structured checklists, asset
                        returns, knowledge transfer, and exit interviews—fully
                        auditable.
                      </p>
                      <div className="we-offering-slide-btns">
                        <button>
                          <span className="iconify" data-icon="bi:check-lg" />{" "}
                          Asset & access recovery
                        </button>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </OfferingStyleWrapper>
  );
};

export default Offering;
