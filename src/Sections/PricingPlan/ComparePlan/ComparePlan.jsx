import { useEffect, useRef } from "react";
import { ComparePlanData } from "../../../assets/data/PricingPlanData/ComparePlanData";
import ComparePlanStyle from "./ComparePlan.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { NavLink } from "react-router-dom";

const ComparePlan = () => {
  const TableHeaderRef = useRef(null);
  const TableBodyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!TableHeaderRef.current || !TableBodyRef.current) return;

      const rect = TableBodyRef.current.getBoundingClientRect();
      const x = rect.top;
      const htx = TableHeaderRef.current.offsetHeight || 0;
      const ht = TableBodyRef.current.offsetHeight || 0;

      if (x <= htx && x + ht > htx) {
        TableHeaderRef.current.classList.add("sticky");
      } else {
        TableHeaderRef.current.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // run once on mount (in case user is mid-page)
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ComparePlanStyle>
      <ScrollAnimate delay={200}>
        <div className="container">
          <h3 className="compare-plans-title">Compare all plans</h3>
        </div>
      </ScrollAnimate>

      <div className="compare-plans-content">
        <div className="compare-plans-table-section">
          <div className="compare-plans-table">
            {/* Sticky header */}
            <div ref={TableHeaderRef} className="table-header-sticky">
              <div className="container">
                <div className="table-header thead-first">
                  <ol>
                    <li>
                      <h6>Plan features</h6>
                    </li>

                    {/* Essential (maps to "basic") */}
                    <li className="pricingPlanTablinks">
                      <h6>Essential</h6>
                      <span>₦1,000/employee</span>
                      <NavLink
                        to="https://calendly.com/centapayroll/book-a-demo"
                        target="_blank"
                      >
                        <button
                          onClick={() =>
                            console.log("Start Free Trial - Essential")
                          }
                        >
                          Start Free Trial
                        </button>
                      </NavLink>
                    </li>

                    {/* Growth (maps to "advances") */}
                    <li className="pricingPlanTablinks">
                      <h6>Growth</h6>
                      <span> ₦1,200/employee</span>
                      <NavLink
                        to="https://calendly.com/centapayroll/book-a-demo"
                        target="_blank"
                      >
                        <button>Get Started</button>
                      </NavLink>
                    </li>

                    {/* Business (maps to "unlimited") */}
                    <li className="pricingPlanTablinks">
                      <h6>Business</h6>
                      <span>₦2,000/employee</span>
                      <NavLink
                        to="https://calendly.com/centapayroll/book-a-demo"
                        target="_blank"
                      >
                        <button
                          onClick={() =>
                            console.log("Talk to Sales - Business")
                          }
                        >
                          Talk to Sales
                        </button>
                      </NavLink>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Body rows */}
            <div className="container">
              <div ref={TableBodyRef} className="table-body">
                <div className="pricing-table-row">
                  {ComparePlanData.map((item, index) => (
                    <ul key={index}>
                      <li>{item.feature}</li>
                      <li>{item.basic}</li>
                      <li>{item.advances}</li>
                      <li>{item.unlimited}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComparePlanStyle>
  );
};

export default ComparePlan;
