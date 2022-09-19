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


export default function Item({ item }) {

    // todo
    const [todo, setTodoID] = useState(
        {
            id: item.id,
            title: item.title,
            uuid: item.uuid
        }
    );

    // show Notification base on successful
    const [successful, setSuccessful] = useState(false);

    //  delete dfunction
    function deleteItem() {

        if (todo.id) {
            //  call delete api
            fetch(domain + `/api/delete?todoID=${encodeURIComponent(todo.id)}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log("your data submit sucessfully ");
                    setSuccessful(true)
                });
        }
    }


    // isdone
    function isDone() {

        if (todo.id) {
            //  call isdone api
            fetch(`/api/isdone?todoID=${encodeURIComponent(todo.id)}&todoTitle=${encodeURIComponent(todo.title)}&todoUuid=${encodeURIComponent(todo.uuid)}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log("your data submit sucessfully ");
                    setSuccessful(true)
                });
        }
    }

    return (
        <>

            <Notification successful={successful} setSuccessful={setSuccessful} />

            <div class="flex mb-4 items-center">
                <p class={`${item.isDone === false ? "w-full text-green-500 cursor-pointer" : " w-full line-through decoration-purple-600 text-green-500 cursor-pointer"}`}>{item.title}</p>
                <button onClick={isDone} class="flex-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500 w-32">
                    {item.isDone === true ? "Done" : " Not done"}
                </button>
                <button onClick={deleteItem} class="flex-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500 w-24">Remove</button>
            </div>
        </>
    );
}


