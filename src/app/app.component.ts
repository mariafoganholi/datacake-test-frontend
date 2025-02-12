import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MatTableModule, MatButtonModule, ReactiveFormsModule, MatDividerModule, MatIconModule, FormsModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatListModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    list: any = []
    addFormControl = new FormControl('');
    updateFormControl = new FormControl('');
    editing: number | undefined
    displayedColumns: string[] = ['check', 'item', 'actions'];

    constructor(private appService: AppService) {
     }

     ngOnInit() {
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
      this.appService.createTodoItem(value).subscribe(() => {
        this.getTodoList()
        this.addFormControl.reset()
      })
    }

    deleteTodoItem(id: number) {
      this.appService.deleteTodoItem(id).subscribe(() => {
        this.getTodoList()
      })
    }

    updateDescription(id: number) {
      const value = this.updateFormControl.value
      if (value === null) {
        return
      }
      this.appService.editTodoItem(id, undefined, value).subscribe(() => {
        this.getTodoList()
        this.stopEditing()
      })
    }

    startEditing(id: number) {
      const item = this.list.find((i: any) => i.id === id)
      if (!item) return
      this.editing = item.id
      this.updateFormControl.setValue(item.description)
    }

    stopEditing() {
      this.editing = undefined
      this.updateFormControl.reset()
    }

    updateChecked(id:number, checked: boolean) {
      this.appService.editTodoItem(id, checked).subscribe(() => {
        this.getTodoList()
      })
    }

}
