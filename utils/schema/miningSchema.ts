const mongoose = require('mongoose'), Schema = mongoose.Schema

export const loadMining = () => {
  return Schema({
    mined: {
      require: true,
      default: 0,
      type: Number
    },
    placed: {
      require: true,
      default: 0,
      type: Number
    },
    experienceGained: {
      require: true,
      default: 0,
      type: Number
    },
    pickaxesBroken: {
      require: true,
      default: 0,
      type: Number
    }
  })
}

export interface MiningSchema {
  id?: string
  mined: number
  placed: number
  experienceGained: number
  pickaxesBroken: number
}