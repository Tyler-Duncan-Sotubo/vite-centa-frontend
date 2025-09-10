import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import PerformanceBanner from "../Sections/Performance/PerformanceBanner/PerformanceBanner";
import PerformanceFaq from "../Sections/Performance/PerformancFaq/PerformanceFaq";
import ChatbotCustomersSuport from "../Sections/Chatbot/ChatbotCustomersSuport/ChatbotCustomersSuport";
import CorporateValues from "../Sections/Corporate/CorporateValues/CorporateValues";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const Performance = () => {
  return (
    <Layout pageTitle={"Centa HR - Performance"}>
      <Header variant="v1" />
      <PerformanceBanner />
      <CorporateValues />
      <ChatbotCustomersSuport />
      <PerformanceFaq />
      <GetApp />
      <FooterOne />
    </Layout>
  );
};

export default Performance;
