import { BrowserRouter, Route, Routes } from "react-router-dom";
import SassLandingTwo from "./pages/sass-landing-two";
import Terms from "./pages/terms";
import PrivacyPolicy from "./pages/privacy-policy";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blog-details";
import AboutUs from "./pages/about-us";
import OurServices from "./pages/our-services";
import ContactUs from "./pages/ContactUs";
import PricingPlan from "./pages/pricing-plan";
import Error from "./pages/Error";
import ScrollToTop from "./ScrollToTop";
import WhyUs from "./pages/why-us";
import CoreHR from "./pages/core-hr";
import EmployeeSelfService from "./pages/employee-self-service";
import Payroll from "./pages/payroll";
import Attendance from "./pages/attendance";
import Recruitment from "./pages/recruitment";
import Assets from "./pages/assets";
import Expense from "./pages/expense";
import Performance from "./pages/performance";
import LeaveManagement from "./pages/leave-management";
import CentaAI from "./pages/centa-ai";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SassLandingTwo />} />
        <Route path="/sass-landing-two" element={<SassLandingTwo />} />
        <Route path="/core-hr" element={<CoreHR />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route
          path="/employee-self-service"
          element={<EmployeeSelfService />}
        />
        <Route path="/assets" element={<Assets />} />
        <Route path="/expenses" element={<Expense />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/leave-management" element={<LeaveManagement />} />
        <Route path="/centa-ai" element={<CentaAI />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/pricing-plan" element={<PricingPlan />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/category/:cat" element={<Blog />} />
        <Route path="/blog/tag/:tag" element={<Blog />} />
        <Route path="/blog/search" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
