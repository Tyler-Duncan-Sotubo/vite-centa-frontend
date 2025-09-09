import AppFeaturesStyleWrapper from "./AppFeatures.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { AppFeatureData } from "../../../assets/data/app-data/AppFeatureData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AppFeatures = () => {
  return (
    <AppFeaturesStyleWrapper className="app-useful-features">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimate delay={200}>
              <SectionTitle
                title="Essential Features for Employees"
                subtitle="Why choose CentaHR ESS"
                titleClass="text-white"
              />
            </ScrollAnimate>
          </div>
          <div className="col-md-6">
            <ScrollAnimate delay={300}>
              <div className="app-useful-features-text">
                <p className="text-white pb-3">
                  CentaHR ESS gives employees quick access to payslips, leave
                  requests, attendance, and company updates—all from one simple
                  app. No more waiting on HR for the basics.
                </p>
                <p className="text-white">
                  Empower your workforce with self-service tools that save time,
                  improve accuracy, and keep everyone connected—anytime,
                  anywhere.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
        <div className="app-useful-features-card-section">
          <div className="row">
            {AppFeatureData.map((feature) => (
              <div key={feature.id} className="col-lg-3 col-sm-6">
                <ScrollAnimate delay={feature.delay}>
                  <div className="app-useful-features-card">
                    <div className="card-content">
                      <div className="icon">
                        <img
                          src={feature.iconSrc}
                          alt={`feature-icon-${feature.id}`}
                        />
                      </div>
                      <h5 className="text-white wt-700">{feature.title}</h5>
                      <p className="text-white mb-0">{feature.description}</p>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppFeaturesStyleWrapper>
  );
};

export default AppFeatures;
