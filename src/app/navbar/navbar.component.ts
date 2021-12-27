import { Component, OnInit } from '@angular/core';
import { slideBar } from '../animations/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    slideBar
  ]
})
export class NavbarComponent implements OnInit {

  state = "hide";

  constructor() { }

  ngOnInit(): void {
    if (this.state == "hide") {
      setTimeout( () => this.state = "show", 200);
    }
  }

}
