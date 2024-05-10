import { specialsData } from '../mocks/specialsData';

export const Specials = () => {
  return (
    <article className="specials-section-container">
      <section className="specials-section-header">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </section>
      <section>
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
                <p>{card.specialFooterIcon}</p>
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
