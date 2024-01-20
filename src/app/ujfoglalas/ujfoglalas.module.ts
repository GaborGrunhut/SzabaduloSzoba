import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UjfoglalasComponent } from './ujfoglalas.component';

@NgModule({
  declarations: [UjfoglalasComponent],
  imports: [CommonModule, FormsModule],
  exports: [UjfoglalasComponent],
  providers: [DatePipe],
})
export class UjfoglalasModule {}