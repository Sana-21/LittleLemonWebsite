import foodImage from  '../../assets/hero.jpg';
import './HeroSection.css'
function HeroSection({ onReserveClick }){

    return (
         <section className="HeroSection">
            <div className="HeroText">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Enjoy our fresh Mediterranean flavors straight from the kitchen.Fresh Ingredients. Bold Flavors. Timeless Recipes. Join us at Little Lemon for a culinary journey that blends tradition with creativity. Whether it’s a quick bite or a full-course dinner, every dish is made with love</p>
                <button className="HeroButton"onClick={onReserveClick}>Reserve a Table</button>
            </div>
            <div className="HeroImage">
                <img src={foodImage} alt="Delicious food" />
            </div>
         </section>
    );
}
export default HeroSection;