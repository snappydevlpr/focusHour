import { Component, HostBinding, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations:[
    trigger('phrase1', [
      state('void', style({
        display:'block'
      })),
      state('*', style({
        display:'none'
      })),  
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:1}),
        animate('2s', style({
          opacity:0,
        })),
      ]),
    ]),

    trigger('phrase2', [
      state('void', style({
        display:'none'
      })),
      state('*', style({
        display:'none'
      })),  
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0, display:'block'}),
        animate('2s', style({
          display:'block'
        })),

        style({opacity:1}),
        animate('2s', style({
          opacity:0,
        })),
      ]),
    ]),

    trigger('main', [
      state('void', style({
        display:'none'
      })),
      state('*', style({
        opacity:1,
        display:'block'
      })),  
      transition(':enter', [   // :enter is alias to 'void => *'

        style({opacity:0, display:'block'}),
        animate('4s', style({
          display:'block'
        })),

        style({opacity:1}),
        animate('2s', style({
          opacity:1,
        })),
      ]),
    ]),
  ]
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
