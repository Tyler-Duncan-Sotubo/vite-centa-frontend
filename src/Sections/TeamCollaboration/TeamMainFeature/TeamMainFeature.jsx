import TeamMainFeatureStyle from "./TeamMainFeature.style";

import shape1 from "../../../assets/images/team-collaboration/shape1.svg";
import shape2 from "../../../assets/images/team-collaboration/shape2.svg";
import ellipse1 from "../../../assets/images/team-collaboration/ellipse1.svg";
import ellipse2 from "../../../assets/images/team-collaboration/ellipse2.svg";
import ellipse3 from "../../../assets/images/team-collaboration/ellipse3.svg";
import coffeeIcon from "../../../assets/images/team-collaboration/coffee.svg";
import fingerScanIcon from "../../../assets/images/team-collaboration/finger-scan.svg";
import soundIcon from "../../../assets/images/team-collaboration/sound.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TeamMainFeature = () => {
  return (
    <TeamMainFeatureStyle className="main-feature-section">
      <div className="bg-shape">
        <div className="shape-img img-1">
          <img src={shape1} alt="shape background 1" />
        </div>
        <div className="shape-img img-2">
          <img src={shape2} alt="shape background 2" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* Feature 1 */}
          <div className="col-lg-4 col-md-6">
            <ScrollAnimate delay={200}>
              <div className="main-feature-card card-1">
                <div className="overlay">
                  <img src={ellipse1} alt="ellipse shape" />
                </div>
                <div className="main-feature-card-content">
                  <img src={coffeeIcon} alt="applicant tracking icon" />
                  <h2>Smart Applicant Tracking</h2>
                  <p>
                    Manage candidates seamlessly from application to hire with a
                    single streamlined dashboard.
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Feature 2 */}
          <div className="col-lg-4 col-md-6">
            <ScrollAnimate delay={225}>
              <div className="main-feature-card card-2">
                <div className="overlay">
                  <img src={ellipse2} alt="ellipse shape" />
                </div>
                <div className="main-feature-card-content">
                  <img src={fingerScanIcon} alt="resume screening icon" />
                  <h2>Automated Screening</h2>
                  <p>
                    Save time with resume parsing, keyword filtering, and smart
                    shortlisting powered by automation.
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Feature 3 */}
          <div className="col-lg-4 col-md-6">
            <ScrollAnimate delay={250}>
              <div className="main-feature-card card-3">
                <div className="overlay">
                  <img src={ellipse3} alt="ellipse shape" />
                </div>
                <div className="main-feature-card-content">
                  <img src={soundIcon} alt="interview scheduling icon" />
                  <h2>Interview Scheduling</h2>
                  <p>
                    Coordinate interviews effortlessly with built-in calendar
                    sync and automated candidate notifications.
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </TeamMainFeatureStyle>
  );
};

export default TeamMainFeature;
