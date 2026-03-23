import type { IColumn } from "./IColumn";

export interface IBoard{
    id: string,
    title: string,
    status: string
    columns: IColumn[]
}