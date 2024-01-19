import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoglalasokComponent } from './foglalasok/foglalasok.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FoglalasService } from './foglalas.service';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [FoglalasService],
  bootstrap: [AppComponent],
})
export class AppModule {}