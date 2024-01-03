import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Front- end'},
    {_id: '2', name: 'Java', category: 'Back-end'}
  ];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {

  }

}
