import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {ChangeDetectionStrategy, computed, signal} from '@angular/core';
import {FormControl, FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MatButtonModule, ReactiveFormsModule, MatDividerModule, MatIconModule, FormsModule, MatCheckboxModule, MatFormFieldModule, MatInputModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'homes';
    list: any = []
    addFormControl = new FormControl('');

    constructor(private appService: AppService) {
      this.getTodoList()
     }

    getTodoList() {
      this.appService.getTodoList().subscribe((response) => {
        this.list = response
      })
    }

    createTodoItem() {
      const value = this.addFormControl.value
      if (value === null) {
        return
      }
      this.appService.createTodoItem(value).subscribe((response) => {
        this.getTodoList()
        this.addFormControl.reset()
      })
    }
    updateChecked(e: any) {
      console.log(e)
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
