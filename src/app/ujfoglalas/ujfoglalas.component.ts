import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FoglalasService } from '../foglalas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ujfoglalas',
  templateUrl: './ujfoglalas.component.html',
  styleUrls: ['./ujfoglalas.component.css'],
})
export class UjfoglalasComponent {
  foglalas: any = {};
  sliderValue: number = 2;
  error: any;

  constructor(
    private datePipe: DatePipe,
    private foglalasService: FoglalasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.foglalas.datum = this.getDate();
  }

  getDate(): string {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }

  zipCode(event: Event) {
    const input = event.target as HTMLInputElement;
    const zipCode = input.value;
  
    if (zipCode.length === 4 && !isNaN(+zipCode)) {
    } else {
      input.setCustomValidity('A négyjegyű irányítószámnak 1-9 közötti számmal kell kezdődnie!');
    }
  }

  onSubmit() {
    if (
      !this.foglalas.nev ||
      !this.foglalas.datum ||
      !this.foglalas.iranyitoszam ||
      !this.foglalas.cim
    ) {
      alert('Kérlek, hogy minden mezőt tölts ki!');
      return;
    }
    this.foglalas.fo = this.sliderValue;
    this.foglalasService.createFoglalas(this.foglalas).subscribe(
      (response: any) => {
        console.log('Foglalás elküldve:', response);
        this.router.navigate(['/foglalasok']);
      },
      (error: any) => {
        console.error('Hiba a foglalás elküldése során:', error);
        this.error = error;
        alert('Hibás foglalás beküldés!');
      }
    );
  }
  
  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
