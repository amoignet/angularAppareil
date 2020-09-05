import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
    {
      name: 'Machine à laver',
      status: 'Eteint'
    },
    {
      name: 'Télévision',
      status: 'Allumé'
    },
    {
      name: 'Ordinateur',
      status: 'Eteint'
    }
  ];


  constructor() { }

  switchOnAll(): void {
    for (let appareil of this.appareils) {
      appareil.status = 'Allumé';
    }
  }

  switchOffAll(): void {
    for (let appareil of this.appareils) {
      appareil.status = 'Eteint';
    }
  }

  switchOnOne(i: number): void {
    this.appareils[i].status = 'Allumé';
  }

  switchOffOne(i: number): void {
    this.appareils[i].status = 'Eteint';
  }


}
