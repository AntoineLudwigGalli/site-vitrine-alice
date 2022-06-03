import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  
  displayDiv: boolean = false;
  displayDivBank: boolean = false;
  displayDivOther: boolean = false;
  displayDivDev: boolean = false;

  createOverlay(){ 
  this.displayDiv = true;
  this.displayDivDev = false;
  this.displayDivBank = false;
  this.displayDivOther = false;
  }

  deleteOverlay(){ 
    this.displayDiv = false;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
