import AssetFeaturesStyle from "./AssetFeatures.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import choseUsImg1 from "../../../assets/images/assets/chose-us-img1.png";
import choseUsImg2 from "../../../assets/images/assets/chose-us-img2.png";
import choseUsImg3 from "../../../assets/images/assets/chose-us-img3.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AssetFeatures = () => {
  return (
    <AssetFeaturesStyle className="asset-features-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <SectionTitle
            title="Smarter Asset Management"
            subtitle="Key Features"
            parentClass="md-mb-0 text-center"
          />
        </ScrollAnimate>

        <div className="asset-features-content">
          <div className="row">
            {/* Feature 1 */}
            <div className="col-lg-4 col-md-6">
              <ScrollAnimate delay={200}>
                <div className="asset-feature-card">
                  <h5>AI-Driven Asset Intelligence</h5>
                  <p>
                    Automatically calculate depreciation and asset value based
                    on usage patterns and asset type. Improve reporting accuracy
                    and reduce manual errors.
                  </p>
                  <ul>
                    <li>AI-powered depreciation calculator</li>
                    <li>Custom asset lifespan configurations</li>
                    <li>Real-time book value visibility</li>
                  </ul>
                  <div className="asset-feature-img">
                    <img src={choseUsImg1} alt="AI Asset Intelligence" />
                  </div>
                </div>
              </ScrollAnimate>
            </div>

            {/* Feature 2 */}
            <div className="col-lg-4 col-md-6">
              <ScrollAnimate delay={250}>
                <div className="asset-feature-card active">
                  <h5>Employee Self-Service Support</h5>
                  <p>
                    Empower staff to request new assets, report issues, or view
                    assigned equipment from their mobile device or browser.
                  </p>
                  <ul>
                    <li>Submit new asset requests from ESS</li>
                    <li>Log issues like damage or malfunction</li>
                    <li>Track request status and asset history</li>
                  </ul>
                  <div className="asset-feature-img">
                    <img src={choseUsImg2} alt="Employee Self Service" />
                  </div>
                </div>
              </ScrollAnimate>
            </div>

            {/* Feature 3 */}
            <div className="col-lg-4 col-md-6">
              <ScrollAnimate delay={300}>
                <div className="asset-feature-card">
                  <h5>Insightful Asset Reporting</h5>
                  <p>
                    Get detailed analytics on allocation, usage, issues, and
                    depreciation trends. Export reports in seconds.
                  </p>
                  <ul>
                    <li>Lifecycle, depreciation, and usage report</li>
                    <li>Export-ready reports for finance and compliance</li>
                    <li>Full asset audit trail</li>
                  </ul>
                  <div className="asset-feature-img">
                    <img src={choseUsImg3} alt="Asset Reporting" />
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </AssetFeaturesStyle>
  );
};

export default AssetFeatures;
