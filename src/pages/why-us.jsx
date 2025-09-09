import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FooterThree from "../Sections/Footer/FooterThree";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import BusinessFaq from "../Sections/Business/BusinessFaq/BusinessFaq";
import SassTwoChoos from "../Sections/SassLandingTwo/SassTwoChoose/SassTwoChoos";
import WhyChoose from "../Sections/CustomerService/WhyChoose/WhyChoose";

export default function WhyUs() {
  return (
    <Layout pageTitle="CentaHR — Why Choose Us">
      <Header variant="main-header" />
      <Breadcumbs title="Why Us" />
      <WhyChoose />
      <SassTwoChoos />
      <BusinessFaq />
      <StartMeeting />
      <FooterThree />
    </Layout>
  );
}
