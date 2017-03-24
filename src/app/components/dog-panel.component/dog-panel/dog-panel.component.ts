import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DogDetail} from "../../../model/dog-detail";
import {Appointment} from "../../../model/appointment";

@Component({
  selector: 'app-dog-panel',
  templateUrl: './dog-panel.component.html',
  styleUrls: ['./dog-panel.component.css']
})
export class DogPanelComponent {

  @Input()
  public dogDetail: DogDetail;

  @Input()
  public nextAppointment: Appointment;

  @Output()
  public sendReminderButtonClicked:EventEmitter<Appointment> = new EventEmitter<Appointment>();

  constructor() {
  }

  public sendReminderButtonOnClick(){
    //this.sendReminderButtonClicked.emit(this.nextAppointment);
    throw new Error();
  }
}
