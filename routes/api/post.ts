import { HandlerContext } from "$fresh/server.ts";

// import module uuid from deno 
import * as mod from "https://deno.land/std@0.156.0/uuid/mod.ts";

// import database 
import db from "../../utility/database.ts";


export async function handler(_req: Request, _ctx: HandlerContext) {
    // get url
    const url = new URL(_req.url);

    // get title from url
    const title = url.searchParams.get("title") || "";

    try {

        // Create a new person with a random id

        const NAMESPACE_URL = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";

        // create a uniue uuid for demo purpose
        const uuid = await mod.v5.generate(NAMESPACE_URL, new TextEncoder().encode("python.org"));

        // create a new data base on value
        const created = await db.create("todo", {
            uuid: uuid,
            title: title,
            isDone: false
        });

        // return data
        return Response.json({ sucessfull: "your data submit sucessfully", created })

    } catch (error) {

        return new Response(error);
    }


}