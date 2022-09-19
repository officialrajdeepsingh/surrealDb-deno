import { Handlers } from "$fresh/server.ts";

//  Import Box components from island
import Box from "../islands/Box.tsx";

//  Import Item components from island
import Item from "../islands/Item.tsx";

// to load Envirement variable 
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

// get Envirement variable 
let domain= Deno.env.get("DOMAIN")


interface todo {
  id: string;
  title:string;
  isDone:boolean
}

//  Call get API with fresh handler
export const handler: Handlers<todo | null> = {

  async GET(_, ctx) {
    
    // call get api
    const response = await fetch(domain + "/api/get").then(      
      (response)=> response.json()
    ).then(
      (response)=> JSON.parse(response)
    ).catch(
      error=> console.log(error)
    );

    //  pass data into component props
    return ctx.render(response);
  }
};

export default function Home({data}: { data: any; }) {
  return (
    <div class="h-screen w-screen flex flex-col items-center justify-center bg-blue-600 font-sans">
      <div class="flex flex-row w-4/6 justify-center mx-auto">
        <h2 class="m-2 p-1 text-5xl font-mono font-serif cursor-pointer">Deno</h2>
        <h2 class="m-2 p-1 text-5xl font-mono font-serif cursor-pointer">+</h2>
        <h2 class="m-2 p-1 text-5xl font-mono font-serif cursor-pointer">SurrealDB</h2>
      </div>

      <div class="bg-white rounded shadow container mx-auto p-3 m-4 w-3/6 lg:w-3/6 xl:w-3/6 md:w-3/6 2xl:w-3/6 ">
            <div class=" flex mb-4 flex-col py-2">
                <h1 class="text-gray-500  text-lg">Todo List</h1>
                <Box/>
            </div>
            <div class="p-2">
              {
                data.map( (item: any) => 
                  <Item item={item} />
                )
              }
            </div>
        </div>
    </div>
  );
}
