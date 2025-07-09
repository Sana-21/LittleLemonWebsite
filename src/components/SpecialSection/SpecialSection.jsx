import Salad from '../../assets/salad.svg';
import Bruschetta from '../../assets/bruschetta.svg';
import Lemon from '../../assets/lemon.svg';
import './SpecialSection.css';
import { Link } from 'react-router-dom';
function SpecialSection() {
  let specials = [
    { id: 1, name: "Greek Salad", src: Salad, alt: "salad", price: "$20", description :"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."  },
    { id: 2, name: "Bruschetta" , src: Bruschetta, alt: "bruschetta", price: "$40", description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." },
    { id: 3, name: "Lemon Dessert", src: Lemon, alt: "lemon", price:"$14", description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." },
  ];

  return (
    <div className='special-section-div'>
      <div className="specials-section">
        <div className='top-section'>
        <h2>Today's Specials</h2>
        <Link to="/menu" className='menu-btn'>Online Menu</Link>
        </div>
        <div className="special-images">
          {specials.map((img) => (
            <div className='image-box'>
                <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                />
                <div className='img-title'>
                <h3>{img.name}</h3>
                <span>{img.price}</span>
                </div>
                <p>{img.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialSection;
