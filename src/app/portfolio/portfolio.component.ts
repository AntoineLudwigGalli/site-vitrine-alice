import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioList: boolean = false;

  togglePortfolioList() {
    if(!this.portfolioList){
      this.portfolioList = true;
    } else if (this.portfolioList) {
      this.portfolioList = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
