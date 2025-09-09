import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FooterThree from "../Sections/Footer/FooterThree";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";
import ExpenseBanner from "../Sections/Expense/ExpenseBanner/ExpenseBanner";
import FinanceBenefits from "../Sections/Finance/FinanceBenefits/FinanceBenefits";
import ExpenseCards from "../Sections/Expense/ExpenseCards/ExpenseCards";
import ExpenseFaq from "../Sections/Expense/ExpenseFaq/ExpenseFaq";

const Expense = () => {
  return (
    <Layout pageTitle={"Staco - Sass Landing"}>
      <Header variant="v1" />
      <ExpenseBanner />
      <ExpenseCards />
      <FinanceBenefits />
      <ExpenseFaq />
      <StartMeeting />
      <FooterThree />
    </Layout>
  );
};

export default Expense;
