import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  floatingButton() {
    window.alert("Hello world!");
  }

}
