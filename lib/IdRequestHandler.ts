import {NextApiRequest, NextApiResponse} from "next";
import {ResponseFunctions} from "../utils/types";const mongoose = require('mongoose'), Model = mongoose.Model;
import {RequestHandler} from "./RequestHandler";

type handlerFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<boolean>;

export class IdRequestHandler extends RequestHandler {
  modelName: string
  handler: handlerFunction

  constructor(modelName: string) {
    super(modelName)
    this.handler = async (req: NextApiRequest, res: NextApiResponse) => {
      const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions

      const catcher = (error: Error) => {
        res.status(400).json({error})
        return false
      }

      const id: string = req.query.id as string

      const handleCase: ResponseFunctions = {
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
          res.json(
              await (
                  await this.getModel()
              ).findById(id).catch(catcher))
        },
        POST: async (req: NextApiRequest, res: NextApiResponse) => {
          res.json(
              await (
                  await this.getModel()
              ).findByIdAndUpdate(id, req.body, {new: true}).catch(catcher)
          )
        },
        DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
          res.json(
              await (
                  await this.getModel()
              ).findById()
          )
        }
      }

      // Check if there is a response for the particular method, if so invoke it, if not response with an error
      const response = handleCase[method]
      if (response) response(req, res)
      else res.status(400).json({error: "No Response for This Request"})
      return true
    }
  }
}