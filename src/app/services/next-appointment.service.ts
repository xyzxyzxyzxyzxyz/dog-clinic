import { Injectable } from '@angular/core';
import {Appointment} from "../model/appointment";

@Injectable()
export class NextAppointmentService {

  constructor() { }

  getNextAppointment(dogId : number) : Appointment{
    return null;
  }

}
