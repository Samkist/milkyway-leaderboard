import {Schema} from "mongoose";

export const loadUser = () => {
  return new Schema({
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
}

export interface UserFunctions {
  _id?: string // A UUID
  username: string
  firstLoggedIn: Date
  lastLoggedIn: Date
  combat: { type: Schema.Types.ObjectId, ref: 'Combat' }
  mining: { type: Schema.Types.ObjectId, ref: 'Mining' }
}