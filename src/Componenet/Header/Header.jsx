import React, { memo, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../Assets/logo_big.png';
import { StoreContext } from '../Store/store';
import './Header.css';

const Header = memo(() => {

    const {login,logout,userData}=useContext(StoreContext);

  console.log(login);
  console.log(logout);
  // console.log(userData);
  
  
  
  return (
    <header>
      <nav className='nav'>
        <div className='logo'>
          <Link to="#" className='logo1'>
            <img src={logoImage} alt="Shopper" />
            <p>SHOPPER</p>
          </Link>
        </div>
        <ul className="ul">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "deactive")}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/Men" className={({ isActive }) => (isActive ? "active" : "deactive")}>
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to="/women" className={({ isActive }) => (isActive ? "active" : "deactive")}>
              Women
            </NavLink>
          </li>
          <li>
            <NavLink to="/Kids" className={({ isActive }) => (isActive ? "active" : "deactive")}>
              Kids
            </NavLink>
          </li>
        </ul>
        <i className="fa-solid fa-bars-staggered navs" id="bar" onClick={(active) => { 
        }}></i>

        <div className='cart'>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "deactive")}>
            <i className="fas fa-shopping-cart" style={{marginRight:"1rem"}}></i>
          </NavLink>

          {userData ? (
            <>
              <span  style={{fontWeight:"800",marginLeft:"2rem"}}>Welcome {userData.name}</span>
              <i  className='user-icon'></i>

              <button className='btn' onClick={logout}>Logout</button>

            </>
          ) : (<>
            <NavLink to='/signup' className={({ isActive }) => (isActive ? "active" : "deactive")}>
              <button className='btn'>Signup </button>
            </NavLink>
             <NavLink to='/login' className={({ isActive }) => (isActive ? "active" : "deactive")}>
             <button className='btn'>Login </button>
           </NavLink>
           
           </>
          )}

        </div>
      </nav>
    </header>
  );
});

export default Header;
