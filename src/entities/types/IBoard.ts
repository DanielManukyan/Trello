export interface IBoard{
    id: string,
    title: string,
    status: "Private" | "Public",
    columnsIds?: string[]
}