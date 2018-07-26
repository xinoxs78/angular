import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beat-application',
  templateUrl: './beat-application.component.html'
})
export class BeatApplicationComponent implements OnInit {

  beats = [{id: 'radio1', text: 'SecureBeat', value: 'SECUREBEAT'},
  {id: 'radio2', text: 'StarBeat', value: 'STARBEAT'},
  {id: 'radio3', text: 'BoxBeat', value: 'BOXBEAT'},
  {id: 'radio4', text: 'ExaBeat', value: 'EXABEAT'},
  {id: 'radio5', text: 'ForceBeat', value: 'FORCEBEAT'},
  {id: 'radio6', text: 'WorkBeat', value: 'WORKBEAT'}
 ];

  beatSelected: string;

  constructor() { }

  ngOnInit() {
  }

}
