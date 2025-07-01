import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import SpecialSection from '../../components/SpecialSection/SpecialSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import Newsletter from '../../components/Newsletter/Newsletter';
import BookingForm from '../../components/BookingForm/BookingForm';
import { useState } from "react";
function Home(){
    const [showForm, setShowForm] = useState(false);
    return <>
    <Nav/>
    <HeroSection onReserveClick={() => setShowForm(true)} />
    <SpecialSection/>
    {showForm && <BookingForm  onClose={() => setShowForm(false)} />}
    <Testimonial/>
    <Newsletter/>
    <Footer/>
    </>
}

export default Home;