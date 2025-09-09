import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import ChatbotBanner from "../Sections/Banner/ChatbotBanner/ChatbotBanner";
import ConvertVisitors from "../Sections/Chatbot/ConvertVisitors/ConvertVisitors";
import ChatbotChoose from "../Sections/Chatbot/ChatbotChoose/ChatbotChoose";
import Integration from "../Sections/Integration/Integration";
import ChatbotTestimonials from "../Sections/Chatbot/ChatbotTestimonials/ChatbotTestimonials";
import FooterThree from "../Sections/Footer/FooterThree";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";
import CentaAICustomersSuport from "../Sections/CentaAI/CentaAICustomersSuport";

const CentaAI = () => {
  return (
    <Layout pageTitle={"CentaHR - CentaAI"}>
      <Header variant="v1" />
      <ChatbotBanner />
      <ConvertVisitors />
      <ChatbotChoose />
      <CentaAICustomersSuport />
      <Integration />
      <ChatbotTestimonials />
      <StartMeeting />
      <FooterThree />
    </Layout>
  );
};

export default CentaAI;
