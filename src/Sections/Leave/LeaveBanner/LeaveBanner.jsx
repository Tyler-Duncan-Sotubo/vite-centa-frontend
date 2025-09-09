import { useEffect } from "react";
import { useTypingHeadlines } from "use-typing-headlines";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import index5BannerImg from "../../../assets/images/leave/hero-image.png";
import LeaveBannerStyle from "./LeaveBanner.style";

const LeaveBanner = () => {
  const [sassOneHeadline] = useTypingHeadlines(
    ["leave", "time off", "requests", "balances", "policies"],
    {
      speed: 200, // lower = faster typing
      delay: 200, // delay between words
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      const hero5 = document.querySelector(".hero-section-index5");
      if (!hero5) return;

      const indexVImg = document.querySelector(".hero-section-index5");
      const y = window.scrollY;

      let x = indexVImg.offsetTop + 400;
      const heroVImg = indexVImg.querySelector(".index5-hero-img img");

      let animationValue = (40 - (y - x)) / 5;
      const animationStop = 0;

      if (animationValue > 40) animationValue = 40;
      if (animationValue < animationStop) animationValue = animationStop;

      if (heroVImg) {
        heroVImg.style.transform = `rotateX(${animationValue}deg)`;
      }

      const scrollSlider = document.querySelector(
        ".index5-scroll-carousel-section"
      );
      if (scrollSlider) {
        let z = scrollSlider.offsetTop - 500;
        let val = (-1 * y) / 4;
        let val2 = y / 4;
        if (y > z) {
          const left = document.querySelector(".slide-left");
          const right = document.querySelector(".slide-right");
          if (left) left.style.transform = `translateX(${val}px)`;
          if (right) right.style.transform = `translateX(${val2}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LeaveBannerStyle className="hero-section-index5">
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
              </h1>
              <p className="text-white">
                Employees request leave via ESS, managers approve with clear
                workflows, and policies & accruals are enforced automatically.
                See real-time balances and team calendars—then sync approved
                time off straight to payroll.
              </p>
            </div>
          </ScrollAnimate>
        </div>

        <div className="index5-hero-img">
          <img src={index5BannerImg} alt="Leave management hero" />
        </div>
      </div>
    </LeaveBannerStyle>
  );
};

export default LeaveBanner;
