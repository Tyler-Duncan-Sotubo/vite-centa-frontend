import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import TeamBanner from "../Sections/Banner/TeamBanner/TeamBanner";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";
import TeamFaq from "../Sections/TeamCollaboration/TeamFaq/TeamFaq";
import MeetVirtually from "../Sections/TeamCollaboration/MeetVirtually/MeetVirtually";
import TeamMainFeature from "../Sections/TeamCollaboration/TeamMainFeature/TeamMainFeature";
import UsefulFeature from "../Sections/TeamCollaboration/UsefulFeature/UsefulFeature";
import FooterThree from "../Sections/Footer/FooterThree";

const Recruitment = () => {
  return (
    <Layout pageTitle="CentaHR - Recruitment">
      <Header variant="app" />
      <TeamBanner />
      <TeamMainFeature />
      <UsefulFeature />
      <MeetVirtually />
      <TeamFaq />
      <StartMeeting />
      <FooterThree />
    </Layout>
  );
};

export default Recruitment;
