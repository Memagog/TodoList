export interface Todo {
    id: number;
    title: string;
    status: boolean;
}

export interface updateTodo {
    id: number;
    title?: string;
    status: boolean;
} 