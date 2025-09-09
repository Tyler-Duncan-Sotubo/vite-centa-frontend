import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import FeatureTeamStyle from "./FeatureTeam.style";

import Img1 from "../../../assets/images/accounting/we-offering-slider-img.png";
import Img2 from "../../../assets/images/img/feature-team2.png";
import Img3 from "../../../assets/images/img/feature-team1.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const FeatureTeam = () => {
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
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: false,
    focusOnSelect: true,
  });

  useEffect(() => {
    setSettingsFor((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderNavRef.current,
    }));

    setSettingsNav((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderForRef.current,
    }));
  }, []);

  return (
    <FeatureTeamStyle className="feature-team-section newsletter">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <ScrollAnimate delay={200}>
              <Slider
                ref={sliderNavRef}
                {...settingsNav}
                className="feature-team-slider-nav"
              >
                <div className="slider-item">
                  <div className="slider-progress">
                    <div className="progress-done" />
                  </div>
                  <img src={Img1} alt="leave-calendar" />
                </div>
                <div className="slider-item">
                  <div className="slider-progress">
                    <div className="progress-done" />
                  </div>
                  <img src={Img2} alt="leave-requests" />
                </div>
                <div className="slider-item">
                  <div className="slider-progress">
                    <div className="progress-done" />
                  </div>
                  <img src={Img3} alt="leave-reports" />
                </div>
              </Slider>
            </ScrollAnimate>
          </div>

          <div className="col-lg-5">
            <ScrollAnimate delay={200}>
              <Slider
                ref={sliderForRef}
                {...settingsFor}
                className="feature-team-slider-for"
              >
                <div className="slider-item">
                  <h2>Streamlined Leave Requests</h2>
                  <p>
                    Employees can submit leave directly through ESS or the
                    calendar. Managers get notified instantly, making the
                    approval process quick and transparent.
                  </p>
                  <ul>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Self-service leave requests
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Multi-level approvals
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Real-time notifications
                    </li>
                  </ul>
                </div>

                <div className="slider-item">
                  <h2>Accurate Leave Policies</h2>
                  <p>
                    Define leave types, accrual rules, and blocked days once.
                    The system automatically enforces compliance, reducing
                    disputes and manual checks.
                  </p>
                  <ul>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Configurable policies & accruals
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Holiday & reserved day settings
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Automated policy enforcement
                    </li>
                  </ul>
                </div>

                <div className="slider-item">
                  <h2>Insights & Leave Reports</h2>
                  <p>
                    Track utilization and balances across teams, departments, or
                    offices. Export reports for payroll integration and
                    compliance with a single click.
                  </p>
                  <ul>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Leave utilization reports
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Team & department insights
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Payroll-ready exports
                    </li>
                  </ul>
                </div>
              </Slider>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </FeatureTeamStyle>
  );
};

export default FeatureTeam;
