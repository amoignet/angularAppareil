import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'Eteint'
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'Allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'Eteint'
    }
  ];


  constructor() { }

  emitAppareilSubject(): void {
    this.appareilsSubject.next(this.appareils.slice());
  }

  getAppareilById(id: number): {id: number, name: string, status: string } {
    const appareil = this.appareils.find(
      (appareilId) => {
        return appareilId.id === id;
      }
    );
    return appareil;
  }

  switchOnAll(): void {
    for (let appareil of this.appareils) {
      appareil.status = 'Allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll(): void {
    for (let appareil of this.appareils) {
      appareil.status = 'Eteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(i: number): void {
    this.appareils[i].status = 'Allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(i: number): void {
    this.appareils[i].status = 'Eteint';
    this.emitAppareilSubject();
  }


}
