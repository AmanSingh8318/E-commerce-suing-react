import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink } from 'react-router-dom';
import '../Home.css';
import { StoreContext } from '../Store/store';

function Login() {
      const { register, handleSubmit, formState: { errors } } = useForm();
      const {logout,userData, userStatus,createAccount,verfied}=useContext(StoreContext);
     
    console.log(" in login section",userData);
    
const {login}=useContext(StoreContext)
  return (
   <> 
         
     {userData &&userData?
        <div className='card'>
        <div className='card-header'>
         {<NavLink to='/user'>
                  <i className="user-iconss"></i>
        
                    </NavLink>}      
           <h2 style={{textAlign:"center"}}>Welcome  {userData&& userData.name}</h2>
        </div>
        <div className ='card-body'>
          <p>✉ :{userData.email}</p>
        </div>
        <div className='card-footer'>
    <button onClick={logout}>Logout</button>
  </div>
 </div>
  :
<div className='formsub'>
          <h2>Login</h2>
         <p> New user {<Link to="/signup" >
         <span>Signup</span>
         </Link>}</p>
          <form onSubmit={handleSubmit(login)}>
  
            <input type="email" placeholder='Enter your email' {...register('email', { required: true })} />
            {errors.email && <span style={{ color: "red" }}>This field is required</span>}
  
            <input type="password" placeholder='Enter your password' {...register('password', { required: true })} />
            {errors.password && <span style={{ color: "red" }}>This field is required</span>}
  
            <input type="submit" value="Login" />
          </form>
        </div>
}
  </>
  )
}

export default Login
