import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import HappyCustomersStyle from "./HappyCustomers.style";

import ballImage1 from "../../../assets/images/sass1/ball1.svg";
import ballImage2 from "../../../assets/images/sass1/ball2.svg";
import ballImage3 from "../../../assets/images/sass1/ball3.svg";
import bgRectangleShapeImage from "../../../assets/images/bg/bg-ractangle-shape.png";
import crowdLogoImage from "../../../assets/images/sass1/crowd-logo.svg";
import trustpilotLogoImage from "../../../assets/images/sass1/trustpilot-logo.svg";
import getAppLogoImage from "../../../assets/images/sass1/get-app-logo.svg";
import emojiImage from "../../../assets/images/sass1/emoji.svg";
import happyCustomers1Image from "../../../assets/images/avater/happy-customers1.png";
import happyCustomers2Image from "../../../assets/images/avater/happy-customers2.png";
import happyCustomers3Image from "../../../assets/images/avater/happy-customers3.png";
import happyCustomers4Image from "../../../assets/images/avater/happy-customers4.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const HappyCustomers = () => {
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

  useEffect(() => {
    const handleScroll = () => {
      var happyCustomersBgSection = document.querySelector(
        ".happy-customers-section"
      );
      var happyCustomersBgBall = document.querySelector(
        ".happy-customers-bg-ball1"
      );
      var y = window.scrollY;
      var x = happyCustomersBgSection.offsetTop;
      x = x - 800;

      let animationValue = 0;
      animationValue = (y - x) / 6;

      let animationStop = 50;

      if (animationValue < 0) {
        animationValue = 0;
      }

      if (animationValue > animationStop) {
        animationValue = animationStop;
      }

      if (y > x) {
        happyCustomersBgBall.style.setProperty(
          "transform",
          `translateX(-${animationValue}px)`
        );
      } else {
        happyCustomersBgBall.style.setProperty(
          "transform",
          `translateX(${animationValue}px)`
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HappyCustomersStyle className="happy-customers-section">
      <div className="happy-customers-bg">
        <div className="happy-customers-bg-inner">
          <span className="happy-customers-bg-ball happy-customers-bg-ball1">
            <img src={ballImage1} alt="img" />
          </span>
          <span className="happy-customers-bg-ball happy-customers-bg-ball2">
            <img src={ballImage2} alt="img" />
          </span>
          <span className="happy-customers-bg-ball happy-customers-bg-ball3">
            <img src={ballImage3} alt="img" />
          </span>
          <img
            src={bgRectangleShapeImage}
            alt="img"
            className="happy-customers-bg-img"
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <ScrollAnimate delay={200}>
            <div className="col-md-12">
              <div className="happy-customers-title">
                <h2>Happy customers</h2>
                <h5>Worldwide 30,000+ customers</h5>
              </div>
            </div>
          </ScrollAnimate>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <ScrollAnimate delay={250}>
              <div className="happy-customer-left">
                <ul className="happy-customer-rating xl-pl-0">
                  <li>
                    <span>
                      <img src={crowdLogoImage} alt="logo" />
                    </span>
                    4.6 / 5
                  </li>
                  <li>
                    <span>
                      <img src={trustpilotLogoImage} alt="logo" />
                    </span>
                    4.4 / 5
                  </li>
                  <li>
                    <span>
                      <img src={getAppLogoImage} alt="logo" />
                    </span>
                    4.2 / 5
                  </li>
                </ul>
                <Slider
                  {...settingsFor}
                  ref={sliderForRef}
                  className="happy-customer-slider-for"
                >
                  <div className="slider-item">
                    <p>
                      CentaHR has completely transformed how we manage payroll
                      and leave. It’s easy to use, and my team now gets payslips
                      on time without stress. 😍
                    </p>
                    <div className="customers-name">
                      <h5>Chioma Okafor</h5>
                      <h6>HR Manager, FinTech Solutions</h6>
                    </div>
                  </div>

                  <div className="slider-item">
                    <p>
                      Before CentaHR, handling employee onboarding was a
                      nightmare. Now, the process is smooth, automated, and
                      saves us countless hours every month. ❤️
                    </p>
                    <div className="customers-name">
                      <h5>Emeka Adewale</h5>
                      <h6>CEO – Adewale Group</h6>
                    </div>
                  </div>

                  <div className="slider-item">
                    <p>
                      The performance management module is a game-changer 👏👏.
                      I can easily track goals, get feedback, and see real
                      progress across all departments.
                    </p>
                    <div className="customers-name">
                      <h5>Aisha Bello</h5>
                      <h6>Head of People Operations</h6>
                    </div>
                  </div>

                  <div className="slider-item">
                    <p>
                      What I love most is the employee self-service. Staff can
                      request leave, download payslips, and update details
                      without calling HR. It’s so efficient! 🥰
                    </p>
                    <div className="customers-name">
                      <h5>Kunle Oladipo</h5>
                      <h6>CTO – TechNova Africa</h6>
                    </div>
                  </div>
                </Slider>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-5">
            <ScrollAnimate delay={300}>
              <div className="happy-customer-right">
                <div className="bg-img">
                  <img src={emojiImage} alt="emoji" />
                </div>
                <Slider
                  {...settingsNav}
                  ref={sliderNavRef}
                  className="happy-customer-slider-nav"
                >
                  <div className="slider-item">
                    <div className="slider-img">
                      <div className="circle-progress">
                        <div className="halfclip">
                          <div className="halfcircle clipped" />
                        </div>
                        <div className="halfcircle fixed" />
                      </div>
                      <img
                        src={happyCustomers1Image}
                        alt="img"
                        className="img1"
                      />
                    </div>
                  </div>

                  <div className="slider-item">
                    <div className="slider-img">
                      <div className="circle-progress">
                        <div className="halfclip">
                          <div className="halfcircle clipped" />
                        </div>
                        <div className="halfcircle fixed" />
                      </div>
                      <img
                        src={happyCustomers2Image}
                        alt="img"
                        className="img2"
                      />
                    </div>
                  </div>

                  <div className="slider-item">
                    <div className="slider-img">
                      <div className="circle-progress">
                        <div className="halfclip">
                          <div className="halfcircle clipped" />
                        </div>
                        <div className="halfcircle fixed" />
                      </div>
                      <img
                        src={happyCustomers3Image}
                        alt="img"
                        className="img3"
                      />
                    </div>
                  </div>

                  <div className="slider-item">
                    <div className="slider-img">
                      <div className="circle-progress">
                        <div className="halfclip">
                          <div className="halfcircle clipped" />
                        </div>
                        <div className="halfcircle fixed" />
                      </div>
                      <img
                        src={happyCustomers4Image}
                        alt="img"
                        className="img4"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </HappyCustomersStyle>
  );
};

export default HappyCustomers;
