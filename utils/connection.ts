import 'reflect-metadata'
import {loadMining} from "../schema/miningFunctions";
import {loadCombat} from "../schema/combatFunctions";
import {loadUser} from "../schema/userSchema";
const mongoose = require('mongoose'), Schema = mongoose.Schema, Model = mongoose.Model;
const { MONGODB_URI } = process.env
let modelMap = new Map<string, typeof Schema>();

function addModel(key: string, schema: typeof Schema) {
  if(!modelMap.get(key)) {
    const model = mongoose.models[key] || mongoose.model(key, schema)
    modelMap.set(key, model)
  }
}

export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch(err => console.log(err))

  const MiningSchema = loadMining()

  const CombatSchema = loadCombat()

  const UserSchema = loadUser()

  addModel("Mining", MiningSchema)
  addModel("Combat", CombatSchema)
  addModel("User", UserSchema)


  return { conn, modelMap }
}

export default modelMap