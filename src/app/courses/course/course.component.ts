import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {

  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService;



  constructor(private coursesService: CoursesService) {
    //this.coursesService = new CoursesService();
  }

  ngOnInit(): void {
    this.courses = this.coursesService.listCourses();
  }

}
