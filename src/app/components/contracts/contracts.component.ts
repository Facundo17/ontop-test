import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/animations/animations';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class ContractsComponent implements OnInit {

  state = "hide";
  state2 = "show";

  // for test
  contracts = [
    {
      image: '../../assets/images/test-image.jpg',
      name: 'Darlene Robertson',
      type: 'Traditional',
      date: '2021-03-04',
      amount: 200,
      status: 'active'
    },
    {
      image: '../../assets/images/test-image.jpg',
      name: 'Darlene Robertsonssssssssssssssssssssssssss',
      type: 'Traditional',
      date: '2021-03-04',
      amount: 200,
      status: 'active'
    },
    {
      image: '../../assets/images/test-image.jpg',
      name: 'Darlene Robertson',
      type: 'Traditional',
      date: '2021-03-04',
      amount: 200,
      status: 'pending'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    if (this.state == "hide") {
      // delay for test
      setTimeout( () => {
        this.state = "show";
        this.state2 = "hide";
      }, 1000);
    }
  }

}
