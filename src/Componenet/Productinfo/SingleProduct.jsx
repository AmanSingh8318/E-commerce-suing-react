import React from 'react';
import { useParams } from 'react-router-dom';
import All_data from '../Assets/all_product';
import rating_icon from '../Assets/star_dull_icon.png';
import rating_full from '../Assets/star_icon.png';
import "../Home.css";
import { useStoreData } from '../Store/store';
import Realted from './Realted';
// import "./SingleProduct.css";


function SingleProduct() {
  const { id } = useParams();
  const img_Data = All_data;
  const product = img_Data.find((item) => item.id === parseInt(id));

  const storeData = useStoreData();
  const {addCart,userData,plsLogin}=storeData;

  
  if (!product) {
    return <h3>Invalid</h3>;
  }
  return (
    <>
    <div className='product-main-sec'>
      <div className='product-infos-sec1'>
        <img src={product.image} alt="product" />
        <img src={product.image} alt="product" />
        <img src={product.image} alt="product" />
        <img src={product.image} alt="product" />

      </div>
      <div className='main-img'>
        <img src={product.image} alt="" />
      </div>

          <div className='right-p'>
              <div className='right-p-info'>
                <p>{product.name}</p>
                <div className='rating-info'>
                  <img src={rating_full} alt="" />
                 <img src={rating_full} alt="" />
               <img src={rating_full} alt="" />
                <img src={rating_full} alt="" />
                <img src={rating_icon} alt=""  />
                      </div>
      <div className='icon-price'>
        <p className='new'>${product.new_price}</p>
        <p className='old'>${product.old_price}</p>
      </div>

         <div className='desc'>
        <p>
        "Elevate your style with this stunning maxi 
        dress featuring intricate lace trim and a romantic
         ruffled hem. The flowy, floor-sweeping design is perfect
          for a summer evening out or a special occasion. The V-neckline
           and adjustable straps add a touch of sophistication, while the lace 
           trim adds a whimsical touch. Pair with sandals and a statement
         necklace for a chic, effortless look."
        </p>
         </div>
         <div className='size'>
            <p>Select Size</p>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
         </div>
         <div className='button-p'> 
          <button className='btn-p' onClick={()=>{
              if (!userData) {
                 setTimeout(() => {
                  window.location.href='/login'

                 }, 4000);
                 plsLogin();
                 return;
              }
            addCart(product.id)
            }}>Add To Cart</button>
           </div>
              </div>
          </div>
     
    </div>
    <Realted />
    </>
  );
}

export default SingleProduct;