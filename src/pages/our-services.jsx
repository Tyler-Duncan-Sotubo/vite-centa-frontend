import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import ServiceList from "../Sections/OurServices/ServiceList/ServiceList";
import OurSkil from "../Sections/OurServices/OurSkil/OurSkil";
import CoreFeature from "../Sections/OurServices/CoreFeature/CoreFeature";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const OurServices = () => {
  return (
    <Layout pageTitle="Centa HR - Our Services">
      <Header variant="main-header" />
      <Breadcumbs title="Our Services" />
      <ServiceList />
      <OurSkil />
      <CoreFeature />
      <div className="bg-white">
        <GetApp />
        <FooterOne />
      </div>
    </Layout>
  );
};

export default OurServices;
