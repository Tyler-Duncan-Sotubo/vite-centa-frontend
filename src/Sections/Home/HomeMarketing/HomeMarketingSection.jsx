import { useEffect, useRef } from "react";
import HomeMarketingStyleWrapper from "./HomeMarketing.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import CustomPieProgress from "../../../Components/CustomPieProgress";

import ChartImage from "../../../assets/images/shape/chart-1.svg";
import EmojiIconsImage from "../../../assets/images/shape/emoji.svg";
import Star1Image from "../../../assets/images/shape/star1.svg";
import Star2Image from "../../../assets/images/shape/star2.svg";
import Star3Image from "../../../assets/images/shape/star3.svg";
import M1Image from "../../../assets/images/main-demo/m1.png";
import M2Image from "../../../assets/images/main-demo/m2.png";
import Star4Image from "../../../assets/images/shape/star-4.svg";
import ItemShapeImage from "../../../assets/images/shape/item-shape.svg";
import WaveShapeImage from "../../../assets/images/shape/wave-shape.svg";
import { FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const HomeOneMarketingSection = () => {
  // counter up
  const sectionRef = useRef(null);

  useEffect(() => {
    let isAnimated = 0;
    function counterUp() {
      if (isAnimated == 0) {
        const counterItem = document.querySelectorAll(".counter");
        counterItem.forEach((item) => {
          var counterText = item.innerText;
          item.innerText = "0";
          const updateCounter = () => {
            let dataTarget = +item.getAttribute("datatarget");
            if (dataTarget > 999) {
              dataTarget = dataTarget / 1000;
            }
            counterText = +item.innerText;
            let increment = dataTarget / 1000;
            if (counterText < dataTarget) {
              item.innerText = `${Math.ceil(counterText + increment)}`;
              setTimeout(updateCounter, 1);
            }
          };
          updateCounter();
        });
      }
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const y = window.scrollY;
      const x = sectionRef.current.offsetTop - 400;
      if (y > x && y < x + window.innerHeight) {
        counterUp();
        isAnimated++;
      } else {
        isAnimated = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HomeMarketingStyleWrapper>
      {/* marketing section start */}
      <div className="marketing-section">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <ScrollAnimate delay={200}>
                <div className="marketing-img">
                  <div className="overlay">
                    <div className="overlay-item chart">
                      <img src={ChartImage} alt="chart-img" />
                    </div>
                    <div className="overlay-item emoji-icons">
                      <img src={EmojiIconsImage} alt="emoji-icons" />
                    </div>
                    <div className="overlay-item star-1">
                      <img src={Star1Image} alt="star" />
                    </div>
                    <div className="overlay-item star-2">
                      <img src={Star2Image} alt="star" />
                    </div>
                    <div className="overlay-item star-3">
                      <img src={Star3Image} alt="star" />
                    </div>
                  </div>
                  <img src={M1Image} alt="marketing-img" />
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="marketing-content">
                <div className="marketing-content-title">
                  <TitleStyleWrapper>
                    <ScrollAnimate delay={250}>
                      <div className="section-title">
                        <span className="sub-title">HR Simplified</span>
                        <h2 className="title">
                          Powerful alone, <br />
                          unbeatable{" "}
                          <span className="marketing-badge">together</span>
                        </h2>
                      </div>
                    </ScrollAnimate>
                  </TitleStyleWrapper>
                </div>
                <div className="marketing-content-body">
                  <ScrollAnimate delay={300}>
                    <p>
                      CentaHR streamlines every stage of the employee lifecycle
                      — from recruitment and onboarding to payroll, leave, and
                      performance. Automate manual HR tasks, ensure compliance,
                      and empower your teams with self-service access.
                    </p>
                  </ScrollAnimate>
                  <ScrollAnimate delay={300}>
                    <ul className="list">
                      <li>
                        <div className="list-item">
                          <FaCheck />
                          <p className="w-700">
                            Centralized employee records & documents
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="list-item">
                          <FaCheck />
                          <p className="w-700">
                            Automated payroll & compliance ready
                          </p>
                        </div>
                      </li>
                    </ul>
                  </ScrollAnimate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="marketing-section marketing-section2 md-pt-60"
        ref={sectionRef}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
              <div className="marketing-content">
                <ScrollAnimate delay={200}>
                  <SectionTitle
                    subtitle="Workforce Management"
                    title="Manage your people, increase productivity"
                    parentClass="md-mb-0"
                  />
                </ScrollAnimate>

                <div className="marketing-content-body">
                  <ScrollAnimate delay={250}>
                    <div className="mb-30">
                      <p>
                        With CentaHR, HR teams can manage workforce operations
                        seamlessly. Track attendance, leave, performance, and
                        approvals — all in one platform. Gain insights with
                        real-time reports to support smarter decisions and
                        employee satisfaction.
                      </p>
                    </div>
                  </ScrollAnimate>
                  <ScrollAnimate delay={300}>
                    <a href="#" className="text-link">
                      <span>Explore HR Solutions</span>
                      <GoArrowRight />
                    </a>
                  </ScrollAnimate>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
              <div className="marketing-img v2">
                <img src={M2Image} alt="marketing-img" />
                <div className="overlay">
                  <div className="overlay-item reduction-time">
                    <div className="reduction-time-top">
                      <h2>
                        <span className="counter" datatarget="40">
                          40
                        </span>
                        %
                      </h2>
                      <img src={Star4Image} alt="star" />
                    </div>
                    <p>Onboarding reduction</p>
                  </div>
                  <div className="overlay-item success-rate">
                    <img
                      className="rotate-icon"
                      src={ItemShapeImage}
                      alt="icon"
                    />
                    <div className="success-rate-content">
                      <div className="progress pie_progress">
                        <CustomPieProgress
                          Text="Success rate"
                          TextColor="#444444"
                          Percentage={99}
                          ValueColor="#000000"
                          PathColor="#00CEC9"
                          TrailColor="rgba(0, 206, 201, 0.2)"
                        />
                        <p>Payroll accuracy</p>
                      </div>
                    </div>
                  </div>
                  <div className="overlay-item wave-shape">
                    <img src={WaveShapeImage} alt="shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* marketing section end */}
    </HomeMarketingStyleWrapper>
  );
};

export default HomeOneMarketingSection;
