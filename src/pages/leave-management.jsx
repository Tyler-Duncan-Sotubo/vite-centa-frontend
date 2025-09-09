import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FooterThree from "../Sections/Footer/FooterThree";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";
import LeaveBanner from "../Sections/Leave/LeaveBanner/LeaveBanner";
import LeaveFaq from "../Sections/Leave/LeaveFaq/Leave";
import SafePlatform from "../Sections/CryptoWalletTwo/SafePlatform/SafePlatform";
import CryptoBalls from "../Sections/CryptoWalletTwo/CryptoBalls/CryptoBalls";
import FeatureTeam from "../Sections/Newsletter/FeatureTeam/FeatureTeam";

const LeaveManagement = () => {
  return (
    <Layout pageTitle={"CentaHR - LeaveManagement"}>
      <Header variant="v1" />
      <LeaveBanner />
      <FeatureTeam />
      <CryptoBalls />
      <SafePlatform />
      <LeaveFaq />
      <StartMeeting />
      <FooterThree />
    </Layout>
  );
};

export default LeaveManagement;
