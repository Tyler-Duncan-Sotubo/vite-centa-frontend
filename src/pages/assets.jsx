import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FooterThree from "../Sections/Footer/FooterThree";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";
import AssetBanner from "../Sections/Assets/AssetBanner/AssetBanner";
import AssetFeatures from "../Sections/Assets/AssetFeatures/AssetFetures";
import AssetTemplate from "../Sections/Assets/AssetsTemplate/AssetTemplate";

const Assets = () => {
  return (
    <Layout pageTitle={"Centa HR - Assets"}>
      <Header variant="v1" />
      <AssetBanner />
      <AssetFeatures />
      <AssetTemplate />
      <StartMeeting />
      <FooterThree />
    </Layout>
  );
};

export default Assets;
