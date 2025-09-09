import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import UsefulFeatureStyleWrapper from "./UsefulFeature.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";

import usefulFeatureIcon from "../../../assets/images/icons/useful-feature-icon.svg";
import monitorIcon from "../../../assets/images/team-collaboration/monitor.svg";
import messageIcon from "../../../assets/images/team-collaboration/message.svg";
import documentIcon from "../../../assets/images/team-collaboration/document.svg";
import callApp1Image from "../../../assets/images/team-collaboration/call_app_1.png";
import callApp2Image from "../../../assets/images/team-collaboration/call_app_2.png";
import callApp3Image from "../../../assets/images/team-collaboration/call_app_3.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const UsefulFeature = () => {
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

  return (
    <UsefulFeatureStyleWrapper className="useful-feature-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="useful-feature-header">
              <ScrollAnimate delay={200}>
                <TitleStyleWrapper>
                  <div className="section-title mb-0">
                    <span className="sub-title">Recruitment</span>
                    <h2 className="title mb-0">
                      Most useful{" "}
                      <span className="marketing-badge">features </span>
                      <br />
                      for smarter hiring
                    </h2>
                  </div>
                </TitleStyleWrapper>
              </ScrollAnimate>
              <div className="useful-feature-header-right">
                <ScrollAnimate delay={220}>
                  <img
                    src={usefulFeatureIcon}
                    alt="recruitment features icon"
                  />
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
        <ScrollAnimate delay={200}>
          <div className="row">
            <div className="col-md-12">
              {/* Feature Nav */}
              <Slider
                {...settingsNav}
                ref={sliderNavRef}
                className="useful-feature-slider-nav slider-nav"
              >
                <div className="slider-item">
                  <p>Job Posting</p>
                </div>
                <div className="slider-item">
                  <p>Applicant</p>
                </div>
                <div className="slider-item">
                  <p>Interview</p>
                </div>
                <div className="slider-item">
                  <p>Onboarding Automation</p>
                </div>
              </Slider>

              {/* Feature Content */}
              <Slider
                {...settingsFor}
                ref={sliderForRef}
                className="useful-feature-slider-for slider-for"
              >
                {/* Job Posting */}
                <div className="slider-item">
                  <div className="slider-item-left">
                    <div className="slider-item-text">
                      <h2>Job Posting</h2>
                      <p>
                        Instantly publish job openings to multiple platforms and
                        career pages at once. Reach more candidates while saving
                        time.
                      </p>
                    </div>
                    <ul className="list">
                      <li className="wt-700 ">
                        <div className="list-item">
                          <img src={monitorIcon} alt="multi-platform posting" />
                          <p>Multi-platform publishing</p>
                        </div>
                      </li>
                      <li className="wt-700">
                        <div className="list-item">
                          <img src={messageIcon} alt="custom job templates" />
                          <p>Custom job templates</p>
                        </div>
                      </li>
                      <li className="wt-700">
                        <div className="list-item">
                          <img src={documentIcon} alt="brand careers page" />
                          <p>Branded career pages</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="slider-item-img">
                    <img src={callApp1Image} alt="job posting dashboard" />
                  </div>
                </div>

                {/* Applicant Tracking */}
                <div className="slider-item">
                  <div className="slider-item-left">
                    <div className="slider-item-text">
                      <h2>Applicant Tracking</h2>
                      <p>
                        Manage candidates seamlessly with a full Applicant
                        Tracking System (ATS). Track, filter, and review
                        applications in one place.
                      </p>
                      <ol>
                        <li className="wt-700">
                          <span className="iconify" data-icon="bi:check-lg" />{" "}
                          Smart resume parsing & filtering
                        </li>
                        <li className="wt-700">
                          <span className="iconify" data-icon="bi:check-lg" />{" "}
                          Custom hiring pipelines
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="slider-item-img">
                    <img src={callApp2Image} alt="applicant tracking system" />
                  </div>
                </div>

                {/* Interview Scheduling */}
                <div className="slider-item">
                  <div className="slider-item-left">
                    <div className="slider-item-text">
                      <h2>Interview Scheduling</h2>
                      <p>
                        Coordinate interviews effortlessly with built-in
                        calendar sync and candidate reminders to reduce
                        no-shows.
                      </p>
                      <p>
                        Provide hiring managers and candidates with a smooth,
                        professional experience every step of the way.
                      </p>
                    </div>
                  </div>
                  <div className="slider-item-img">
                    <img
                      src={callApp3Image}
                      alt="interview scheduling interface"
                    />
                  </div>
                </div>

                {/* Onboarding Automation */}
                <div className="slider-item">
                  <div className="slider-item-left">
                    <div className="slider-item-text">
                      <h2>Onboarding Automation</h2>
                      <p>
                        Welcome new hires with automated workflows for
                        paperwork, training, and compliance. Ensure a smooth
                        first-day experience.
                      </p>
                      <ul className="list">
                        <li className="wt-700">
                          <span className="iconify" data-icon="bi:check-lg" />{" "}
                          Digital document collection
                        </li>
                        <li className="wt-700">
                          <span className="iconify" data-icon="bi:check-lg" />{" "}
                          Training & orientation checklists
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="slider-item-img">
                    <img
                      src={callApp2Image}
                      alt="onboarding automation dashboard"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </UsefulFeatureStyleWrapper>
  );
};

export default UsefulFeature;
