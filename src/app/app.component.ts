import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    // template: '<h1>Hello world!</h1>',
})
export class AppComponent {
    title = 'homes';
    list: any = []

    constructor(private appService: AppService) {
      this.getTodoList()
     }

    getTodoList() {
      this.appService.getTodoList().subscribe((response) => {
        this.list = response
      })
    }

    createTodoItem() {
      this.appService.createTodoItem().subscribe((response) => {
        this.getTodoList()
        console.log(response)
      })
    }

    deleteTodoItem(id: number) {
      this.appService.deleteTodoItem(id).subscribe((response) => {
        this.getTodoList()
        console.log(response)
      })
    }

    editTodoItem(id: number) {
      this.appService.editTodoItem(id).subscribe((response) => {
        this.getTodoList()
        console.log(response)
      })
    }

}
