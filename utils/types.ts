import {Schema} from "mongoose";
import {Combat} from "./schema/combat";

export interface ResponseFunctions {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}

export C

export interface User {
  _id?: string // A UUID
  username: string
  firstLoggedIn: Date
  lastLoggedIn: Date
  combat: { type: Schema.Types.ObjectId, ref: 'Combat' }
}