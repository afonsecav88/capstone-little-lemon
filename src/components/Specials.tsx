import { specialsData } from '../mocks/specialsData';

export const Specials = () => {
  return (
    <article className="specials-section-container">
      <section className="specials-section-header">
        <h1>This weeks specials!</h1>
        <button aria-label="online menu">Online Menu</button>
      </section>
      <section className="specials-section-card-container">
        {specialsData.map((card) => (
          <div key={card.id} className="specials-section-card">
            <div className="specials-section-card-items">
              <div className="card-item-header">
                <p>{card.specialName}</p>
                <p id="card-header-price">{card.specialPrice}</p>
              </div>
              <div className="card-item-description">
                <p>{card.specialDescription}</p>
              </div>
              <div className="card-item-footer">
                <p>{card.specialFooter}</p>
                <img src={card.specialFooterIcon} alt="delivery" />
              </div>
            </div>

            <div className="card-image-container">
              <img
                src={card.cover}
                alt="icon delivery"
                className="card-image"
              />
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};
