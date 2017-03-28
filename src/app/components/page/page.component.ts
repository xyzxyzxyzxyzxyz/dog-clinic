import { Component, OnInit } from '@angular/core';
import {CompositeService} from "../../services/composite.service";
import {NextAppointmentService} from "../../services/next-appointment.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private compositeService : CompositeService, private nextAppointmentService : NextAppointmentService) {

  }

  ngOnInit() {
  }

}
