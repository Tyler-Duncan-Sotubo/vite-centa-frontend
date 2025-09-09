import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import SayHello from "../Sections/ContactUs/SayHello/SayHello";
import FooterThree from "../Sections/Footer/FooterThree";
import ContactLocation from "../Sections/ContactUs/ContactLocation/ContactLocation";

const ContactUs = () => {
  return (
    <Layout pageTitle="Centa HR - Contact Us">
      <Header variant="main-header" />
      <Breadcumbs title="Contact Us" />
      <SayHello />
      <ContactLocation />
      <FooterThree />
    </Layout>
  );
};

export default ContactUs;
