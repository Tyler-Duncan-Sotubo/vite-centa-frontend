import Header from "../Sections/Header/Header";
import PricingPlanBreadcumbs from "../Components/Breadcumbs/PricingPlanBreadcumbs";
import PricingPlanCards from "../Sections/PricingPlan/PricingPlanCards/PricingPlanCards";
import CaseStudies from "../Sections/PricingPlan/CaseStudies/CaseStudies";
import PricingFAQ from "../Sections/PricingPlan/PricingFAQ/PricingFAQ";
import ComparePlan from "../Sections/PricingPlan/ComparePlan/ComparePlan";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";
import Layout from "../Layout";

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
          <GetApp />
          <FooterOne />
        </div>
      </div>
    </Layout>
  );
};

export default PricingPlan;
