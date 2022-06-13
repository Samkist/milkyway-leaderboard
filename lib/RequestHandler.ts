import {NextApiRequest, NextApiResponse} from "next";
import {connect} from "../utils/connection";
const mongoose = require('mongoose'), Model = mongoose.Model;

type HandlerFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<boolean>;

export abstract class RequestHandler {
  modelName: string
  handler: HandlerFunction

  protected constructor(modelName: string) {
    this.modelName = modelName
  }

  async getModel(): Promise<typeof Model> {
    return await connect()
  }
  getHandler(): HandlerFunction {
    return this.handler
  }
}