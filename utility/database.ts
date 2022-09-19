
//  import surrealdb 
import Surreal from "surrealdb";

// load Environment Variables
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

// get DATABASE_URL url
const domain = Deno.env.get("DATABASE_URL")

// surrealDB data base
const db = new Surreal(domain);
    
// signin 
await db.signin({
    user: 'root',
    pass: 'root',
});



//  Select a specific  namespace /  database
await db.use('test', 'test');

export default db