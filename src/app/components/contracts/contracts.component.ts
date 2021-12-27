import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  // for test
  contracts = [
    {
      name: 'Darlene Robertson',
      type: 'Traditional',
      date: '2021-03-04',
      amount: 200,
      status: 'active'
    },
    {
      name: 'Darlene Robertson',
      type: 'Traditional',
      date: '2021-03-04',
      amount: 200,
      status: 'active'
    },
    {
      name: 'Darlene Robertson',
      type: 'Traditional',
      date: '2021-03-04',
      amount: 200,
      status: 'pending'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
