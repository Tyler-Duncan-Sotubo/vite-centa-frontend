import PricingPlanCardsStyle from "./PricingPlanCards.style";
import { pricingPlansData } from "../../../assets/data/PricingPlanData/PricingPlanData";

import rightArrow from "../../../assets/images/icons/pricing-arrow-right.svg";
import pricingPlanImg from "../../../assets/images/img/pricing-plan-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { NavLink } from "react-router-dom";

const PricingPlanCards = () => {
  return (
    <PricingPlanCardsStyle className="pricing-plan-section">
      <div className="container">
        {/* pricing plans */}
        <ScrollAnimate delay={200}>
          <div className="row">
            {pricingPlansData.map((plan, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 mb-5 ${plan.type.toLowerCase()}-card`}
              >
                <div
                  className={`pricing-plan-card ${plan.type.toLowerCase()}-card`}
                >
                  <div
                    className={`pricing-plan-card-header ${plan.type.toLowerCase()}`}
                  >
                    <h6>
                      {plan.type}
                      {plan.type === "Growth" && <span>Popular 💎</span>}
                    </h6>
                    <p>{plan.description}</p>
                    <h3>{plan.price}</h3>
                    <p>{plan.trial}</p>
                  </div>
                  <button
                    className={`pricing-plan-show-btn pricing-plan-show-btn${
                      index + 1
                    }`}
                  >
                    View plan features
                  </button>
                  <div className="best-pricing-card-body">
                    <button className={`best-pricing-btn ${plan.btnClass}`}>
                      {plan.btnText}
                      <span className="icon">
                        <img src={rightArrow} alt="icon" />
                      </span>
                    </button>
                    <ul className="list">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimate>

        {/* pricing plan card */}
        <ScrollAnimate delay={300}>
          <div className="row">
            <div className="col-lg-12 col-md-6 mb-5">
              <div className="pricing-plan-card enterprise-card">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="pricing-plan-card-content">
                      <div className="pricing-plan-card-header enterprise">
                        <h6>Enterprise ✨</h6>
                        <p>Custom plan for large organizations</p>
                        <h3>Custom pricing</h3>
                        <p>Tailored onboarding • Volume discounts</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <button className="pricing-plan-show-btn pricing-plan-show-btn4">
                      View plan features
                    </button>
                    <div className="pricing-plan-card-content">
                      <div className="best-pricing-card-body m-0">
                        <ul className="list m-0">
                          <li className="list-item">
                            Everything in <b>Growth</b> &amp; <b>Business</b>
                          </li>
                          <li className="list-item">
                            Custom integrations & APIs
                          </li>
                          <li className="list-item">
                            SSO & role-based access controls
                          </li>
                          <li className="list-item">
                            HR compliance & audit logs
                          </li>
                          <li className="list-item">
                            Dedicated account manager
                          </li>
                          <li className="list-item">
                            Custom SLA & priority support
                          </li>
                          <li className="list-item">
                            Advanced security & data residency
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="pricing-plan-card-content right">
                      <NavLink
                        to="https://calendly.com/centapayroll/book-a-demo"
                        target="_blank"
                      >
                        <button className="best-pricing-btn">
                          Let’s Talk
                          <span className="icon">
                            <img src={rightArrow} alt="icon" />
                          </span>
                        </button>
                      </NavLink>
                      <div className="pricing-plan-img">
                        <img
                          src={pricingPlanImg}
                          alt="Enterprise plan illustration"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </PricingPlanCardsStyle>
  );
};

export default PricingPlanCards;
