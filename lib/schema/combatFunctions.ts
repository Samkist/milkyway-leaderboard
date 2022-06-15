const mongoose = require('mongoose'), Schema = mongoose.Schema

export const loadCombat = () => {
  const PvpSchema = Schema({
    kills: {
      require: true,
      default: 0,
      type: Number
    },
    deaths: {
      require: true,
      default: 0,
      type: Number
    },
    highestKillStreak: {
      require: true,
      default: 0,
      type: Number
    },
    currentKillStreak: {
      require: true,
      default: 0,
      type: Number
    }
  })

  const PveSchema = Schema({
    kills: {
      require: true,
      default: 0,
      type: Number
    },
    deaths: {
      require: true,
      default: 0,
      type: Number
    },
    experienceGained: {
      require: true,
      default: 0,
      type: Number
    }
  })

  return Schema({
    pvp: PvpSchema,
    pve: PveSchema
  })
}

interface Pvp {
  kills: number
  deaths: number
  highestKillstreak: number
  currentKillstreak: number
}

interface Pve {
  kills: number
  deaths: number
  experiencedGained: number
}

export interface CombatFunctions {
  id?: string
  pve: Pve
  pvp: Pvp
}