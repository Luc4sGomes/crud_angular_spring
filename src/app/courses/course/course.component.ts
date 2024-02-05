import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['_id','name', 'category'];

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService, public dialog: MatDialog) {
    this.courses$ = this.coursesService.listCourses().pipe(
      catchError(error => {
        this.onError('Error to Load Courses.')
        return [];
      })
    );
  }


  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
