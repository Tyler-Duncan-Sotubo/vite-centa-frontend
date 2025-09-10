import Layout from "../Layout";
import HomeBanner from "../Sections/Banner/HomeBanner/HomeBanner";
import Header from "../Sections/Header/Header";
import HomeOneFeatures from "../Sections/Home/Features/HomeOneFeatures";
import UsabilitySlider from "../Sections/Home/UsabilitySlider/UsabilitySlider";
import HomeOneMarketingSection from "../Sections/Home/HomeMarketing/HomeMarketingSection";
import HomeIntegrate from "../Sections/Home/HomeIntegrate/HomeIntegrate";
import FaqHome from "../Sections/Home/FaqHome/FaqHome";
import Offering from "../Sections/Accounting/Offering/Offering";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const CoreHR = () => {
  return (
    <Layout pageTitle="Centa HR - Core">
      <div className="body-container">
        <Header variant="v1" />
        <HomeBanner />
        <HomeOneFeatures />
        <UsabilitySlider />
        <HomeOneMarketingSection />
        <HomeIntegrate />
        <Offering />
        <FaqHome />
        <GetApp />
        <FooterOne />
      </div>
    </Layout>
  );
};

export default CoreHR;
