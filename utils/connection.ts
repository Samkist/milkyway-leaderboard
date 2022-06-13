import 'reflect-metadata'
import {loadMining} from "./schema/miningFunctions";
import {loadCombat} from "./schema/combatFunctions";
import {loadUser} from "./schema/userSchema";
const mongoose = require('mongoose'), Schema = mongoose.Schema, Model = mongoose.Model;
const { MONGODB_URI } = process.env
let modelMap = new Map<string, typeof Schema>();

export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch(err => console.log(err))
  console.log("MongoDB successfully connected")

  const FarmingSchema = Schema({

  })

  const CookingSchema = Schema({

  })

  const TamingSchema = Schema({

  })

  const MiningSchema = loadMining()

  const CombatSchema = loadCombat()

  const UserSchema = loadUser()

  const Mining = mongoose.models.Mining || mongoose.model("Mining", MiningSchema)
  const Combat = mongoose.models.Combat || mongoose.model("Combat", CombatSchema)
  const User = mongoose.models.User || mongoose.model("User", UserSchema)

  mongoose.models.forEach((value: string, key: typeof Model) => {
    modelMap.set(value, key)
  })

  return { conn, modelMap }
}