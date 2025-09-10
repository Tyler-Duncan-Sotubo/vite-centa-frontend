import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import BlogDetailsSection from "../Sections/Blog/BlogDetails/BlogDetails";
import FooterOne from "../Sections/Footer/FooterOne";
import GetApp from "../Sections/GetApp/GetApp";

const BlogDetails = () => {
  return (
    <Layout pageTitle="Staco - Blog Details">
      <div className="bg-gray">
        <Header variant="main-header" />
        <BlogDetailsSection />
      </div>
      <GetApp />
      <FooterOne />
    </Layout>
  );
};

export default BlogDetails;
