import { TaskModel } from '../models/character';

export class HttpStoreTasks {
    url: string;
    constructor() {
        this.url = 'http://localhost:3521/tasks';
    }
    getTasks(): Promise<Array<TaskModel>> {
        // GET
        return fetch(this.url).then((resp) => {
            console.log(resp.status);
            return resp.json();
        });
    }
    getTask(id: TaskModel['id']): Promise<TaskModel> {
        // GET
        return fetch(this.url + `/${id}`).then((resp) => resp.json());
    }
    setTask(task: TaskModel): Promise<TaskModel> {
        // POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    updateTask(task: TaskModel): Promise<Partial<TaskModel>> {
        // PUT / PATCH
        return fetch(this.url + `/${task.id}`, {
            method: 'PATCH',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    deleteTask(id: string): Promise<number> {
        // DELETE
        return fetch(this.url + `/${id}`, {
            method: 'DELETE',
        }).then((response) => response.status);
    }
}
