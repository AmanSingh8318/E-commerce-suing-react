import { Account, Client, ID } from "appwrite";
import ev from '../../ev_store/ev';
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint( ev.appwrite_url)
      .setProject(ev.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
        const userAccount = await this.account.create(ID.unique(), email, password, name);

        if (userAccount) {
            await this.account.createEmailPasswordSession(email, password);
            await this.account.createVerification("http://localhost:5173/verify");
            // toast.success("verfication email is sent")
          // return userAccount;
        }
    } catch (error) {
        console.error(error);
    }
}

  

  async login({ email, password }) {
    try {
      // if the  session is created 
         
      const session=await this.account.createEmailPasswordSession(email,password);
      // fetch the current user 
      const current_User=await this.account.get();
       console.log("current user in login",current_User);
       console.log(current_User.emailVerification);

        // if user is not verified return false and some error msg
       if (!current_User.emailVerification) {
        return { success: false, message: "Email not verified. Please verify your email." };  
      }
      return { success: true, session };

       
    } catch (error) {
      throw error;
    }
  }

                                              // update the verfication 
   async updateVerification(userId,secret){
    try {
      // update the verfication based on the userId,& secret code 
    const res=  await this.account.updateVerification(userId,secret);
     if (res) {
      const user=await this.account.getCurrentUser();
       if (user) {
        return{success:true}
       }else {
        return {success:false}
       }
     }
    return res;
    } catch (error) {
      
    }
  }                         
                                           
  async getCurrentUser() {
   try {
    // get the current user 
   const session= await this.account.get();
   console.log("session in auth getcurrentuser",session);
   
       if (!session) {
        return null;
       }
       return session;
   } catch (error) {
    console.log("Appwrite service:: getcurrentUser::error",error);
    
   }
   return null;
  }

   

                            async logout() {
                              try {
                                await this.account.deleteSessions();
                              } catch (error) {
                                console.error("Appwrite service :: logout :: error", error);
                              }
                            }
                          }

const service = new AuthService();

export default service;