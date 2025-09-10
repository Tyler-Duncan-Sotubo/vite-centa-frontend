import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import PrivacyPolicySection from "../Sections/TermsAndPrivacy/DataProtection";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const DataProtection = () => {
  return (
    <Layout pageTitle="CentaHR - Data Protection">
      <Header variant={"main-header"} />
      <PrivacyPolicySection />
      <GetApp />
      <FooterOne />
    </Layout>
  );
};

export default DataProtection;
