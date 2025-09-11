import Header from "../Sections/Header/Header";
import PricingPlanBreadcumbs from "../Components/Breadcumbs/PricingPlanBreadcumbs";
import CaseStudies from "../Sections/PricingPlan/CaseStudies/CaseStudies";
import PricingFAQ from "../Sections/PricingPlan/PricingFAQ/PricingFAQ";
import ComparePlan from "../Sections/PricingPlan/ComparePlan/ComparePlan";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";
import Layout from "../Layout";
import PricingCalculator from "../Sections/PricingPlan/PlanPricingCalculator/PriceCalculator";

const PricingPlan = () => {
  return (
    <Layout pageTitle="Centa HR - Pricing Plan">
      <div>
        <Header variant="main-header" />
        <PricingPlanBreadcumbs />
        {/* <PricingPlanCards /> */}
        <PricingCalculator
          defaultEmployees={10}
          annualDiscount={0.1}
          usdToNgn={1500}
        />
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
