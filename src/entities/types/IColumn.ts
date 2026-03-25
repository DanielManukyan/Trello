import type { ITask } from "./ITask"

export interface IColumn{
    id: string,
    title: string,
    boardId: string
    tasks: ITask[]
}