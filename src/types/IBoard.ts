import type { IColumn } from "./IColumn";

export interface IBoard{
    id: string,
    title: string,
    status: "Private" | "Public",
    columns: IColumn[]
}