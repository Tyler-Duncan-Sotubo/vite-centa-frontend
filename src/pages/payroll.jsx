import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import BusinessBanner from "../Sections/Banner/BusinessBanner/BusinessBanner";
import BusinessHowWork from "../Sections/Business/BusinessHowWork/BusinessHowWork";
import BusinessChoose from "../Sections/Business/BusinessChoose/BusinessChoose";
import BusinessRating from "../Sections/Business/BusinessRating/BusinessRating";
import BusinessFaq from "../Sections/Business/BusinessFaq/BusinessFaq";
import SassVideo from "../Sections/SassLandingTwo/SassVideo/SassVideo";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const Payroll = () => {
  return (
    <Layout pageTitle="CentaHR - Payroll">
      <Header variant="v1" />
      <BusinessBanner />
      <BusinessHowWork />
      <SassVideo />
      <BusinessChoose />
      <BusinessRating />
      <BusinessFaq />
      <GetApp />
      <FooterOne />
    </Layout>
  );
};

export default Payroll;
