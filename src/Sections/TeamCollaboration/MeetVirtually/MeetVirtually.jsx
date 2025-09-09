import ScrollAnimate from "../../../Components/ScrollAnimate";
import TitleStyleWrapper from "../../../Components/Title/Title.style";

import graphBoxImage from "../../../assets/images/team-collaboration/graph-box.svg";
import MeetVirtuallyStyleWrapper from "./MeetVirtually.style";

const MeetVirtually = () => {
  return (
    <MeetVirtuallyStyleWrapper className="virtually-section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Left Side: Image */}
          <div className="col-lg-5">
            <ScrollAnimate delay={200}>
              <div className="virtually-img">
                <img
                  src={graphBoxImage}
                  alt="Recruitment analytics dashboard illustration"
                />
              </div>
            </ScrollAnimate>
          </div>

          {/* Right Side: Content */}
          <div className="col-xl-6 col-lg-7">
            <div className="virtually-card">
              <ScrollAnimate delay={200}>
                <TitleStyleWrapper>
                  <div className="section-title">
                    <span className="sub-title">Recruitment Analytics</span>
                    <h2 className="title mb-0">
                      Smarter <span className="marketing-badge">Hiring</span>{" "}
                      with Data-Driven Insights
                    </h2>
                  </div>
                </TitleStyleWrapper>
              </ScrollAnimate>

              <ScrollAnimate delay={220}>
                <div className="virtually-content">
                  <h2>Optimize Your Hiring Process</h2>
                  <p className="xl-mb-20">
                    Track applications, monitor hiring KPIs, and gain insights
                    into candidate pipelines — all in one dashboard. Make
                    informed decisions faster and reduce time-to-hire.
                  </p>
                  <ul className="list">
                    <li className="wt-700">
                      <div className="list-item">
                        <p>Real-time recruitment dashboards</p>
                      </div>
                    </li>
                    <li className="wt-700">
                      <div className="list-item">
                        <p>Track time-to-hire & source performance</p>
                      </div>
                    </li>
                    <li className="wt-700">
                      <div className="list-item">
                        <p>Data-driven candidate insights</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </MeetVirtuallyStyleWrapper>
  );
};

export default MeetVirtually;
