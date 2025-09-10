import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import AssetBanner from "../Sections/Assets/AssetBanner/AssetBanner";
import AssetFeatures from "../Sections/Assets/AssetFeatures/AssetFetures";
import AssetTemplate from "../Sections/Assets/AssetsTemplate/AssetTemplate";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const Assets = () => {
  return (
    <Layout pageTitle={"Centa HR - Assets"}>
      <Header variant="v1" />
      <AssetBanner />
      <AssetFeatures />
      <AssetTemplate />
      <GetApp />
      <FooterOne />
    </Layout>
  );
};

export default Assets;
