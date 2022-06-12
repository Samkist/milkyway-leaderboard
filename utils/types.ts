import {Schema} from "mongoose";
import {CombatSchema} from "./schema/combatSchema";
import {MiningSchema} from "./schema/miningSchema";

export interface ResponseFunctions {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}

export interface Mining extends MiningSchema {}

export interface Combat extends CombatSchema {}

export interface User {
  _id?: string // A UUID
  username: string
  firstLoggedIn: Date
  lastLoggedIn: Date
  combat: { type: Schema.Types.ObjectId, ref: 'Combat' }
}