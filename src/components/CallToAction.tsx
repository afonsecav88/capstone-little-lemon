import { Link } from 'react-router-dom';

export const CallToAction = () => {
  return (
    <article className="call-to-action-container">
      <section>
        <h1 className="call-to-action-header">Little Lemon</h1>
        <h2 className="call-to-action-subheader">Chicago</h2>
        <p className="call-to-action-p">
          We are a family owned Mediterranean restaurant, focused contraditional
          recipes served with a modern twist.
        </p>

        <button className="call-to-action-button" aria-label="reserve a table">
          <Link to="/booking" className="call-to-action-button-link">
            Reserve a Table{' '}
          </Link>{' '}
        </button>
      </section>
      <section>
        <img
          className="call-to-action-img"
          src="./restaurant_food.jpg"
          alt="Call to action"
        />
      </section>
    </article>
  );
};
