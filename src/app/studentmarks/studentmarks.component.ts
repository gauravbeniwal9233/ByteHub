import { Component } from '@angular/core';
import { Student } from "../interfaces/student"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentmarks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentmarks.component.html',
  styleUrl: './studentmarks.component.scss'
})
export class StudentmarksComponent {

  students: Student[] = [
    { Id: 100, name: 'Gaurav', marks:500 },
    { Id: 100, name: 'Golu', marks:300 },
    { Id: 100, name: 'Molu', marks:600 },
    { Id: 100, name: 'Beniwal', marks:200 },
    { Id: 100, name: 'Benny', marks:500 },
  ]

}
