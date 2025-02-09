import React from 'react';
import all_product from '../Assets/all_product';
import remove_icon from '../Assets/cart_cross_icon.png';
// import '../Home.css';
import { useStoreData } from '../Store/store';
import './cart.css';

function Cart() {
  const storeData = useStoreData();
  const {cartitems,removeCart,orderSucess,totalAmount}=storeData;
  
  console.log("total amout is",totalAmount);
  

  return (
<>   
 {/* cart items should be displayed here */}   
        <div className=' main-cart'>
        <div className="cart-header">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        </div>
  {   all_product.map((img)=>{
    if(cartitems[img&&img.id]>0){
      return (
        <div key={img.id} className='cart-store-item'>
        <div className='cart-item'>
          <img src={img.image} alt="" />
          <p>{img.name}</p>
          <p>${img.new_price}</p>
          <p>{cartitems[img.id]}</p>
          <p>${img.new_price*cartitems[img.id]}</p>
          <img src={remove_icon} onClick={() => removeCart(img?.id)} alt={remove_icon} />     
               </div>
        </div>
      )
    }
  })}
       <div className='cart-totals'>
        <div className='cart-totals-item'>
        <h2 className='cart-h2'>Cart Totals</h2>

          <p>Subtotal <span>${totalAmount()}</span></p>
          <p>Shipping free  <span className='shiping'>Free</span></p>
          <p className='ps'>Total <span className='total-amount' style={{color:"black" ,fontWeight:"900"}}>${totalAmount()}</span></p>
          <button className='cart-total-button' onClick={orderSucess}>BUY NOW</button>
        </div>
       </div>
</>
  )
 }

export default Cart;