import "./Testimonial.css";
import user from "../../assets/user.svg";
import star from "../../assets/star.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  let reviews = [
    { id: 1, username: "User 1", rating: 5, comment: "Very good service" },
    { id: 2, username: "User 2", rating: 4, comment: "Tasty pizza" },
    { id: 3, username: "User 3", rating: 5, comment: "Very good service" },
    { id: 4, username: "User 4", rating: 3, comment: "Very good service" },
    { id: 5, username: "User 5", rating: 5, comment: "dessert is the best" },
  ];

  return (
    <div className="testimonial-main-div">
      <div className="testimonial-section">
        <div className="top-section">
          <h2>Reviews</h2>
          <button className="menu-btn">Write a review </button>
        </div>
        <div className="review-list">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div className="review-box" key={review.id}>
                <div className="star-rating">
                  {Array(review.rating)
                    .fill()
                    .map((_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                </div>
                <div className="user-name">
                  <img className="user-image" src={user} />
                  {review.username}
                </div>
                <p>" {review.comment} "</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
