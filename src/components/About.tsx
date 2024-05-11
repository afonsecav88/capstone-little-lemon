export const About = () => {
  return (
    <article className="about-container">
      <section className="section-about-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          In our kitchen, each ingredient is treated with the utmost respect and
          care. From fresh vegetables to exotic spices, we try to select the
          best products for each dish. This dedication to quality is reflected
          in the flavor and freshness of our creations.
        </p>
      </section>
      <section className="section-about-image-container">
        <img
          className="about-chef-image2"
          src="restaurant_b.jpg"
          alt="chef restaurant in action"
        />
        <img
          className="about-chef-image1"
          src="m_a_a.jpg"
          alt="chef restaurant"
        />
      </section>
    </article>
  );
};
