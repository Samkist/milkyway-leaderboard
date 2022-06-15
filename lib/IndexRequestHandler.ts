import {NextApiRequest, NextApiResponse} from "next";
import {ResponseFunctions} from "./types";
import {connect} from "../utils/connection";
import {RequestHandler} from "./RequestHandler";
const mongoose = require('mongoose'), Model = mongoose.Model;

type handlerFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<boolean>;

export class IndexRequestHandler extends RequestHandler {
  handler: handlerFunction

  constructor(modelName: string) {
    super(modelName)
    this.handler = async (req: NextApiRequest, res: NextApiResponse) => {
      const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions

      const catcher = (error: Error) => {
        return res.status(400).json({error})
      }

      const handleCase: ResponseFunctions = {
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
          const {modelMap} = await connect() // connect to database
          return res.json(await modelMap.get(modelName).find({}).catch(catcher))
        },
        POST: async (req: NextApiRequest, res: NextApiResponse) => {
          const {modelMap} = await connect() // connect to database
          return res.json(await modelMap.get(modelName).create(req.body).catch(catcher))
        },
      }

      // Check if there is a response for the particular method, if so invoke it, if not response with an error
      const response = handleCase[method]
      if (response) return response(req, res)
      else return res.status(400).json({error: "No Response for This Request"})
    }
  }
}