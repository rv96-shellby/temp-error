import { landingCardConfig } from "../../data/cardConfig";
import "./_cards.scss";
const LandingCard = () => {
  const cards = landingCardConfig();

  return (
    <section className="section--more-reasons" data-section="more-reasons">
      <h2>More reasons to join</h2>
      <div className="landingCard--container">
        {cards.map((card, index) => (
          <div key={index} className="landingCard--item landingCard--card">
            <div className="landingCard--ct">
              <div className="landingCard--title">
                <p>{card.title}</p>
              </div>
              <div className="landingCard--image">{card.image}</div>{" "}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingCard;
