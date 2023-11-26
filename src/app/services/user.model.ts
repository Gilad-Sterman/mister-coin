import { MoveModel } from "./move.model"

export interface User {
    name: string
    coins: number
    moves: MoveModel[]
}
