
//   new code     
 import { React, useEffect, useState } from 'react';
  
import { createContext, useContext } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authService from "../appwrite/auth";
import all_product from "../Assets/all_product";

// Create Context
const StoreContext = createContext({
  userData:null,
  cart: [],
  addCart: () => {},
  removeCart: () => {},
  getDefaultCart: () => {},
  notify: () => {},
  totalAmount: () => {},
  login: (data) => {},
  logout: () => {},
  createAccount:(data)=>{},
  getuser:()=>{},
  plsLogin:()=>{}

});

                                                        // Notification Functions
                                                        const notify = () => {
                                                          toast("Product Added to the Cart",{
                                                            position: "top-right",
                                                            autoClose: 1000,
                                                          });
                                                        };
                                                        const deleteNotify = () => {
                                                          toast.error("Product Removed from the Cart",{
                                                            position: "top-right",
                                                            autoClose: 1000,

                                                          });
                                                        };
                                                        const loginNotify = () => {
                                                          toast.success("Login Successful");
                                                        };
                                                        const logoutNotify = () => {
                                                          toast.error("Logout Successful");
                                                        };

                                                        const subscribeus=()=>{
                                                          toast.success("Thank you for subscribing us!",{
                                                            position: "top-right",
                                                            autoClose: 1000,

                                                          })
                                                        };

                                                        const empty_email=()=>{
                                                          toast("Please Enter the valid email !")
                                                        }
                                                        const plsLogin=()=>{
                                                          toast.warning("Please login !");
                                                        }


// Store Provider Component
const StoreProvider = ({ children }) => {


                                        
                          // LOGIN SIGNUP CREATE ACCOUNT 
                                          const[userData,setUserData]=useState(null);
                                         const[userStatus,setUserStatus]=useState(false);
                                          const[verfied,setIsverfied]=useState(false);
                                        
                                         useEffect(()=>{
                                        
                                           const getUser=async()=>{
                                            setUserStatus(true);
                                             const users=await authService.getCurrentUser();
                                            if (users) {
                                              setUserData(users);
                                              setIsverfied(users.emailVerification);
}
                                          
                                         setUserStatus(false);
                                         setIsverfied(false)
                                          }
                                          getUser();
                                         
                                       },[userData])                               
                                         const   createAccount=async(data)=>{
                                           try {
                                            setUserStatus(true);
                                             const user= await  authService.createAccount({
                                              name:data.name,
                                              email:data.email,
                                              password:data.password

                                             })
                                             setUserData(user);
                                             toast("Account created successfully!");
                                              console.log(user);
                                              
                                           } catch (error) {
                                            console.log(error);
                                            
                                           }
                                           setUserStatus(false);
                                        }

                                        const login = async (data) => {
                                          try {
                                            const session= await authService.login({
                                              email:data.email,
                                              password:data.password
                                             })
                                             console.log("session is created",session);
                                             
                                            loginNotify();
                                            return session;
                                          } catch (error) {
                                            
                                          }
                                        };
                                           console.log("user data",userData);
                                           // LOGOUT 
                                        const logout =async () => {
                                           try {
                                            setUserStatus(true);
                                            await authService.logout();
                                            setUserData(null);
                                            logoutNotify();

                                           } catch (error) {
                                            console.log(error);
                                            
                                           }
                                         
                                        };

                                       
                                          

  // Create the default cart
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
  // Cart State
  const [cartitems, setcartitem] = useState(getDefaultCart());

     const addCart=(id)=>{
        setcartitem((prev)=>{
           let newcart={...prev}

            if (newcart[id]) {
                // product exist in the cart simply increment 
              newcart[id]=newcart[id]+1;
            }else {

              // if the product does not exist add with the qunatity one 
              newcart[id]=1;
            }
            notify();
            return newcart;
        })
     }
    

  // Remove Item from Cart
  const removeCart = (id) => {
    setcartitem((prev) => {
      // store if product exits
      let new_del = { ...prev };

      if (new_del[id] && new_del[id] > 0) {
      //  .. if product exits simply remove one product from tthe products
        new_del[id] = new_del[id] - 1; 
      } else {
        delete new_del[id];  // if single product de;ete it using delte 
      }
      return new_del; 
    });
    deleteNotify(); // Show notification when item is removed
  };
  

  // Calculate Total Amount
  const totalAmount = () => {
    let total = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = all_product.find((product) => product.id === Number(item));
        total += iteminfo.new_price * cartitems[item];
      }
    }
    return total;
  };

  // Order Success Handler
  const orderSucess = () => {
    if (Object.values(cartitems).some((quantity) => quantity > 0)) {
      setTimeout(() => {
        toast.success("Thank you! for purchasing us...",
        )
      }, 2000);

      setTimeout(() => {
// Reset cart to default after order
        setcartitem(getDefaultCart());
       window.location.href="/"
            }, 7000);
    } else {
      toast("Your cart is empty! Please buy something.");
    }
  };

  // Return the StoreContext.Provider with values
  return (
    <StoreContext.Provider value={{
      addCart,
      removeCart,
      getDefaultCart,
      cartitems,
      orderSucess,
      totalAmount,
      login,
      logout,
      userData,
      setUserData,
      subscribeus,
      empty_email,
      plsLogin,
      createAccount,
      userStatus,
      setUserStatus,
      verfied,
      setIsverfied
    }}>
      {children}
      <ToastContainer />   // Notification
    </StoreContext.Provider>
  );
};

// Custom Hook to use Store
 const useStoreData = () => {
  return useContext(StoreContext);
};

export { StoreContext, StoreProvider, useStoreData };








