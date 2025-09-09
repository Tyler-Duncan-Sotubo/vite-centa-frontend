import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import BusinessChooseStyle from "./BusinessChoose.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import whyChoose1 from "../../../assets/images/business/why-choose1.png";
import whyChoose2 from "../../../assets/images/business/why-choose2.png";
import whyChoose3 from "../../../assets/images/business/why-choose3.png";
import whyChoose4 from "../../../assets/images/business/why-choose4.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const BusinessChoose = () => {
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
    ref: sliderForRef,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: false,
    focusOnSelect: true,
    ref: sliderNavRef,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  useEffect(() => {
    setSettingsFor((prev) => ({
      ...prev,
      asNavFor: sliderNavRef.current,
    }));
    setSettingsNav((prev) => ({
      ...prev,
      asNavFor: sliderForRef.current,
    }));
  }, []);

  return (
    <BusinessChooseStyle className="why-choose-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
              <SectionTitle
                title="Payroll that’s fast, accurate, and compliant"
                subtitle="What you get"
                alignment="center"
                parentClass="z-index-3"
              />
            </ScrollAnimate>
          </div>
        </div>
      </div>
      <div className="why-choose-parent">
        <div className="overlay-left" />
        <div className="overlay-right" />
        <ScrollAnimate delay={200}>
          <div className="why-choose-container container">
            <div className="container">
              <div className="why-choose-tab">
                <Slider
                  {...settingsNav}
                  className="tab-buttons why-chose-slider-nav"
                >
                  <button className="tab-btn">
                    <span>01.</span> <span className="text">Automated</span>
                    <span className="text2">Calculations</span>
                  </button>
                  <button className="tab-btn">
                    <span>02.</span> <span className="text">Compliance</span>
                    <span className="text2">& Reporting</span>
                  </button>
                  <button className="tab-btn">
                    <span>03.</span> <span className="text">Employee</span>
                    <span className="text2">Self-Service</span>
                  </button>
                  <button className="tab-btn">
                    <span>04.</span> <span className="text">Approvals</span>
                    <span className="text2">& Payouts</span>
                  </button>
                </Slider>
                <progress max={100} value={0} />
              </div>
            </div>

            <Slider
              {...settingsFor}
              className="convert-visitors-slider-for why-chose-slider"
            >
              {/* 01 — Automated Calculations */}
              <div className="section">
                <div className="tab-body">
                  <div className="tab-body-img">
                    <img src={whyChoose1} alt="Automated calculations" />
                  </div>
                  <div className="tab-body-text">
                    <h2>Automate every payroll run</h2>
                    <p>
                      Process salaries without spreadsheets. CentaHR calculates
                      allowances, deductions, advances, reimbursements, and
                      proration in one go—reducing errors and saving hours.
                    </p>
                    <ul className="list">
                      <li>
                        <div className="list-item">
                          <span className="iconify" data-icon="bi:check-lg" />
                          <p>Configurable pay groups & pay frequencies</p>
                        </div>
                      </li>
                      <li>
                        <div className="list-item">
                          <span className="iconify" data-icon="bi:check-lg" />
                          <p>Auto-proration for partial months & special pay</p>
                        </div>
                      </li>
                      <li>
                        <div className="list-item">
                          <span className="iconify" data-icon="bi:check-lg" />
                          <p>One-click calculations with audit trail</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 02 — Compliance & Reporting */}
              <div className="section">
                <div className="tab-body">
                  <div className="tab-body-img">
                    <img src={whyChoose2} alt="Compliance and reporting" />
                  </div>
                  <div className="tab-body-text">
                    <h2>Built-in compliance, zero stress</h2>
                    <p>
                      Generate statutory files and reports instantly. Stay in
                      step with PAYE, pensions, and local requirements—no manual
                      prep needed.
                    </p>
                    <ul className="list">
                      <li>
                        <div className="list-item">
                          <span className="iconify" data-icon="bi:check-lg" />
                          <p>PAYE & pension reports ready to submit</p>
                        </div>
                      </li>
                      <li>
                        <div className="list-item">
                          <span className="iconify" data-icon="bi:check-lg" />
                          <p>Bank upload files generated automatically</p>
                        </div>
                      </li>
                      <li>
                        <div className="list-item">
                          <span className="iconify" data-icon="bi:check-lg" />
                          <p>Export to CSV, PDF, or Excel</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 03 — Employee Self-Service */}
              <div className="section">
                <div className="tab-body">
                  <div className="tab-body-img">
                    <img src={whyChoose3} alt="Employee self-service" />
                  </div>
                  <div className="tab-body-text">
                    <h2>Payslips your team can access anytime</h2>
                    <p>
                      Employees view payslips, tax docs, and payment history in
                      their portal—cutting back-and-forth and HR admin.
                    </p>
                    <ul className="list">
                      <li>
                        <div className="list-item">
                          <span className="iconify" data-icon="bi:check-lg" />
                          <p>Instant digital payslips</p>
                        </div>
                      </li>
                      <li>
                        <div className="list-item">
                          <span className="iconify" data-icon="bi:check-lg" />
                          <p>Role-based visibility & permissions</p>
                        </div>
                      </li>
                      <li>
                        <div className="list-item">
                          <span className="iconify" data-icon="bi:check-lg" />
                          <p>Secure access on web and mobile</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 04 — Approvals & Payouts */}
              <div className="section">
                <div className="tab-body">
                  <div className="tab-body-img">
                    <img src={whyChoose4} alt="Approvals and payouts" />
                  </div>
                  <div className="tab-body-text">
                    <h2>Smooth approvals, faster payouts</h2>
                    <p>
                      Keep payroll transparent with multi-level approvals, then
                      pay on time with generated bank files or integrated wallet
                      options.
                    </p>
                    <ul className="list">
                      <li>
                        <div className="list-item">
                          <span className="iconify" data-icon="bi:check-lg" />
                          <p>Custom approval workflows</p>
                        </div>
                      </li>
                      <li>
                        <div className="list-item">
                          <span className="iconify" data-icon="bi:check-lg" />
                          <p>Real-time status & notifications</p>
                        </div>
                      </li>
                      <li>
                        <div className="list-item">
                          <span className="iconify" data-icon="bi:check-lg" />
                          <p>Optional wallet integration for payouts</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </ScrollAnimate>
      </div>
    </BusinessChooseStyle>
  );
};

export default BusinessChoose;
