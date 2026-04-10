export interface ITask{
    order: number;
    id: string,
    title:string,
    completed: boolean,
    columnId: string,
    description?: string,
    comments?: string[]
}
