import { NextApiRequest, NextApiResponse } from "next";

export default async function  handler(req: NextApiRequest, res: NextApiResponse){
    return res.json({message: "hello"});
}