import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {



  constructor(private httpClient: HttpClient) { }

  listCourses(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'Front- end' },
      { _id: '2', name: 'Java', category: 'Back-end' },
      {_id: '3', name: 'DataBase', category: 'MySql'}
    ];
  }
}
