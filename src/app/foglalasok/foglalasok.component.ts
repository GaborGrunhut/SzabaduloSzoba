import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoglalasService } from '../foglalas.service';

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.css']
})
export class FoglalasokComponent implements OnInit {
  foglalasok: any[] = [];

  constructor(private foglalasService: FoglalasService, private router: Router) {}

  ngOnInit(): void {
    this.getFoglalasok();
  }

  getFoglalasok(): void {
    this.foglalasService
      .getFoglalasok()
      .subscribe((foglalasok: any[]) => {
        this.foglalasok = foglalasok.sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime());
      });
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
  }

  navigateToUjFoglalas(): void {
    this.router.navigate(['/ujfoglalas']);
  }
}

