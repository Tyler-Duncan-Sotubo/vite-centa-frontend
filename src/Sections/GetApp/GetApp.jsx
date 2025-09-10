import GetAppStyleWrapper from "./GetApp.style";
import appScreenImage from "../../assets/images/get-app/app-screen.svg";
import appStoreIcon from "../../assets/images/icons/app-store.svg";
import playStoreIcon from "../../assets/images/icons/play-store.svg";
import ScrollAnimate from "../../Components/ScrollAnimate";

const GetApp = () => {
  return (
    <GetAppStyleWrapper className="meeting-anytime-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="row">
            <div className="col-md-12">
              <div className="meeting-anytime-card">
                <div className="overlay">
                  <ScrollAnimate delay={250}>
                    <img src={appScreenImage} alt="meeting-img" />
                  </ScrollAnimate>
                </div>
                <div className="meeting-anytime-card-content">
                  <ScrollAnimate delay={270}>
                    <div className="meeting-anytime-card-text">
                      <h2>Access HR - Anywhere Anytime</h2>
                      <p>
                        CentaHR ESS mobile app is available on iOS and Android —
                        manage leave, payslips, and more on the go.
                      </p>
                    </div>
                    <div className="meeting-anytime-card-buttons">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.centa.ess"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={appStoreIcon} alt="App Store icon" />
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.centa.ess"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={playStoreIcon} alt="Play Store icon" />
                      </a>
                    </div>
                  </ScrollAnimate>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </GetAppStyleWrapper>
  );
};

export default GetApp;
