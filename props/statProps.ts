import {Mining} from "../lib/types";
import {Combat} from "../lib/types";
import {User} from "../lib/types";
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
