import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import CustomerServiceBanner from "../Sections/Banner/CustomerServiceBanner/CustomerServiceBanner";
import BusinessTolls from "../Sections/Attendance/BusinessTools/BusinessTools";
import CustomerFeatures from "../Sections/Attendance/CustomerFeatures/CustomerFeatures";
import WhyChoose from "../Sections/Attendance/WhyChoose/WhyChoose";
import Integration from "../Components/Integration/Integration";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const Attendance = () => {
  return (
    <Layout pageTitle="CentaHR - Attendance">
      <Header variant="v1" />
      <CustomerServiceBanner />
      <BusinessTolls />
      <CustomerFeatures />
      <WhyChoose />
      <Integration />
      <GetApp />
      <FooterOne />
    </Layout>
  );
};

export default Attendance;
