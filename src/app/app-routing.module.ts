import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoglalasokComponent } from './foglalasok/foglalasok.component';
import { HomeComponent } from './home/home.component';
import { UjfoglalasComponent } from './ujfoglalas/ujfoglalas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'foglalasok', component: FoglalasokComponent },
  { path: 'ujfoglalas', component: UjfoglalasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}