import { Component, OnInit } from '@angular/core';
import introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let intro = introJs();
// Initialize steps
intro.setOptions({
    steps: [
        {
            element: '#step_1',
            intro: "Welcome to our login page guide.",
            position: 'left'
        },
        {
            element: '#step_2',
            intro: 'Email Input field',
            position: 'bottom'
        },
        {
            element: '#step_3',
            intro: 'Password Input field',
            position: 'bottom'
        },
        {
          element: '#step_4',
          intro: 'Login Button',
          position: 'bottom'
      },
      {
        element: '#step_5',
        intro: 'forget password link',
        position: 'top'
    },
    {
      element: '#step_6',
      intro: 'SignUp link',
      position: 'top'
  }
    ]
});

// Start tutorial
intro.start();
  }

}
