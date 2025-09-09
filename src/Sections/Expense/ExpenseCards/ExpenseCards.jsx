import ExpenseCardsStyle from "./ExpenseCards.style";
import { cardsData } from "../../../assets/data/FinanceData/CardData";

import featuresArrowRightIcon from "../../../assets/images/icons/features-arrow-right.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ExpenseCards = () => {
  return (
    <ExpenseCardsStyle className="index6-card-section">
      <div className="container">
        <div className="row">
          {cardsData.map((card, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <ScrollAnimate delay={card.delay}>
                <div className={`index6-card ${card.variant || ""}`}>
                  <div className="index6-card-icon">
                    <img src={card.iconSrc} alt={`${card.title} icon`} />
                  </div>
                  <h5>{card.title}</h5>
                  <p className={card.textClass || ""}>{card.description}</p>
                  <a href={card.href || "/expenses"}>
                    <span className="btn-text">Learn more</span>
                    <div className="link-btn">
                      <div className="icon">
                        <img src={featuresArrowRightIcon} alt="open" />
                      </div>
                    </div>
                  </a>
                </div>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </ExpenseCardsStyle>
  );
};

export default ExpenseCards;
