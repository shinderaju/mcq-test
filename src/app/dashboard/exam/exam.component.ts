import { Component, OnInit } from '@angular/core';
import {e} from '@angular/core/src/render3';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  question = {
    text: 'What is capital of India ?',
    options: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata'],
    ans: 2,
    userAns: ''
  };
  questionArray = [
    {
    text: 'What is capital of India ?',
    options: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata'],
    ans: 2,
    userAns: ''
  }, {
      text: 'What is capital of India ?',
      options: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata'],
      ans: 2,
      userAns: ''
    }, {
      text: 'What is capital of India ?',
      options: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata'],
      ans: 2,
      userAns: ''
    }, {
      text: 'What is capital of India ?',
      options: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata'],
      ans: 2,
      userAns: ''
    }];
  mode = 'quiz';
  correct = 0;
  wrong = 0;
  totalMarks = 0;
  constructor() { }
  ngOnInit() {
  }
  onSelectionChange(questionIndex, optionIndex, event) {
    if (event.target.checked) {
      this.questionArray[questionIndex].userAns = optionIndex;
    } else {
      this.questionArray[questionIndex].userAns = '';
    }
  }
  onSubmit() {
    this.mode = 'result';
    console.log(this.questionArray);
  }
}
