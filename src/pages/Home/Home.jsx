import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import SpecialSection from '../../components/SpecialSection/SpecialSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import Newsletter from '../../components/Newsletter/Newsletter';
import BookingForm from '../../components/BookingForm/BookingForm';
function Home(){

    return <>
    <Nav/>
    <HeroSection/>
    <SpecialSection/>
    <Testimonial/>
    <Newsletter/>
    <BookingForm/>
    <Footer/>
    </>
}

export default Home;