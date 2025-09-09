import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FooterThree from "../Sections/Footer/FooterThree";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import ServiceList from "../Sections/OurServices/ServiceList/ServiceList";
import OurSkil from "../Sections/OurServices/OurSkil/OurSkil";
import CoreFeature from "../Sections/OurServices/CoreFeature/CoreFeature";

const OurServices = () => {
  return (
    <Layout pageTitle="Centa HR - Our Services">
      <Header variant="main-header" />
      <Breadcumbs title="Our Services" />
      <ServiceList />
      <OurSkil />
      <CoreFeature />
      <div className="bg-white">
        <StartMeeting />
        <FooterThree />
      </div>
    </Layout>
  );
};

export default OurServices;
