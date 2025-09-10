import Layout from "../Layout";
import TermsSection from "../Sections/TermsAndPrivacy/Terms";
import Header from "../Sections/Header/Header";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const Terms = () => {
  return (
    <Layout pageTitle="Staco - Terms">
      <Header variant={"main-header"} />
      <TermsSection />
      <GetApp />
      <FooterOne />
    </Layout>
  );
};

export default Terms;
