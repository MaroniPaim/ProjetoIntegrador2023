import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-quero-comecar',
  templateUrl: './quero-comecar.page.html',
  styleUrls: ['./quero-comecar.page.scss'],
})
export class QueroComecarPage implements OnInit {
  constructor() {}

  items: string[]=[];


  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push(`Psicologo ${i}`);
    }
  }
  showSpecialties: boolean = false;

  toggleSpecialties(): void {
    this.showSpecialties = !this.showSpecialties;
  }
}
