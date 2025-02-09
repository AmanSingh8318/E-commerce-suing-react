import React from 'react';
import { NavLink } from 'react-router-dom';
import all_product from '../Assets/all_product';
import MenImg from '../Assets/banner_women.png';
function Kids() {
  
  let imgData=all_product;

  return (
    <>
      <div className='banner-w'>
        <img src={MenImg} alt="" />
      </div>
      <section>
                <div className="pop-women-img">
            <div className="pop-women2-img">
              
                 {imgData&&imgData.map((img) => (
                 img&& img.category === "women" && (
                    <NavLink style={{textDecoration:"none",color:"black"}} to={`/product/${img.id}`}>

                    <div key={img.id} className="product-img">
                      <img src={img.image} alt="" />
                      <div className="details">
                        <p>{img.name}</p>
                        <div className="price">
                          <span className="new">$ {img.new_price}</span>
                          <span className="old">${img.old_price}</span>
                        </div>

                      </div>
                    </div>
                    </NavLink>
                  )
                ))}
              


                          </div>
                         
                    </div>
                  </section>
    </>
  );
}

export default Kids
