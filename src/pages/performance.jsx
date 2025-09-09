import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FooterThree from "../Sections/Footer/FooterThree";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";
import PerformanceBanner from "../Sections/Performance/PerformanceBanner/PerformanceBanner";
import PerformanceFaq from "../Sections/Performance/PerformancFaq/PerformanceFaq";
import ChatbotCustomersSuport from "../Sections/Chatbot/ChatbotCustomersSuport/ChatbotCustomersSuport";
import CorporateValues from "../Sections/Corporate/CorporateValues/CorporateValues";

const Performance = () => {
  return (
    <Layout pageTitle={"Staco - Sass Landing"}>
      <Header variant="v1" />
      <PerformanceBanner />
      <CorporateValues />
      <ChatbotCustomersSuport />
      <PerformanceFaq />
      <StartMeeting />
      <FooterThree />
    </Layout>
  );
};

export default Performance;
