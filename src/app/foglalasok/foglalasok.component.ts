import { Component, OnInit } from '@angular/core';
import { FoglalasService } from '../foglalas.service';

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.scss']
})

export class FoglalasokComponent implements OnInit {
  foglalasok: any[] = [];

  constructor(private foglalasService: FoglalasService) {}

  ngOnInit(): void {
    this.getFoglalasok();
  }

  getFoglalasok(): void {
    this.foglalasService
      .getFoglalasok()
      .subscribe((foglalasok: any[]) => (this.foglalasok = foglalasok));
  }
}

