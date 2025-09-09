import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import FinanceBenefitsStyle from "./FinanceBenefits.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CustomPieProgress from "./../../../Components/CustomPieProgress";

import ShapeImg from "../../../assets/images/shape/item-shape.svg";
import benefitsImg2 from "../../../assets/images/finance-index/benefits-img2.png";
import benefitsChart1 from "../../../assets/images/finance-index/benefits-chart1.png";
import benefitsImg3 from "../../../assets/images/finance-index/benefits-img3.png";
import benefitsImg from "../../../assets/images/finance-index/benefits-img.png";
import benefitsChart3 from "../../../assets/images/finance-index/benefits-chart3.png";
import benefitsImg4 from "../../../assets/images/finance-index/benefits-img4.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const FinanceBenefits = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    asNavFor: sliderNavRef.current,
    ref: sliderForRef,
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: false,
    focusOnSelect: true,
    ref: sliderNavRef,
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
    <FinanceBenefitsStyle className="benefits-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <SectionTitle
            title="Everything you need for expenses"
            subtitle="Benefits"
            titleMaxW="480px"
            parentClass="v6 text-center"
            titleMargin="auto"
          />
        </ScrollAnimate>

        <div className="benefits-content">
          <div className="row">
            {/* Left visual slider */}
            <div className="col-md-6">
              <ScrollAnimate delay={250}>
                <div className="benefits-left-section slider-benefits-for">
                  <Slider {...settingsFor} className="slider-benefits-for">
                    {/* Slide 1 — Receipt capture */}
                    <div className="benefits-img-bg">
                      <div className="benefits-img-tag benefits-img-tag1">
                        Receipts
                      </div>
                      <div className="benefits-img-tag benefits-img-tag2">
                        OCR Extract
                      </div>
                      <div className="benefits-img-tag benefits-img-tag3">
                        Categories
                      </div>

                      <div className="about-feature-img benefits-img">
                        <img src={benefitsImg2} alt="Receipt capture" />
                        <div className="overlay">
                          <div className="overlay-item success-rate">
                            <img
                              className="rotate-icon"
                              src={ShapeImg}
                              alt="icon"
                            />
                            <div className="success-rate-content">
                              <div className="progress pie_progress">
                                <CustomPieProgress
                                  Text="Policy match"
                                  TextColor="#444444"
                                  Percentage={92}
                                  ValueColor="#000000"
                                  PathColor="#00CEC9"
                                  TrailColor="rgba(0, 206, 201, 0.2)"
                                />
                                <p>Policy match</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2 — Approvals */}
                    <div className="benefits-img-bg benefits-img-bg2">
                      <div className="benefits-img-tag benefits-img-tag1">
                        Approvals
                      </div>
                      <div className="benefits-img-tag benefits-img-tag2">
                        Reminders
                      </div>
                      <div className="benefits-img-tag benefits-img-tag3">
                        Fallback
                      </div>

                      <div className="benefits-img-chart">
                        <img src={benefitsChart1} alt="Approvals flow" />
                      </div>
                      <div className="about-feature-img benefits-img">
                        <img src={benefitsImg3} alt="Managers approve" />
                      </div>
                    </div>

                    {/* Slide 3 — Mileage & per-diem */}
                    <div className="benefits-img-bg benefits-img-bg3">
                      <div className="benefits-img-tag benefits-img-tag1">
                        Mileage
                      </div>
                      <div className="benefits-img-tag benefits-img-tag2">
                        Per-diem
                      </div>
                      <div className="benefits-img-tag benefits-img-tag3">
                        Limits
                      </div>

                      <div className="about-feature-img benefits-img">
                        <img src={benefitsImg} alt="Mileage and per-diem" />
                      </div>
                    </div>

                    {/* Slide 4 — Payroll & reporting */}
                    <div className="benefits-img-bg benefits-img-bg4">
                      <div className="benefits-img-tag benefits-img-tag1">
                        Payroll Sync
                      </div>
                      <div className="benefits-img-tag benefits-img-tag2">
                        Exports
                      </div>
                      <div className="benefits-img-tag benefits-img-tag3">
                        Audit Trail
                      </div>

                      <div className="benefits-img-chart">
                        <img src={benefitsChart3} alt="Reporting" />
                      </div>
                      <div className="about-feature-img benefits-img">
                        <img src={benefitsImg4} alt="Reports & audit" />
                      </div>
                    </div>
                  </Slider>
                </div>
              </ScrollAnimate>
            </div>

            {/* Right text slider */}
            <div className="col-md-6">
              <ScrollAnimate delay={300}>
                <div className="benefits-faq">
                  <Slider {...settingsNav} className="slider-benefits-nav">
                    <div className="benefits-slider-nav">
                      <button className="benefits-nav-btn">
                        Snap & Submit Receipts
                      </button>
                      <div className="benefits-nav-content">
                        <p>
                          Employees capture or upload receipts on mobile or web.
                          Auto-extraction fills in amounts, dates, and merchants
                          to speed up claims and reduce errors.
                        </p>
                      </div>
                    </div>

                    <div className="benefits-slider-nav">
                      <button className="benefits-nav-btn">
                        Multi-level Approvals
                      </button>
                      <div className="benefits-nav-content">
                        <p>
                          Route expenses to managers and finance with reminders
                          and fallback approvers. Keep everything moving and
                          fully traceable.
                        </p>
                      </div>
                    </div>

                    <div className="benefits-slider-nav">
                      <button className="benefits-nav-btn">
                        Policy & Limits Enforcement
                      </button>
                      <div className="benefits-nav-content">
                        <p>
                          Enforce categories, per-diem, and mileage limits
                          automatically. Flag out-of-policy claims before they
                          hit approvals.
                        </p>
                      </div>
                    </div>

                    <div className="benefits-slider-nav">
                      <button className="benefits-nav-btn">
                        Payroll & Reporting
                      </button>
                      <div className="benefits-nav-content">
                        <p>
                          Approved reimbursements flow straight into payroll and
                          export cleanly to CSV/PDF/Excel. Full audit trail for
                          finance and compliance.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </FinanceBenefitsStyle>
  );
};

export default FinanceBenefits;
