import StickyBox from "react-sticky-box";
import BusinessToolsStyleWrapper from "./BusinessTools.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import businessToolImgBg from "../../../assets/images/customer-service/business-tool-img-bg.png";
import businessToolImg1 from "../../../assets/images/customer-service/business-tool-img.png"; // suggest: attendance-dashboard.png
import businessToolImg2 from "../../../assets/images/customer-service/business-tool-img2.png"; // suggest: shift-scheduling.png
import businessToolImg3 from "../../../assets/images/customer-service/business-tool-img3.png";
import AttendanceImg from "../../../assets/images/business/attedance.svg"; // suggest: payroll-sync.png
import ScrollAnimate from "../../../Components/ScrollAnimate";

const BusinessTools = () => {
  return (
    <BusinessToolsStyleWrapper className="business-tools-section">
      <div className="container">
        <div className="business-tools-row main-content row">
          <ScrollAnimate delay={200}>
            <img
              src={AttendanceImg}
              alt="Attendance module preview background"
              className="business-tools-img-bg"
              style={{ margin: "100px 0 20px 0" }} // top & bottom margin
            />
          </ScrollAnimate>
          <StickyBox offsetTop={20} offsetBottom={20}>
            <div className="sidebar">
              <div className="list-group sidebar__inner" id="list-example">
                <ScrollAnimate delay={200}>
                  <div className="business-tools-img-list">
                    <img
                      src={businessToolImgBg}
                      alt="Attendance module preview background"
                      className="business-tools-img-bg"
                    />
                    <a
                      href="#section1"
                      className="business-tools-img list-group-item list-group-item-action"
                      aria-label="Go to Real-time Attendance"
                    >
                      <img
                        src={businessToolImg1}
                        alt="Real-time attendance dashboard"
                      />
                    </a>
                    <a
                      href="#section2"
                      className="business-tools-img list-group-item list-group-item-action"
                      aria-label="Go to Shift & Scheduling"
                    >
                      <img
                        src={businessToolImg2}
                        alt="Shift planning and scheduling view"
                      />
                    </a>
                    <a
                      href="#section3"
                      className="business-tools-img list-group-item list-group-item-action"
                      aria-label="Go to Payroll & Compliance"
                    >
                      <img
                        src={businessToolImg3}
                        alt="Payroll and compliance integration"
                      />
                    </a>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </StickyBox>

          <div className="business-tools-content-scrolspy-section">
            <div
              className="business-tools-content-scrolspy scrollspy-example"
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-offset={0}
              tabIndex={0}
            >
              {/* SECTION 1 */}
              <div className="business-tools-content" id="section1">
                <ScrollAnimate delay={200}>
                  <SectionTitle
                    title="Essential Attendance Features"
                    subtitle="Business Tools"
                    titleMaxW="600px"
                    parentClass="section-title-left"
                  />
                </ScrollAnimate>

                <div className="pt-0 w-full">
                  <h4>Real-time Attendance & Insights</h4>
                  <p>
                    Track check-ins/outs across locations, see who’s late/absent
                    in seconds, and audit logs without spreadsheets. Biometric,
                    web, and mobile punches are unified in one dashboard.
                  </p>
                  <ul className="list-unstyled">
                    <li className="wt-700">
                      <span className="iconify" data-icon="bi:check-lg" />
                      Live status: on-time, late, overtime, and absences
                    </li>
                    <li className="wt-700">
                      <span className="iconify" data-icon="bi:check-lg" />
                      Geo-fenced mobile check-ins with IP/device controls
                    </li>
                    <li className="wt-700">
                      <span className="iconify" data-icon="bi:check-lg" />
                      Biometric & kiosk support with auto-sync
                    </li>
                  </ul>
                </div>
              </div>

              {/* SECTION 2 */}
              <div className="business-tools-content" id="section2">
                <div className="business-tools-text">
                  <h4>Shifts, Scheduling & Leave Sync</h4>
                  <p>
                    Build rotating or fixed shifts, set grace periods, and
                    auto-apply policies. Leave balances sync with attendance so
                    timesheets are always accurate.
                  </p>
                  <div className="business-tools-btns">
                    <button className="wt-700">
                      <span className="iconify" data-icon="bi:check-lg" /> Smart
                      shift templates
                    </button>
                    <button className="wt-700">
                      <span className="iconify" data-icon="bi:check-lg" /> Auto
                      overtime rules
                    </button>
                    <button className="wt-700">
                      <span className="iconify" data-icon="bi:check-lg" /> Leave
                      & holiday calendars
                    </button>
                  </div>
                </div>
              </div>

              {/* SECTION 3 */}
              <div className="business-tools-content" id="section3">
                <div className="business-tools-text">
                  <h4>Payroll & Compliance Ready</h4>
                  <p>
                    Export clean, policy-ready timesheets to payroll with a
                    click. Reduce disputes and ensure compliance with audit
                    trails, approvals, and role-based access.
                  </p>
                  <ul>
                    <li className="w-100 wt-700">
                      <span className="iconify" data-icon="bi:check-lg" />
                      One-click timesheet export (CSV/XLSX/API)
                    </li>
                    <li className="w-100 wt-700">
                      <span className="iconify" data-icon="bi:check-lg" />
                      Multi-level approvals & immutable audit logs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BusinessToolsStyleWrapper>
  );
};

export default BusinessTools;
