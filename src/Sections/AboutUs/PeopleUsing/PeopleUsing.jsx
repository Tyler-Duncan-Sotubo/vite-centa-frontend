import PeopleUsingStyle from "./PeopleUsing.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import { avatarImages } from "../../../assets/data/about-us/aboutData";
import { GoArrowRight } from "react-icons/go";
import CustomerImg from "../../../assets/images/about-us/customer-img.svg";
import PlusIcon from "../../../assets/images/icons/plus-blue.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const PeopleUsing = () => {
  return (
    <PeopleUsingStyle>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="customer-img">
              <ScrollAnimate delay={200}>
                <img src={CustomerImg} alt="centahr-users" />
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-7">
            <ScrollAnimate delay={250}>
              <div className="customer-content">
                <ul className="users-list">
                  {avatarImages.map((avatar, index) => (
                    <li key={index}>
                      <a href="#">
                        <img src={avatar} alt={`user-${index}`} />
                      </a>
                    </li>
                  ))}
                  <li>
                    <button>
                      <img src={PlusIcon} alt="add-user" />
                    </button>
                  </li>
                </ul>
                <div className="customer-content-text">
                  <TitleStyleWrapper>
                    <div className="section-title">
                      <h2 className="title mb-0">
                        People using
                        <span className="marketing-badge">CentaHR</span>
                        with complete confidence
                      </h2>
                    </div>
                  </TitleStyleWrapper>
                  <p>
                    From recruitment to payroll, CentaHR brings every part of
                    the employee journey into one seamless platform — helping
                    teams hire smarter, manage people better, and ensure
                    compliance.
                  </p>
                  <p>
                    HR leaders and employees alike love the simplicity:
                    automated onboarding, AI-powered recruitment, performance
                    insights, leave and payroll management — all in a secure,
                    centralized system.
                  </p>
                  {/* <a href="#" className="text-link">
                    <span>Explore Case Studies</span>
                    <GoArrowRight />
                  </a> */}
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </PeopleUsingStyle>
  );
};

export default PeopleUsing;
