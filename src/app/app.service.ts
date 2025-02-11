import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }

    getTodoList() {
        return this.http.get("http://localhost:8000/todo/api/todo")
    }

    createTodoItem() {
        return this.http.post("http://localhost:8000/todo/api/todo", {
            description: 'purê',
        })
    }

    deleteTodoItem(id: number) {
        return this.http.delete("http://localhost:8000/todo/api/todo/" + id)
    }

    editTodoItem(id: number) {
        return this.http.put("http://localhost:8000/todo/api/todo/" + id, {
            description: 'cozida',
        })
    }
}