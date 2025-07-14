import { client } from "./client.js";

const init = async()=>{
    await client.set("name:101","testing")
    const result = await client.get("name:101");
    console.log("RESULT: ",result)
}

init()