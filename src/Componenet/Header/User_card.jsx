import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../Home.css';
import { StoreContext } from '../Store/store';

function User_card() {
    const {logout,userData}=useContext(StoreContext);

  return (
   <>
    {userData && userData? 
     <div className='card'>
     <div className='card-header'>
     <i className="user-icon"></i>

         {<NavLink to='/user'>
            <h2 style={{textAlign:"center"}}>Welcome  {userData&& userData.name}</h2>

            </NavLink>}
     </div>
     <div className ='card-body'>
       <p>✉ :{userData&& userData.email}</p>
     </div>
     <div className='card-footer'>
 <button onClick={logout}>Logout</button>
</div>
</div> :
                    <div className='card'>
                        <div className='card-header'>
                        <i className="user-icon"></i>       
                            <h2 style={{textAlign:"center"}}>Welcome  {}</h2>
                        </div>
                        <div className ='card-body'>
                        <p>✉ :{}</p>
                        </div>
                        <div className='card-footer'></div>
                        </div>
}
   </>
    
  )
}

export default User_card
