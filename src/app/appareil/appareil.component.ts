import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor( private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilStatus;
  }

  getColor(): string {
    if (this.appareilStatus === 'Allumé') {
      return 'green';
    } else if (this.appareilStatus === 'Eteint'){
      return 'red';
    }
  }

  onSwitchOn(): void {
    this.appareilService.switchOnOne(this.index);
  }

  onSwitchOff(): void {
    this.appareilService.switchOffOne(this.index);
  }


}
