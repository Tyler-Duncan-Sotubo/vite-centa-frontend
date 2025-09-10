import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import ExpenseBanner from "../Sections/Expense/ExpenseBanner/ExpenseBanner";
import FinanceBenefits from "../Sections/Finance/FinanceBenefits/FinanceBenefits";
import ExpenseCards from "../Sections/Expense/ExpenseCards/ExpenseCards";
import ExpenseFaq from "../Sections/Expense/ExpenseFaq/ExpenseFaq";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const Expense = () => {
  return (
    <Layout pageTitle={"Centa HR - Expense"}>
      <Header variant="v1" />
      <ExpenseBanner />
      <ExpenseCards />
      <FinanceBenefits />
      <ExpenseFaq />
      <GetApp />
      <FooterOne />
    </Layout>
  );
};

export default Expense;
