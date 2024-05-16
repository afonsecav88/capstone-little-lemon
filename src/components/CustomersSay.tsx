import { testimonialsData } from '../mocks/testimonialsData';

export const CustomersSay = () => {
  return (
    <article className="section-testimonials">
      <h1 id="section-testimonials-header">Testimonials</h1>
      <section className="card-review-container">
        {testimonialsData.map((review) => (
          <section key={review.id} className="card-review-item">
            <p id="rating-header">Rating: {review.reviewIcon}</p>
            <div className="card-image-testimonial">
              <img
                className="card-review-image"
                src={review.cover}
                alt="review person"
              />
              <p>{review.name}</p>
            </div>
            <p className="card-review-description">{review.reviewText}</p>
          </section>
        ))}
      </section>
    </article>
  );
};
