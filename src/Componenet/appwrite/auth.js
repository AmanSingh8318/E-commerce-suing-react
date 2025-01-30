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
          const userAccount = await this.account.create(ID.unique(),
       email, password,  name); 
       // if user account created then go  to verfication after that return the success messgae
      if (userAccount) {
        const verifed_user= await this.account.createVerification("https://localhost:5173/verify");
          if (verifed_user) {
            // window.location.replace("/login")
            history.pushState({}, "", "/login");

          }
        return {success:true, message:"emai; verifcation sent"}
    }
        return userAccount;  // if user is not verified simply return it
         } catch (error) {
          throw error;
         }
  }
  

  async login({ email, password }) {
    try {
      // if the  session is created 
       const session =await this.account.createEmailPasswordSession(email, password);
        // get the current user 
       const user=await this.account.get();

        // now verfiy the user email is  
        //  if (!user.emailVerification) {   
        //   await this.account.deleteSession("current");
        //   throw new Error("Email not verified. Please verify your email before logging in.");
        //  }
         return session;
    } catch (error) {
      throw error;
    }
  }

    // update the verfication 
    async updateVerification(userId,secret){
      try {
        return  await this.updateVerification(userId,secret);
      } catch (error) {
        
      }
    }

  async getCurrentUser() {
   try {
    return await this.account.get();
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