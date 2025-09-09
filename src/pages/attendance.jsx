import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import CustomerServiceBanner from "../Sections/Banner/CustomerServiceBanner/CustomerServiceBanner";
import BusinessTolls from "../Sections/CustomerService/BusinessTools/BusinessTools";
import CustomerFeatures from "../Sections/CustomerService/CustomerFeatures/CustomerFeatures";
import WhyChoose from "../Sections/CustomerService/WhyChoose/WhyChoose";
import Integration from "../Components/Integration/Integration";
import FooterThree from "../Sections/Footer/FooterThree";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";

const Attendance = () => {
  return (
    <Layout pageTitle="CentaHR - Attendance">
      <Header variant="v1" />
      <CustomerServiceBanner />
      <BusinessTolls />
      <CustomerFeatures />
      <WhyChoose />
      <Integration />
      <StartMeeting />
      <FooterThree />
    </Layout>
  );
};

export default Attendance;
