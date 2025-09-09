import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import FooterThree from "../Sections/Footer/FooterThree";
import StartMeeting from "../Sections/TeamCollaboration/StartMeeting/StartMeeting";
import BlogList from "../Sections/Blog/BlogList/BlogList";

const Blog = () => {
  return (
    <Layout pageTitle="Centa HR - Blog">
      <div className="bg-gray">
        <Header variant="main-header" />
        <Breadcumbs title="Latest Blogs" />
        <BlogList />
        <div className="bg-white">
          <StartMeeting />
          <FooterThree />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
