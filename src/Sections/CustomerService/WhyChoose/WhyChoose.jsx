import WhyChoseStyleWrapper from "./WhyChoose.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import chooseUsImg from "../../../assets/images/customer-service/choose-us-img.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const WhyChoose = () => {
  return (
    <WhyChoseStyleWrapper className="choose-us-section md-pb-50">
      <div className="container">
        <ScrollAnimate delay={200}>
          <SectionTitle
            title="4 cardinal benefits"
            subtitle="Why us?"
            alignment="center"
          />
        </ScrollAnimate>

        <div className="choose-us-content">
          {/* LEFT */}
          <div className="choose-us-text choose-us-text-left">
            <div className="contents-text text-left">
              <ScrollAnimate delay={200}>
                <h4>Core HR & Onboarding</h4>
                <p>
                  Maintain a unified employee record, automate offer letters and
                  onboarding checklists, and keep your org structure tidy—all in
                  one place.
                </p>
              </ScrollAnimate>
            </div>

            <div className="contents-text text-left">
              <ScrollAnimate delay={220}>
                <h4>Payroll & Compliance</h4>
                <p>
                  Run payroll in minutes with allowances, deductions, PAYE,
                  pension, and NHF—plus downloadable reports for stress-free
                  filings.
                </p>
              </ScrollAnimate>
            </div>
          </div>

          {/* IMAGE */}
          <div className="choose-us-img">
            <ScrollAnimate delay={250}>
              <span>
                <img src={chooseUsImg} alt="CentaHR benefits" />
              </span>
            </ScrollAnimate>
          </div>

          {/* RIGHT */}
          <div className="choose-us-text choose-us-text-right">
            <div className="contents-text text-right">
              <ScrollAnimate delay={200}>
                <h4>Employee Self-Service (ESS)</h4>
                <p>
                  Empower staff to request leave, clock in, view payslips, and
                  update profiles from web or mobile—no HR bottlenecks.
                </p>
              </ScrollAnimate>
            </div>

            <div className="contents-text text-right">
              <ScrollAnimate delay={220}>
                <h4>Performance & Analytics</h4>
                <p>
                  Set goals, run reviews, and unlock real-time dashboards for
                  headcount, costs, attendance, and performance trends.
                </p>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </WhyChoseStyleWrapper>
  );
};

export default WhyChoose;
