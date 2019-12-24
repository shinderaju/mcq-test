import { Component, OnInit } from '@angular/core';
import {e} from '@angular/core/src/render3';
import { ServercallService } from '../../shared/services/servercall.service';
import {LocalstorageService} from '../../shared/services/localstorage.service';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  question = {
    question: 'What is capital of India ?',
    options: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata'],
    ans: 2,
    userAns: ''
  };
  questionArray = [
    {
      question: 'What is capital of India ?',
      options: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata'],
      ans: 2,
      userAns: ''
    },
    {
      question: 'What is capital of India ?',
      options: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata'],
      ans: 2,
      userAns: ''
    },
    {
      question: 'What is capital of India ?',
      options: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata'],
      ans: 2,
      userAns: ''
    },
    {
      question: 'What is capital of India ?',
      options: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata'],
      ans: 2,
      userAns: ''
    }
    ];
  userAns = [];
  mode = 'quiz';
  correct = 0;
  wrong = 0;
  totalMarks = 0;
  obtainedMarks = 0;
  constructor(private servercallService: ServercallService, private localstorageService: LocalstorageService) { }
  ngOnInit() {
    const testId = this.localstorageService.getItem('testId');
    if (testId) {
      this.getCurrentTest(testId);
    } else {
      this.getNewTest();
    }
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
    for (let i = 0; i < this.questionArray.length; i++) {
      this.userAns.push(this.questionArray[i].userAns);
    }
    this.servercallService.submitTest(this.userAns).subscribe((testObject) => {
      console.log('testobjetc', testObject);
      this.localstorageService.removeItem('testId');
      this.questionArray = testObject['questions'];
      this.correct = testObject['correct'];
      this.wrong = testObject['wrongAns'];
      this.totalMarks = testObject['totalMarks'];
      this.obtainedMarks = testObject['obtainedMarks'];
      //{userAns, wrongAns, obtainedMarks, totalMarks, correct, questions:givenTest.questions}
    });
  }
  getNewTest() {
    this.servercallService.getNewTest().subscribe((testObject) => {
      console.log('testobjetc', testObject);
      this.localstorageService.setItem('testId', testObject['testId']);
      this.questionArray = testObject['questions'];
    });
  }
  getCurrentTest(testId) {
    this.servercallService.getCurrentTest(testId).subscribe((testObject) => {
      this.localstorageService.setItem('testId', testObject['testId']);
    });
  }
}
