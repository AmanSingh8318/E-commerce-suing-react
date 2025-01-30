const ev={
    
    appwrite_url:String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    }
    console.log("url is",import.meta.env.VITE_APPWRITE_URL);
    
    
export default ev;