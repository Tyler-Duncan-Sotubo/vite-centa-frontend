import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import ParallaxComponent from "../Components/Peralax/ParallaxComponent";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import PeopleUsing from "../Sections/AboutUs/PeopleUsing/PeopleUsing";
import AboutUsContent from "../Sections/AboutUs/AboutUsContent/AboutUsContent";
import FooterThree from "../Sections/Footer/FooterThree";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";

const AboutUs = () => {
  return (
    <Layout pageTitle="Centa HR - About us">
      <Header variant="main-header" />
      <Breadcumbs title="About Us" />
      <PeopleUsing />
      <ParallaxComponent />
      <AboutUsContent />
      <StartMeeting />
      <FooterThree />
    </Layout>
  );
};

export default AboutUs;
