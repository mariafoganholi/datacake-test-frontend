import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }

    getTodoList() {
        return this.http.get("http://localhost:8000/todo/")
    }

    createTodoItem(value: string) {
        return this.http.post("http://localhost:8000/todo/", {
            description: value,
        })
    }

    deleteTodoItem(id: number) {
        return this.http.delete("http://localhost:8000/todo/" + id)
    }

    editTodoItem(id: number, checkedArg?: boolean, value?: string) {
        return this.http.put("http://localhost:8000/todo/" + id, {
            checked: checkedArg,
            description: value,
        })
    }
}