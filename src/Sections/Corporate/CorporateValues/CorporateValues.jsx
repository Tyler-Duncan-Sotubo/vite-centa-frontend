import CorporateValuesStyle from "./CorporateValues.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import colorSwatchIcon from "../../../assets/images/corporate/color-swatch.svg";
import bookmarkIcon from "../../../assets/images/corporate/bookmark-2.svg";
import documentSketchIcon from "../../../assets/images/corporate/document-sketch.svg";
import codeIcon from "../../../assets/images/corporate/code.svg";
import rotateCircleImage from "../../../assets/images/corporate/our-value-rotate-circle.png";
import mainImage from "../../../assets/images/corporate/our-value-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CorporateValues = () => {
  return (
    <CorporateValuesStyle className="our-values-section">
      <div className="container">
        <div className="our-values-top">
          <ScrollAnimate delay={200}>
            <SectionTitle
              subtitle="Performance Management"
              title="Principles that guide our product"
              alignment="center"
            />
          </ScrollAnimate>
          <ScrollAnimate delay={250}>
            <p>
              We help teams grow with fair, transparent, and continuous
              performance practices—clear goals, timely feedback, structured
              reviews, and data you can trust to make better decisions.
            </p>
          </ScrollAnimate>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <ScrollAnimate delay={200}>
              <div className="our-value-text text-right">
                <div className="our-value-icon our-value-icon1">
                  <img src={colorSwatchIcon} alt="icon" />
                </div>
                <h5>Clarity & Alignment</h5>
                <p>
                  Set meaningful goals and connect them to company objectives so
                  everyone knows what success looks like.
                </p>
              </div>
            </ScrollAnimate>

            <div className="our-value-text text-right">
              <div className="our-value-icon our-value-icon2">
                <img src={bookmarkIcon} alt="icon" />
              </div>
              <ScrollAnimate delay={220}>
                <h5>Continuous Feedback</h5>
                <p>
                  Encourage 1:1 check-ins and real-time feedback—no more waiting
                  for annual reviews to address growth.
                </p>
              </ScrollAnimate>
            </div>
          </div>

          <div className="col-lg-6 col-md-4">
            <ScrollAnimate delay={250}>
              <div className="our-values-img-section">
                <div className="our-values-img-border">
                  <img
                    src={rotateCircleImage}
                    alt="loader"
                    className="loader-img"
                  />
                  <div className="our-values-img">
                    <img src={mainImage} alt="Performance values" />
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          <div className="col-lg-3 col-md-4">
            <ScrollAnimate delay={270}>
              <div className="our-value-text text-left">
                <div className="our-value-icon our-value-icon3">
                  <img src={documentSketchIcon} alt="icon" />
                </div>
                <h5>Fair & Transparent</h5>
                <p>
                  Use structured templates, competency frameworks, and 360°
                  input to reduce bias and improve consistency.
                </p>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={300}>
              <div className="our-value-text text-left">
                <div className="our-value-icon our-value-icon4">
                  <img src={codeIcon} alt="icon" />
                </div>
                <h5>No-Code Configuration</h5>
                <p>
                  Customize cycles, policies, and notifications from the UI—no
                  scripts required, just settings that fit your team.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </CorporateValuesStyle>
  );
};

export default CorporateValues;
