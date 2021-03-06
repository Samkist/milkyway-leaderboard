const mongoose = require('mongoose'), Schema = mongoose.Schema

export const loadMining = () => {
  return Schema({
    _id: {
      require: true,
      type: String
    },
    blocksMined: {
      require: true,
      default: 0,
      type: Number
    },
    blocksPlaced: {
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

export interface MiningFunctions {
  id?: string
  blocksMined: number
  blocksPlaced: number
  experienceGained: number
  pickaxesBroken: number
}