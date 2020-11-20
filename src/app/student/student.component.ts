import { Component, OnInit } from '@angular/core';
import {IStudent} from './IStudent';
import {StudentsDao} from './StudentDao';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = StudentsDao;
  studentParent: IStudent;
  mark = 0;
  constructor() { }

  ngOnInit(): void {
  }

  setDetail(student: IStudent) {
    this.studentParent = student;
  }

  getMark(value: number) {
    this.mark = value;
  }
}
