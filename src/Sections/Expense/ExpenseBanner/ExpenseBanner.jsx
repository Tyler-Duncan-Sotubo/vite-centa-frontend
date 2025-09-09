import { useEffect } from "react";
import { useTypingHeadlines } from "use-typing-headlines";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import index5BannerImg from "../../../assets/images/expense/hero-image.png";
import ExpenseBannerStyle from "./ExpenseBanner.style";

const ExpenseBanner = () => {
  const [sassOneHeadline] = useTypingHeadlines(["Travel", "Meal", "vehicles"], {
    speed: 200, // adjust this to make typing faster; lower values mean faster typing
    delay: 200, // adjust delay between words
  });

  useEffect(() => {
    const handleScroll = () => {
      const hero5 = document.querySelector(".hero-section-index5");
      if (hero5) {
        const indexVImg = document.querySelector(".hero-section-index5");
        const y = window.scrollY;
        let x;
        let heroVImg;
        x = indexVImg.offsetTop;
        heroVImg = indexVImg.querySelector(".index5-hero-img img");
        x = x + 400;

        let animationValue = 40;
        animationValue = (animationValue - (y - x)) / 5;

        const animationStop = 0;

        if (animationValue > 40) {
          animationValue = 40;
        }

        if (animationValue < animationStop) {
          animationValue = animationStop;
        }

        if (y > x) {
          heroVImg.style.transform = `rotateX(${animationValue}deg)`;
        } else {
          heroVImg.style.transform = `rotateX(${animationValue}deg)`;
        }

        const scrollSlider = document.querySelector(
          ".index5-scroll-carousel-section"
        );
        let z = scrollSlider.offsetTop;
        z = z - 500;
        let val = (-1 * y) / 4;
        let val2 = y / 4;
        if (y > z) {
          document.querySelector(
            ".slide-left"
          ).style.transform = `translateX(${val}px)`;
          document.querySelector(
            ".slide-right"
          ).style.transform = `translateX(${val2}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ExpenseBannerStyle className="hero-section-index5">
      <div className="container">
        <div className="index5-hero-content">
          <ScrollAnimate delay={200}>
            <div className="v5banner-text">
              <h1 className="cd-headline clip is-full-width banner-title text-center text-white">
                <span className="brack-text">Smarter way to</span>
                manage&nbsp;
                <span className="cd-words-wrapper animation-text">
                  <b>{sassOneHeadline}</b>
                </span>
                &nbsp;expenses
              </h1>
              <p className="text-white">
                Submit receipts in seconds, approve reimbursements seamlessly,
                and sync with payroll automatically. Keep expense tracking fast,
                compliant, and hassle-free.
              </p>
            </div>
          </ScrollAnimate>
        </div>

        <div className="index5-hero-img">
          <img src={index5BannerImg} alt="img" />
        </div>
      </div>
    </ExpenseBannerStyle>
  );
};

export default ExpenseBanner;
