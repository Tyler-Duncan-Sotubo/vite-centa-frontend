import Layout from "../Layout";
import HomeBanner from "../Sections/Banner/HomeBanner/HomeBanner";
import Header from "../Sections/Header/Header";
import HomeOneFeatures from "../Sections/Home/Features/HomeOneFeatures";
import UsabilitySlider from "../Sections/Home/UsabilitySlider/UsabilitySlider";
import HomeOneMarketingSection from "../Sections/Home/HomeMarketing/HomeMarketingSection";
import HomeIntegrate from "../Sections/Home/HomeIntegrate/HomeIntegrate";
import FaqHome from "../Sections/Home/FaqHome/FaqHome";
import FooterThree from "../Sections/Footer/FooterThree";
import Offering from "../Sections/Accounting/Offering/Offering";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";

const CoreHR = () => {
  return (
    <Layout pageTitle="Core HR">
      <div className="body-container">
        <Header variant="v1" />
        <HomeBanner />
        <HomeOneFeatures />
        <UsabilitySlider />
        <HomeOneMarketingSection />
        <HomeIntegrate />
        <Offering />
        <FaqHome />
        <StartMeeting />
        <FooterThree />
      </div>
    </Layout>
  );
};

export default CoreHR;
