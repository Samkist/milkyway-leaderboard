import {Mining} from "../types";
import {Combat} from "../types";
import {User} from "../types";
import React from "react";


export interface UserProps {
  users: Array<User>
  children?: React.ReactNode
}

export interface MiningProps {
  miningData: Array<Mining>
}

export interface CombatProps {
  combatData: Array<Combat>
}
