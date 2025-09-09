import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import SassTwoBanner from "../Sections/Banner/SassTwoBanner/SassTwoBanner";
import TopNotch from "../Sections/SassLandingTwo/TopNotch/TopNotch";
import SassTwoChoos from "../Sections/SassLandingTwo/SassTwoChoose/SassTwoChoos";
import BrandSlider from "./../Components/BrandSlider/BrandSlider";
import Seamless from "../Sections/SassLandingTwo/Seamless/Seamless";
import HappyCustomers from "../Sections/SassLanding/HappyCustomers/HappyCustomers";
import HomePricing from "../Sections/Home/HomePricing/HomePricing";
import FooterThree from "../Sections/Footer/FooterThree";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";

const SassLandingTwo = () => {
  return (
    <Layout pageTitle={"Staco - Sass Landing Two"} scrollVariant={"sass"}>
      <div className="sass-landing-body body-container">
        <Header variant={"sass"} />
        <SassTwoBanner />
        <TopNotch />
        <SassTwoChoos />
        <BrandSlider
          sliderClass="sass"
          titleClass="brands-section-title brands-section-title-index2"
        />
        {/* <SassVideo /> */}
        <HomePricing />
        <Seamless />
        <HappyCustomers />
        <StartMeeting />
        <FooterThree />
      </div>
    </Layout>
  );
};

export default SassLandingTwo;
