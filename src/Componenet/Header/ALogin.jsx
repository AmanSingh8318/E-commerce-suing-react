  // Signup componenet
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../Home.css';
import { StoreContext } from '../Store/store';
function ALogin() {
  const { register, handleSubmit, formState: { errors } } = useForm();

   const{userData,createAccount,logout,userStatus}=useContext(StoreContext);
  
  return (

<>
          {/* { userData && userData.emailVerification?
        <div className='card'>
        <div className='card-header'>
        <i className="user-icon"></i>       
           <h2 style={{textAlign:"center"}}>Welcome  {userData&& userData.name}</h2>
        </div>
        <div className='card-body'>
          <p>Email: {userData.email}</p>
        </div>
        <div className='card-footer'>
    <button onClick={logout}>Logout</button>
  </div>


          </div>
           : userData && !userData.emailVerification ? (
            // 🛑 User logged in but NOT Verified
            <div className="formsub">
              <h2>Email Not Verified 🚨</h2>
              <p>Please check your email and verify your account before logging in.</p>
            </div>
          )
          : */}

          <div className='formsub'>
          <h2>Signup</h2>
            <p>already have a account {
              <Link to='/login'>
                login
              </Link>
              }</p>
          <form onSubmit={handleSubmit(createAccount)}>
            <input type="name" placeholder='Enter your name' {...register('name', { required: true })} />
            {errors.name && <span style={{ color: "red" }}>This field is required</span>}
  
            <input type="email" placeholder='Enter your email' {...register('email', { required: true })} />
            {errors.email && <span style={{ color: "red" }}>This field is required</span>}
  
            <input type="password" placeholder='Enter your password' {...register('password', { required: true })} />
            {errors.password && <span style={{ color: "red" }}>This field is required</span>}
  
            <input type="submit" value="Signup" />
          </form>
        </div>
          {/* } */}
    </>
  );
}

export default ALogin;
