import AppLandingBanner from "../Sections/Banner/AppLandingBanner/AppLandingBanner";
import AppFeatures from "../Sections/AppLanding/AppFeatures/AppFeatures";
import ConvertVisitors from "../Sections/AppLanding/ConvertVisitors/ConvertVisitors";
import AppTestimonial from "../Sections/AppLanding/AppTestimonial/AppTestimonial";
import AppBenefits from "../Sections/AppLanding/AppBenefits/AppBenefits";
import AppFaq from "../Sections/AppLanding/AppFaq/AppFaq";
import FooterTwo from "../Sections/Footer/FooterTwo";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";

const EmployeeSelfService = () => {
  return (
    <Layout pageTitle={"CentaHR - Employee Self Service"}>
      <div className="v7body-section">
        <Header variant={"app"} />
        <AppLandingBanner />
        <AppFeatures />
        <ConvertVisitors />
        <AppTestimonial />
        <AppBenefits />
        <AppFaq />
      </div>
      <FooterTwo />
    </Layout>
  );
};

export default EmployeeSelfService;
