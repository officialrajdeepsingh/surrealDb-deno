import { useState } from "preact/hooks";

// import Notification from components
import Notification from "../components/Notification.tsx";

// // to load Envirement variable 
// import "https://deno.land/x/dotenv@v3.2.0/load.ts";

// // get Envirement variable 
// let domain= Deno.env.get("DOMAIN")

interface todo {
    id: string;
    title: string;
    isDone: boolean
}



export default function Box() {

    //  title
    const [title, setTitle] = useState("");

    // show Notification base on successful
    const [successful, setSuccessful] = useState(false);


    function submit() {

        if (title) {
            //  call post api 
            fetch(`/api/post?title=${encodeURIComponent(title)}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log("your data submit sucessfully ");
                    
                    // change false to true
                    setSuccessful(true)
                });
        }
    }



    return (
        <>
          <Notification  successful={successful}  setSuccessful={setSuccessful} />
            
            <div class="flex mt-4 justify-between">
                <input onChange={(event) => setTitle(event.currentTarget.value)} class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-600" placeholder="Add Todo" />
                <button onClick={submit} class="flex-shrink p-2 border-2 rounded text-purple-500 border-purple-500 hover:text-white hover:bg-purple-500 w-24">Add</button>
            </div>
        </>
    );
}


