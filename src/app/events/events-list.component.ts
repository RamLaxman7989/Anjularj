import{Component,OnInit} from '@angular/core';
import { ToastrService } from '../common/toastr.sevice';
import { EventService } from './shared/event.service';


declare let toastr: any

@Component({
    selector: 'events-list',
    template: `
   <div>
    <h1>Upcoming Angular  Events</h1>
    <hr/>
    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
            <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
     </div>
</div>
`

})
export class EventsListComponent implements OnInit{
  events: any[] | undefined;
  constructor(private eventService: EventService, private toastr: ToastrService){

  }
  ngOnInit() {
    this.events= this.eventService.getEvents()
  }
  handleThumbnailClick(eventName: any){
    this.toastr.success(eventName)
  }
        
}