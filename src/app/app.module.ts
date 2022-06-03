import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CareerBankComponent } from './career-bank/career-bank.component';
import { CareerDevComponent } from './career-dev/career-dev.component';
import { CareerOtherComponent } from './career-other/career-other.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CareerComponent,
    PortfolioComponent,
    CareerBankComponent,
    CareerDevComponent,
    CareerOtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
