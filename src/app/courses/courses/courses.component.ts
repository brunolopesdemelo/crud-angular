import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public courses: Course[] = [{
    _id: 'a', name: 'Angular', category: 'front-end'
  }];
  public displayedColumns: string[] = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
