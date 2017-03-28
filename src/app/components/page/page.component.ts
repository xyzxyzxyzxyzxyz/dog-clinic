import { Component, OnInit } from '@angular/core';
import {CompositeService} from "../../services/composite.service";
import {NextAppointmentService} from "../../services/next-appointment.service";
import {Appointment} from "../../model/appointment";
import {DogDetail} from "../../model/dog-detail";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  dogList: DogDetail[];

  constructor(private compositeService : CompositeService, private nextAppointmentService : NextAppointmentService) {

  }



  ngOnInit() {
    this.dogList = this.compositeService.getDogs();
  }



  public sendReminderButtonHasBeenClicked(appointment: Appointment) {

  }

}
