import Logo from '../../assets/footer-logo.png'; 
import fb from  '../../assets/facebook.svg';
import ig from  '../../assets/instagram.svg';
import x from  '../../assets/twitter.svg';
import './Footer.css'
function Footer(){
    return (
        <div className = "Footer">
            <div className = "footer-logo">
            <img src={Logo}></img>
            </div>   
            <ul>
                <li><b>Navigation</b></li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservation</li>
            </ul>
            <ul>
                <li><b>Contact</b></li>
                <li>2333 Maldove lane</li>
                <li>Chicago</li>
                <li>090078601</li>
                <li>info@littlelemon.com</li>
            </ul>
            <ul>
                <li><b>Socials</b></li>
                <li className='social'><img src= {ig}></img>@littlelemon</li>
                <li className='social'><img src = {x}></img>@littlelemon</li>
                <li className='social'><img src = {fb}></img>@littlelemon</li>
            </ul>
        </div>
    )
}

export default Footer;