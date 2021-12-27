import { Component, OnInit } from '@angular/core';
import { animationButton } from '../../animations/animations';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
  animations: [
    animationButton
  ]
})
export class ActionButtonComponent implements OnInit {

  state = 'hide';

  constructor() { }

  ngOnInit(): void {
    if (this.state == "hide") {
      setTimeout( () => this.state = "show", 200);
    }
  }

  // show message
  floatingButton() {
    window.alert("Hello world!");
  }

}
