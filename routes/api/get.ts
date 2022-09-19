import { HandlerContext } from "$fresh/server.ts";
import db from "../../utility/database.ts";


export async function handler(_req: Request, _ctx: HandlerContext) {

    try {
        // get all todo list
        const todo = await db.select("todo");

        // return todo 
        return Response.json(JSON.stringify(todo))

    } catch (error) {

        return new Response(error);
    }


}