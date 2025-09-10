import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import BusinessFaq from "../Sections/Business/BusinessFaq/BusinessFaq";
import SassTwoChoos from "../Sections/SassLandingTwo/SassTwoChoose/SassTwoChoos";
import WhyChoose from "../Sections/Attendance/WhyChoose/WhyChoose";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

export default function WhyUs() {
  return (
    <Layout pageTitle="CentaHR — Why Choose Us">
      <Header variant="main-header" />
      <Breadcumbs title="Why Us" />
      <WhyChoose />
      <SassTwoChoos />
      <BusinessFaq />
      <GetApp />
      <FooterOne />
    </Layout>
  );
}
