import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Todo App</h1>
    @if(!isUpdateWorkFormActive ) {
    <div>
      <label>Work</label>
      <input [(ngModel)]="work" />
      <button (click)="save()">Save</button>
    </div>
    }@else {
    <div>
      <label>Update Work</label>
      <input [(ngModel)]="updateWork" />
      <button (click)="update()">Update</button>
    </div>
    }
    <hr />
    <div>
      <ul>
        @for(data of todos; track data) {
        <li>
          {{ data }}
          @if (!isUpdateWorkFormActive) {

          <button (click)="get($index)">Update</button>
          <button (click)="delete($index)">Delete</button>
          }
        </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      h1 {
        text-align: center;
        color: #4caf50;
        font-family: 'Arial', sans-serif;
      }

      div {
        margin: 20px auto;
        max-width: 400px;
        text-align: center;
      }

      label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
      }

      input {
        padding: 10px;
        width: 80%;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 1px solid #ddd;
      }

      button {
        padding: 10px 15px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 5px;
      }

      button:hover {
        background-color: #45a049;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      li {
        background: #f9f9f9;
        margin: 10px 0;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
      }

      hr {
        margin: 20px auto;
        width: 80%;
      }
    `,
  ],
})
export class AppComponent {
  work: string = '';
  updateWork: string = '';
  updateIndex: number = 0;
  todos: string[] = [];
  isUpdateWorkFormActive: boolean = false;
  save() {
    this.todos.push(this.work);
    this.work = '';
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }
  get(index: number) {
    this.updateIndex = index;
    this.updateWork = this.todos[index];
    this.isUpdateWorkFormActive = true;
  }
  update() {
    this.todos[this.updateIndex] = this.updateWork;
    this.isUpdateWorkFormActive = false;
  }
}
