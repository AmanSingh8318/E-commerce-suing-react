import React from 'react'
import LogoImg from '../Assets/logo_big.png'
function Footer() {
  return (
    <div className='ft-main'>
    
    <div className='ft-logo'>
      <img src={LogoImg} alt={"Logo"} />
      <p>SHOPPER</p>
    </div>
          <ul className='item'>
              <li>Company</li>
              <li>Products</li>
              <li>Offices</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
          <div className='icon'>
          <i className="fa-brands fa-instagram"> <a href="/instagram"></a></i> 
          <i className="fa-brands fa-pinterest"></i>        
          <i className="fa-brands fa-whatsapp"></i>        
            </div>
            <div className='copy'>
            <p>Copyright@2025</p>
            </div>
    </div>
  )
}

export default Footer
