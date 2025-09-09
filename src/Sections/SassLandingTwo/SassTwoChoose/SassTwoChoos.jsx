import SassTwoChoosStyle from "./SassTwoChoos.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import centerBgImg from "../../../assets/images/sass2/center-bg.svg";
import choseUsImg from "../../../assets/images/sass2/chose-us-img.png";
import choseUsImg1 from "../../../assets/images/sass2/chose-us-img1.png";
import choseUsImg2 from "../../../assets/images/sass2/chose-us-img2.png";
import subtitleIcon from "../../../assets/images/icons/subtitle.svg";
import colorSwatchIcon from "../../../assets/images/icons/color-swatch.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const SassTwoChoos = () => {
  return (
    <SassTwoChoosStyle className="sass-choose-us-section">
      <img src={centerBgImg} alt="img" className="choose-us-bg" />
      <div className="container sass-choose-us-container">
        <div
          className="row main-content"
          data-spy="scroll"
          data-target="#myScrollspy"
          data-offset={20}
        >
          <div className="col-md-6 sidebar">
            <div className="sidebar__inner" id="myScrollspy">
              <ScrollAnimate delay={200}>
                <div className="sass-choose-us-img">
                  <img src={choseUsImg} alt="img" />
                </div>
              </ScrollAnimate>
              <ScrollAnimate delay={200}>
                <div className="chose-us-small-img mobile">
                  <img src={choseUsImg1} alt="img" className="chose-us-img1" />
                  <img src={choseUsImg2} alt="img" className="chose-us-img2" />
                </div>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-md-6">
            <div className="sass-choose-us-text">
              <ScrollAnimate delay={200}>
                <SectionTitle
                  subtitle="Why Choose CentaHR"
                  title="Simplify HR. Empower People. Drive Growth."
                  parentClass="sass"
                />
              </ScrollAnimate>

              <div className="sass-choose-us-content">
                <ScrollAnimate delay={225}>
                  <p>
                    CentaHR is a complete HR & Payroll platform designed to
                    manage the entire employee journey — from recruitment and
                    onboarding to performance, payroll, and beyond. We simplify
                    HR operations so you can focus on your people and growth.
                  </p>
                </ScrollAnimate>
                <ScrollAnimate delay={250}>
                  <ul>
                    <li>
                      End-to-end HRIS covering recruitment, payroll, leave, and
                      performance
                    </li>
                    <li>Employee self-service for quick and easy access</li>
                    <li>Seamless automation and compliance built-in</li>
                  </ul>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <ScrollAnimate delay={200}>
                <div className="chose-us-small-img desktop">
                  <img src={choseUsImg1} alt="img" className="chose-us-img1" />
                  <img src={choseUsImg2} alt="img" className="chose-us-img2" />
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-md-6">
              <div className="sass-choose-us-text">
                <div className="sass-choose-us-content">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-6">
                      <ScrollAnimate delay={200}>
                        <div className="sass-choose-us-bottom">
                          <span>
                            <img src={subtitleIcon} alt="icon" />
                          </span>
                          <h5 className="wt-700">
                            Intelligent <br />
                            Automation
                          </h5>
                          <p>
                            From AI-powered recruitment to automated payroll,
                            CentaHR reduces manual work and ensures accuracy
                            across HR processes.
                          </p>
                        </div>
                      </ScrollAnimate>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-6">
                      <ScrollAnimate delay={300}>
                        <div className="sass-choose-us-bottom">
                          <span>
                            <img src={colorSwatchIcon} alt="icon" />
                          </span>
                          <h5 className="wt-700">
                            All-in-One <br />
                            HR Platform
                          </h5>
                          <p>
                            A centralized solution for recruitment, payroll,
                            performance, benefits, and compliance — accessible
                            anytime, anywhere.
                          </p>
                        </div>
                      </ScrollAnimate>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SassTwoChoosStyle>
  );
};

export default SassTwoChoos;
