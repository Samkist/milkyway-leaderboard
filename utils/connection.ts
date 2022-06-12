import 'reflect-metadata'
import {Service} from "typedi";
import {loadMining} from "./schema/miningSchema";
const mongoose = require('mongoose'), Schema = mongoose.Schema, Model = mongoose.Model;
const combat = require('utils/schema/combatSchema'), loadCombat = combat.combatSchema
const { MONGODB_URI } = process.env

@Service()
class MongoSchema extends Schema {}

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

  const UserSchema = new mongoose.Schema({
    username: {
      require: true,
      type: String
    },
    firstLoggedIn: {
      require: true,
      default: new Date(Date.now()),
      type: Date
    },
    lastLoggedIn: {
      require: true,
      default: new Date(Date.now()),
      type: Date
    },
    combat: [{
          type: Schema.Types.ObjectId, ref: 'Combat'
        }]
  })

  const Mining = mongoose.models.Mining || mongoose.model("Mining", MiningSchema)
  const Combat = mongoose.models.Combat || mongoose.model("Combat", CombatSchema)
  const User = mongoose.models.User || mongoose.model("User", UserSchema)

  return { conn, Combat, User }
}