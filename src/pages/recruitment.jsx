import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import TeamBanner from "../Sections/Banner/TeamBanner/TeamBanner";
import TeamFaq from "../Sections/TeamCollaboration/TeamFaq/TeamFaq";
import MeetVirtually from "../Sections/TeamCollaboration/MeetVirtually/MeetVirtually";
import TeamMainFeature from "../Sections/TeamCollaboration/TeamMainFeature/TeamMainFeature";
import UsefulFeature from "../Sections/TeamCollaboration/UsefulFeature/UsefulFeature";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const Recruitment = () => {
  return (
    <Layout pageTitle="CentaHR - Recruitment">
      <Header variant="app" />
      <TeamBanner />
      <TeamMainFeature />
      <UsefulFeature />
      <MeetVirtually />
      <TeamFaq />
      <GetApp />
      <FooterOne />
    </Layout>
  );
};

export default Recruitment;
