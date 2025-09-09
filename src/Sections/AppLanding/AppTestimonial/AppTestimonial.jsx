import Slider from "react-slick";
import AppTestimonialStyle from "./AppTestimonial.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import StarIcon from "../../../assets/images/icons/star.svg";
import AppStor from "../../../assets/images/os-store/app_store.svg";
import PlayStor from "../../../assets/images/os-store/play_store.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AppTestimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    touchMove: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
    loop: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1800, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 1440, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <AppTestimonialStyle className="app-testimonial-section testimonial-section-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimate delay={200}>
              <SectionTitle
                title="Trusted by teams across Nigeria"
                subtitle="Testimonials"
                titleMaxW="500px"
              />
            </ScrollAnimate>
          </div>
          <div className="col-md-6">
            <ScrollAnimate delay={300}>
              <div className="testimonial-btns">
                <div className="row">
                  <div className="col-sm-6">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.centa.ess"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={PlayStor} alt="playstore" />
                      <h4 className="dm-sans">
                        4.8
                        <span>Download on</span>
                      </h4>
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="https://www.apple.com/app-store"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={AppStor} alt="appstore" />
                      <h4 className="dm-sans">
                        4.6
                        <span>Download on</span>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>

      <div className="app-testimonial-section-slider">
        <ScrollAnimate delay={300}>
          <Slider {...settings} className="testimonial-slider">
            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  CentaHR ESS made leave requests and approvals effortless. Our
                  team finally has{" "}
                  <span className="bg-aero-blue">self-service access</span> to
                  payslips and profile updates—no more back-and-forth emails.
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Adaeze Okafor</h4>
                    <h5>HR Manager, TechHub NG</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />5
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  Payroll accuracy has gone up and processing time is down. From
                  attendance to PAYE, everything syncs—superb for a growing
                  team. 👏👏
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Tunde Adebayo</h4>
                    <h5>Finance Lead, Kora Foods</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />5
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  The ESS app is intuitive—staff download payslips, apply for
                  leave, and see balances in seconds. Adoption was instant
                  across departments.
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Chiamaka Nwosu</h4>
                    <h5>People Operations, Nova Retail</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />4
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  I love the{" "}
                  <span className="bg-aero-blue">real-time attendance</span> and
                  automated workflows. Approvals are fast, audit trails are
                  clear, and compliance is easy. 🥰
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Ibrahim Lawal</h4>
                    <h5>Operations Director, Skyline Logistics</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />5
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  Onboarding used to take days. With CentaHR, offers,
                  checklists, and documents are all digital— new hires are
                  productive from day one.
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Funmi Adesina</h4>
                    <h5>Talent Lead, BrightHealth</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />4
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  The integration with accounting simplified month-end. Reports
                  are clean, exports are quick, and managers approve on mobile.
                  Game-changer.
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Emeka Eze</h4>
                    <h5>Accountant, UrbanWorks</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />5
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </ScrollAnimate>
      </div>
    </AppTestimonialStyle>
  );
};

export default AppTestimonial;
