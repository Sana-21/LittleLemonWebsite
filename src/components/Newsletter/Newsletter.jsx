import "./Newsletter.css";
function Newsletter() {
  return (
    <section class="newsletter-section dark">
      <div class="newsletter-container">
        <h2>Stay Updated</h2>
        <p>
          Subscribe to our newsletter for the latest specials and exclusive
          deals.
        </p>
        <form class="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
