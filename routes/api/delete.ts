import { HandlerContext } from "$fresh/server.ts";

// import database 
import db from "../../utility/database.ts";



export async function handler(_req: Request, _ctx: HandlerContext) {
    // get url
    const url = new URL(_req.url);

    // get todo id base on id we delete todo.
    const todoid = url.searchParams.get("todoID") || "";


    try {

        // delete specify todo item 
        await db.delete(todoid);

        return Response.json({ sucessfull: "your data submit sucessfully " })

    } catch (error) {

        return new Response(error);
    }

}