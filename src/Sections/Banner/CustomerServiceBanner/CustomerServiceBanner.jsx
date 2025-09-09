import CustomerServiceBannerStyle from "./CustomerServiceBanner.style";

import heroImgMen1 from "../../../assets/images/customer-service/hero-img-men-1.png";
import heroImgMen2 from "../../../assets/images/customer-service/hero-img-men-2.png";
import likeIcon from "../../../assets/images/customer-service/like.png";
import checkCoinIcon from "../../../assets/images/customer-service/check-coin.png";
import index2HeroImg from "../../../assets/images/customer-service/index2-hero-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CustomerServiceBanner = () => {
  return (
    <CustomerServiceBannerStyle className="hero-section2">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <ScrollAnimate delay={250}>
              <div className="hero-content hero-content2">
                <div className="hero-content2-text">
                  <div className="new-hoogle text-white">
                    <span>New</span>
                    <p className="mb-0 wt-700 text-white">
                      Smart Attendance Tracking Added
                    </p>
                  </div>
                  <h2 className="banner-title text-white">
                    Powerful <span className="hero-badge">Attendance</span>{" "}
                    Management
                  </h2>
                  <ul>
                    <li className="wt-700 text-white">
                      <span className="iconify" data-icon="bi:check-lg" />
                      Track employee time, shifts & attendance in real time
                    </li>
                    <li className="wt-700 text-white">
                      <span className="iconify" data-icon="bi:check-lg" />
                      Eliminate manual errors with automated records
                    </li>
                    <li className="wt-700 text-white">
                      <span className="iconify" data-icon="bi:check-lg" />
                      Easy integration with payroll & compliance modules
                    </li>
                  </ul>
                </div>
                <div className="hero-content-button mb-30">
                  <a
                    href="https://app.centahr.com/auth/register"
                    className="bg-blue-btn"
                  >
                    <span className="btn-inner">
                      <span className="btn-normal-text">
                        Get Started for Free
                      </span>
                      <span className="btn-hover-text">
                        Get Started for Free
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6">
            <ScrollAnimate delay={200}>
              <div className="hero2-img">
                <div className="hero2-image1">
                  <img
                    src={heroImgMen1}
                    alt="HRIS attendance module illustration"
                  />
                </div>
                <div className="hero2-image2">
                  <img src={heroImgMen2} alt="Employees checking attendance" />
                </div>
                <div className="hero2-image3">
                  <img src={likeIcon} alt="Seamless attendance tracking" />
                </div>
                <div className="hero2-image4">
                  <img src={checkCoinIcon} alt="Error-free records icon" />
                </div>
                <img
                  src={index2HeroImg}
                  alt="Attendance dashboard screenshot"
                />
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </CustomerServiceBannerStyle>
  );
};

export default CustomerServiceBanner;
