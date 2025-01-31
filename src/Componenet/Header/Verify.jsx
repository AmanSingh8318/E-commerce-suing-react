import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import appwriteService from '../appwrite/auth';
// import { StoreContext } from '../Store/store';
function Verify() {
    const[message,setMeassage]=useState();
    const searchParams= new URLSearchParams(window.location.search);
  const[verfied,setVerifed]=useState(false);
  const navigate=useNavigate();
// const{verfied,setIsVerifed,VerifyEmail}=useContext(StoreContext)
  // take the verfication from the auth service 
       const VerifyEmails=async(id,secret)=>{
            try {
                await appwriteService.updateVerification({id,secret});
                setMeassage("email is verfied successfully");
                toast("verfication is done")
                 setVerifed(true);
            } catch (error) {
                console.log(error);
                setMeassage("email is not verified")
                toast.error("please verify")
            }
       }

       // secretcode and  userid  provided by the appwrite for verfication
      useEffect(()=>{
        const id=searchParams.get("userId")
        const secretCode=searchParams.get('secret');
          if (id&&secretCode) {
             VerifyEmails(id,secretCode);
          }
      },[])

      // if the email is verfied naviagte to the login 
        if (verfied) {
          toast.success("Verification is compelted succesffuly pls login")
          navigate("/login")
         }else{
          toast.error("please verify")

         }
     
       
  return (
    <div>
      {message}

    </div>
  )
}

export default Verify
