import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(httpClient: HttpClient) {}

  list() {
    return [{ _id: 'a', name: 'Angular', category: 'Front-End' }];
  }
}
