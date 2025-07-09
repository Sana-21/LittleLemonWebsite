import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg'; 
import Login from '../../assets/login.svg';
import './Nav.css'

function Nav() {
  return (
    <>
    <nav className = "navbar">
    <img className= 'logo' src={Logo} alt="Logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/menu">Order Online</Link>
        </li>
      </ul>
      <div className='login-btn'><Link to="/login"><img className='login-img' src={Login} alt="Login" /><p>Login</p></Link></div>
    </nav>
    </>
  );
}

export default Nav;
