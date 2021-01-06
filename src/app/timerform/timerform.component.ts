import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-timerform',
  templateUrl: './timerform.component.html',
  styleUrls: ['./timerform.component.css']
})
export class TimerformComponent implements OnInit {
  timeForm = new FormGroup({
    mm: new FormControl('',[
      Validators.required
      
    ])

  })
  
  constructor() { }

  ngOnInit(): void {
  }

  onNgChange():void{

  }
}
