import SafePlatformStyle from "./SafePlatform.style";
import StickyBox from "react-sticky-box";

import cryptoDashboardImg from "../../../assets/images/crypto2/crypto2-dashboard-img.png";
import platformIcon4 from "../../../assets/images/crypto2/platform-icon4.svg";
import platformIcon3 from "../../../assets/images/crypto2/platform-icon3.svg";
import platformIcon2 from "../../../assets/images/crypto2/platform-icon2.svg";
import platformIcon1 from "../../../assets/images/crypto2/platform-icon1.svg";
import checkGreenIcon from "../../../assets/images/icons/check-green2.svg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const SafePlatform = () => {
  return (
    <SafePlatformStyle className="safe-platform-section">
      <div className="container">
        <StickyBox
          offsetTop={20}
          offsetBottom={20}
          className="safe-platform-sticky"
        >
          <div className="safe-platform-header">
            <div className="container">
              <ScrollAnimate delay={200}>
                <SectionTitle
                  title="Powerful tools to simplify leave tracking"
                  subtitle="Leave Management"
                  titleMaxW="450px"
                  titleClass="text-white"
                />
              </ScrollAnimate>
              <div className="safe-platform-img">
                <img src={cryptoDashboardImg} alt="img" />
              </div>
            </div>
          </div>
        </StickyBox>

        <div className="safe-platform-content-section">
          <div className="container">
            <div className="safe-platform-content">
              <div className="safe-platform-text">
                <div className="safe-platform-icon">
                  <img src={platformIcon4} alt="icon" />
                </div>
                <ScrollAnimate delay={200}>
                  <div className="safe-platform-right">
                    <h4>Configurable Leave Policies</h4>
                    <p>
                      Define multiple leave types, carry-forward rules, blocked
                      days, and holiday calendars — tailored to your
                      organization’s needs.
                    </p>
                    <ul className="list">
                      <li>Custom leave types</li>
                      <li>Policy-based approvals</li>
                    </ul>
                  </div>
                </ScrollAnimate>
              </div>
              <div className="safe-platform-text">
                <div className="safe-platform-icon">
                  <img src={platformIcon3} alt="icon" />
                </div>
                <ScrollAnimate delay={220}>
                  <div className="safe-platform-right">
                    <h4>Seamless Approvals</h4>
                    <p>
                      Leave requests flow automatically through multi-level
                      approval chains. Managers get notified instantly, reducing
                      delays.
                    </p>
                    <div className="tags">
                      <a href="#">
                        <img src={checkGreenIcon} alt="icon" />
                        Multi-level approvals
                      </a>
                      <a href="#">
                        <img src={checkGreenIcon} alt="icon" />
                        Real-time notifications
                      </a>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>
              <div className="safe-platform-text">
                <div className="safe-platform-icon">
                  <img src={platformIcon2} alt="icon" />
                </div>
                <ScrollAnimate delay={250}>
                  <div className="safe-platform-right">
                    <h4>Accurate Leave Balances</h4>
                    <p>
                      Employees always see up-to-date balances, carry-forwards,
                      and reserved days — eliminating manual tracking and
                      confusion.
                    </p>
                    <ul className="chashback-list">
                      <li>
                        <h4>100%</h4>
                        <span>Accuracy in balances</span>
                      </li>
                      <li>
                        <h4>0</h4>
                        <span>Manual errors</span>
                      </li>
                    </ul>
                  </div>
                </ScrollAnimate>
              </div>
              <div className="safe-platform-text">
                <div className="safe-platform-icon">
                  <img src={platformIcon1} alt="icon" />
                </div>
                <ScrollAnimate delay={300}>
                  <div className="safe-platform-right">
                    <h4>Comprehensive Reporting</h4>
                    <p className="mb-0">
                      Generate reports on leave utilization, absentee trends,
                      and balances. Export for compliance and better workforce
                      planning.
                    </p>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SafePlatformStyle>
  );
};

export default SafePlatform;
