import Header from "../Sections/Header/Header";
import PricingPlanBreadcumbs from "../Components/Breadcumbs/PricingPlanBreadcumbs";
import PricingPlanCards from "../Sections/PricingPlan/PricingPlanCards/PricingPlanCards";
import CaseStudies from "../Sections/PricingPlan/CaseStudies/CaseStudies";
import PricingFAQ from "../Sections/PricingPlan/PricingFAQ/PricingFAQ";
import ComparePlan from "../Sections/PricingPlan/ComparePlan/ComparePlan";
import Layout from "../Layout";
import FooterThree from "../Sections/Footer/FooterThree";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";

const PricingPlan = () => {
  return (
    <Layout pageTitle="Centa HR - Pricing Plan">
      <div className="bg-gray">
        <Header variant="main-header" />
        <PricingPlanBreadcumbs />
        <PricingPlanCards />
        <ComparePlan />
        <CaseStudies />
        <PricingFAQ />
        <div className="bg-white">
          <StartMeeting />
          <FooterThree />
        </div>
      </div>
    </Layout>
  );
};

export default PricingPlan;
