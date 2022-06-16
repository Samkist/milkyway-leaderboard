import {Schema} from "mongoose";
import {CombatFunctions} from "../schema/combatFunctions";
import {MiningFunctions} from "../schema/miningFunctions";
import {UserFunctions} from "../schema/userSchema";

export interface ResponseFunctions {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}

export interface Mining extends MiningFunctions {}

export interface Combat extends CombatFunctions {}

export interface User extends UserFunctions {}