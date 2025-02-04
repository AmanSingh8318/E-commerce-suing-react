import React from 'react';
import { NavLink } from 'react-router-dom';
import all_product from '../Assets/all_product';
import "../Home.css";

function Realted() {
  let imgData = all_product;
// using the slice method filter only 4 products from each section
  const womenProducts = imgData.filter(img => img.category === "women").slice(0, 4);
  const menProducts = imgData.filter(img => img.category === "men").slice(0, 4);
  const kidsProducts = imgData.filter(img => img.category === "kid").slice(0, 4);

  return (
    <>

      <section>
        <h2 className='rel-h2'>Related Products</h2>
        <div className="pop-women-img">
          <div className="pop-women2-img">
            {womenProducts.map((img) => (
              <NavLink style={{ textDecoration: "none", color: "black" }} to={`/product/${img.id}`}>
                <div key={img.id} className="product-img">
                  <img src={img.image}  onClick={window.scroll(0,0)} alt="" />
                  <div className="details">
                    <p>{img.name}</p>
                    <div className="price">
                      <span className="new">$ {img.new_price}</span>
                      <span className="old">${img.old_price}</span>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="pop-women-img">
          <div className="pop-women2-img">
            {menProducts.map((img) => (
              <NavLink style={{ textDecoration: "none", color: "black" }} to={`/product/${img.id}`}>
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
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="pop-women-img">
          <div className="pop-women2-img">
            {kidsProducts.map((img) => (
              <NavLink style={{ textDecoration: "none", color: "black" }} to={`/product/${img.id}`}>
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Realted;