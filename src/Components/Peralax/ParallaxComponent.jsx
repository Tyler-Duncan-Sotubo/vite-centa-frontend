import { useEffect, useRef } from "react";
import { Parallax } from "react-parallax";
import ParallaxStyleWrapper from "./Parallax.style";
import ParallaxBgImg from "../../assets/images/bg/vector-map.svg";
import ScrollAnimate from "../ScrollAnimate";

const ParallaxComponent = ({ parallaxTextClass }) => {
  const sectionRef = useRef(null);
  const didAnimateRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || didAnimateRef.current) return;

    const runCounters = () => {
      const counters = el.querySelectorAll(".counter");
      counters.forEach((item) => {
        const targetAttr = item.getAttribute("datatarget");
        const target = Number(targetAttr || item.textContent || 0);
        const start = 0;
        const duration = 1200; // ms
        const startTime = performance.now();

        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const value = Math.floor(start + (target - start) * progress);
          item.textContent = String(value);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    };

    // Animate once when section is in view
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          runCounters();
          didAnimateRef.current = true;
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ParallaxStyleWrapper ref={sectionRef}>
      <Parallax
        className="index2-statistics-section"
        bgImage={ParallaxBgImg}
        bgImageAlt="map"
        strength={200}
      >
        <div className="container">
          <div className="index2-statistics-content">
            <div className="row">
              <div className="col-lg-5 col-md-4 md-mb-30">
                <ScrollAnimate delay={200}>
                  <div className={`statistics-text ${parallaxTextClass}`}>
                    <h2>
                      <span className="counter" datatarget="25">
                        25
                      </span>
                      +
                    </h2>
                    <p>Industries Served</p>
                  </div>
                </ScrollAnimate>
              </div>

              <div className="col-lg-4 col-md-4 md-mb-30">
                <ScrollAnimate delay={230}>
                  <div className={`statistics-text ${parallaxTextClass}`}>
                    <h2>
                      <span className="counter" datatarget="156">
                        156
                      </span>
                      K
                    </h2>
                    <p>Employee Profiles Managed</p>
                  </div>
                </ScrollAnimate>
              </div>

              <div className="col-lg-3 col-md-4">
                <ScrollAnimate delay={260}>
                  <div className={`statistics-text ${parallaxTextClass}`}>
                    <h2>
                      <span className="counter" datatarget="23">
                        23
                      </span>
                      K
                    </h2>
                    <p>Payrolls Processed</p>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </ParallaxStyleWrapper>
  );
};

export default ParallaxComponent;
