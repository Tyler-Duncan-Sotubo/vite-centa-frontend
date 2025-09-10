import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import LeaveBanner from "../Sections/Leave/LeaveBanner/LeaveBanner";
import LeaveFaq from "../Sections/Leave/LeaveFaq/Leave";
import SafePlatform from "../Sections/CryptoWalletTwo/SafePlatform/SafePlatform";
import CryptoBalls from "../Sections/CryptoWalletTwo/CryptoBalls/CryptoBalls";
import FeatureTeam from "../Sections/Newsletter/FeatureTeam/FeatureTeam";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const LeaveManagement = () => {
  return (
    <Layout pageTitle={"CentaHR - Leave Management"}>
      <Header variant="v1" />
      <LeaveBanner />
      <FeatureTeam />
      <CryptoBalls />
      <SafePlatform />
      <LeaveFaq />
      <GetApp />
      <FooterOne />
    </Layout>
  );
};

export default LeaveManagement;
