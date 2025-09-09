import HomeIntegrateStyleWrapper from "./HomeIntegrate.style";

import SlackImage from "../../../assets/images/brands/slack.svg";
import ZapierImage from "../../../assets/images/brands/zapier.svg";
import XeroImage from "../../../assets/images/brands/xero.svg";
import HubspotImage from "../../../assets/images/brands/hubspot.svg";
import Ellipse1Image from "../../../assets/images/main-demo/ellipse1.png";
import Ellipse2Image from "../../../assets/images/main-demo/ellipse2.png";
import Ellipse3Image from "../../../assets/images/main-demo/ellipse3.png";
import Ellipse4Image from "../../../assets/images/main-demo/ellipse4.png";
import ManImage from "../../../assets/images/main-demo/man.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const HomeIntegrate = () => {
  return (
    <HomeIntegrateStyleWrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ScrollAnimate delay={200}>
              <div className="integrate-card">
                <div className="integrate-card-header">
                  <ScrollAnimate delay={240}>
                    <h3>
                      Integrate with
                      <br />
                      the tools your HR loves
                    </h3>
                    <p>
                      CentaHR connects seamlessly with payroll, accounting,
                      communication, and productivity apps — so your HR data
                      always stays in sync.
                    </p>
                  </ScrollAnimate>
                </div>
                <ScrollAnimate delay={270}>
                  <div className="integrate-slider">
                    <div className="integrate-slider-container">
                      <div className="slider-item">
                        <img src={SlackImage} alt="slider-img" />
                      </div>
                      <div className="slider-item">
                        <img src={ZapierImage} alt="slider-img" />
                      </div>
                      <div className="slider-item">
                        <img src={XeroImage} alt="slider-img" />
                      </div>
                      <div className="slider-item">
                        <img src={HubspotImage} alt="slider-img" />
                      </div>
                      <div className="slider-item">
                        <img src={SlackImage} alt="slider-img" />
                      </div>
                      <div className="slider-item">
                        <img src={ZapierImage} alt="slider-img" />
                      </div>
                      <div className="slider-item">
                        <img src={XeroImage} alt="slider-img" />
                      </div>
                      <div className="slider-item">
                        <img src={HubspotImage} alt="slider-img" />
                      </div>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-6">
            <ScrollAnimate delay={250}>
              <div className="integrate-card v2">
                <div className="bg-shape">
                  <div className="shape-img img-1">
                    <img src={Ellipse1Image} alt="shape-img" />
                  </div>
                  <div className="shape-img img-2">
                    <img src={Ellipse2Image} alt="shape-img" />
                  </div>
                  <div className="shape-img img-3">
                    <img src={Ellipse3Image} alt="shape-img" />
                  </div>
                  <div className="shape-img img-4">
                    <img
                      className="rotate-icon"
                      src={Ellipse4Image}
                      alt="shape-img"
                    />
                  </div>
                  <div className="shape-img img-5">
                    <ScrollAnimate delay={280}>
                      <img src={ManImage} alt="shape-img" />
                    </ScrollAnimate>
                  </div>
                </div>
                <div className="integrate-card-header">
                  <ScrollAnimate delay={270}>
                    <h3>
                      Simple setup,
                      <br />
                      maximum usability
                    </h3>
                    <p>
                      No complex IT required — just plug in your favorite apps,
                      and CentaHR automates workflows across recruitment,
                      payroll, performance, and employee self-service.
                    </p>
                  </ScrollAnimate>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </HomeIntegrateStyleWrapper>
  );
};

export default HomeIntegrate;
