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
            title: 'batata',
            description: 'purê',
        })
    }
}