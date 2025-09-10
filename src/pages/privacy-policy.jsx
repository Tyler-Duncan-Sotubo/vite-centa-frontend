import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import PrivacyPolicySection from "../Sections/TermsAndPrivacy/PrivacyPolicy";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const PrivacyPolicy = () => {
  return (
    <Layout pageTitle="Staco - Privacy Policy">
      <Header variant={"main-header"} />
      <PrivacyPolicySection />
      <GetApp />
      <FooterOne />
    </Layout>
  );
};

export default PrivacyPolicy;
