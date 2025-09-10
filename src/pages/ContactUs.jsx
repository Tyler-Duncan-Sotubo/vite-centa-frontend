import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import SayHello from "../Sections/ContactUs/SayHello/SayHello";
import ContactLocation from "../Sections/ContactUs/ContactLocation/ContactLocation";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const ContactUs = () => {
  return (
    <Layout pageTitle="Centa HR - Contact Us">
      <Header variant="main-header" />
      <Breadcumbs title="Contact Us" />
      <SayHello />
      <ContactLocation />
      <GetApp />
      <FooterOne />
    </Layout>
  );
};

export default ContactUs;
