import { Component, Input } from '@angular/core';
import { EventModel } from '../../../models/event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.scss'
})
export class EventItemComponent {

  @Input() event: EventModel | undefined;

}