import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerBankComponent } from './career-bank/career-bank.component';
import { CareerDevComponent } from './career-dev/career-dev.component';
import { CareerOtherComponent } from './career-other/career-other.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'notFound', component: NotfoundComponent },
  { path: 'career', component: CareerComponent },
  { path: 'career_bank', component: CareerBankComponent },
  { path: 'career_dev', component: CareerDevComponent },
  { path: 'career_other', component: CareerOtherComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
