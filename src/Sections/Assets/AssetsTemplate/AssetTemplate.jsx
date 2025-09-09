import { useEffect, useRef, useState } from "react";
import TitleStyleWrapper from "./../../../Components/Title/Title.style";
import templateImg1 from "../../../assets/images/sass1/template-img1.png";
import templateImg2 from "../../../assets/images/sass1/template-img2.png";
import templateImg3 from "../../../assets/images/sass1/template-img3.png";
import monitorIcon from "../../../assets/images/icons/monitor_icon.svg";
import messageIcon from "../../../assets/images/icons/message_icon.svg";
import documentIcon from "../../../assets/images/icons/document_icon.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import AssetTemplateStyle from "./AssetTemplate.style";

function AssetTemplate() {
  const [activeNumber, setActiveNumber] = useState(0);
  const powerfullTemplateContentRef = useRef(null);
  const timelineProgressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => updateProgress();
    const handleResize = () => updateProgress();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateProgress = () => {
    const timelineProgress = timelineProgressRef.current;
    const powerfullTemplateContent = powerfullTemplateContentRef.current;
    const sectionTop = powerfullTemplateContent.getBoundingClientRect().top;
    const sectionHeight = powerfullTemplateContent.clientHeight;
    const windowHeight = window.innerHeight;

    const progress = Math.max(
      0,
      Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight))
    );

    timelineProgress.style.height = `${progress * 100}%`;

    if (progress >= 0 && progress < 0.33) {
      setActiveNumber(1);
    } else if (progress >= 0.33 && progress < 0.66) {
      setActiveNumber(2);
    } else if (progress >= 0.66) {
      setActiveNumber(3);
    }
  };

  return (
    <AssetTemplateStyle className="powerfull-template-section">
      <div className="container">
        <TitleStyleWrapper>
          <div className="section-title md-mb-0 text-center">
            <ScrollAnimate delay={200}>
              <h2>
                End-to-end Asset Management <br />
                in one place
              </h2>
              <h6 className="mb-0">
                Track, maintain, and report—efficiently and accurately
              </h6>
            </ScrollAnimate>
          </div>
        </TitleStyleWrapper>

        {/* Content */}
        <div
          className="powerfull-template-content"
          ref={powerfullTemplateContentRef}
        >
          <div className="timeline-innerline">
            <div className="timeline-progress" ref={timelineProgressRef}></div>
          </div>

          {/* Row 1 — Centralize & Assign */}
          <div className="powerfull-template-row">
            <div
              className={`powerfull-template-number ${
                activeNumber >= 1 ? "active" : ""
              }`}
            >
              1
            </div>
            <div className="row">
              <div className="col-md-6">
                <ScrollAnimate delay={200}>
                  <div className="powerfull-template-img powerfull-template-img-left">
                    <img src={templateImg1} alt="Centralized asset register" />
                  </div>
                </ScrollAnimate>
              </div>
              <div className="col-md-6">
                <ScrollAnimate delay={300}>
                  <div className="powerfull-template-text powerfull-template-text-right">
                    <h4>Centralize assets & assign with clarity</h4>
                    <p>
                      Keep a single source of truth for laptops, equipment, and
                      vehicles. Assign assets to employees, teams, or locations
                      with complete visibility and audit history.
                    </p>
                    <ul>
                      <li>
                        <span className="iconify" data-icon="bi:check-lg" />
                        Central asset register with ownership tracking
                      </li>
                      <li>
                        <span className="iconify" data-icon="bi:check-lg" />
                        Location tags and status (in use, repair, retired)
                      </li>
                      <li>
                        <span className="iconify" data-icon="bi:check-lg" />
                        ESS requests for new assets or swaps
                      </li>
                    </ul>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>

          {/* Row 2 — AI Depreciation & Maintenance */}
          <div className="powerfull-template-row">
            <div
              className={`powerfull-template-number ${
                activeNumber >= 2 ? "active" : ""
              }`}
            >
              2
            </div>
            <div className="row flex-row-reverse">
              <div className="col-md-6">
                <ScrollAnimate delay={300}>
                  <div className="powerfull-template-img powerfull-template-img-right">
                    <img src={templateImg2} alt="AI-driven depreciation" />
                  </div>
                </ScrollAnimate>
              </div>
              <div className="col-md-6">
                <ScrollAnimate delay={200}>
                  <div className="powerfull-template-text powerfull-template-text-left">
                    <h4>AI-driven depreciation & lifecycle insights</h4>
                    <h6>
                      Automatically calculate depreciation and book value by
                      asset type and usage—no spreadsheets.
                    </h6>
                    <p>
                      Proactive maintenance and smarter replacement timing help
                      reduce downtime and total cost of ownership.
                    </p>
                    <ol>
                      <li>
                        <span>
                          <img src={monitorIcon} alt="calculator icon" />
                        </span>
                        AI-powered depreciation calculator
                      </li>
                      <li>
                        <span>
                          <img src={messageIcon} alt="config icon" />
                        </span>
                        Custom lifespan & maintenance rules
                      </li>
                      <li>
                        <span>
                          <img src={documentIcon} alt="visibility icon" />
                        </span>
                        Real-time book value visibility
                      </li>
                    </ol>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>

          {/* Row 3 — Reporting & Compliance */}
          <div className="powerfull-template-row">
            <div
              className={`powerfull-template-number ${
                activeNumber >= 3 ? "active" : ""
              }`}
            >
              3
            </div>
            <div className="row">
              <div className="col-md-6">
                <ScrollAnimate delay={200}>
                  <div className="powerfull-template-img powerfull-template-img-left pb-0">
                    <img src={templateImg3} alt="Asset reporting & audit" />
                  </div>
                </ScrollAnimate>
              </div>
              <div className="col-md-6">
                <ScrollAnimate delay={300}>
                  <div className="powerfull-template-text powerfull-template-text-right">
                    <h4>Insightful reporting & full audit trail</h4>
                    <p>
                      Export lifecycle, usage, issues, and depreciation trends
                      in seconds. Give finance and compliance teams the detail
                      they need, when they need it.
                    </p>
                    <ul>
                      <li>
                        <span className="iconify" data-icon="bi:check-lg" />
                        Lifecycle, depreciation, and usage reports
                      </li>
                      <li>
                        <span className="iconify" data-icon="bi:check-lg" />
                        Export to CSV, PDF, or Excel
                      </li>
                      <li>
                        <span className="iconify" data-icon="bi:check-lg" />
                        End-to-end asset audit trail
                      </li>
                    </ul>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AssetTemplateStyle>
  );
}

export default AssetTemplate;
