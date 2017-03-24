import { Injectable } from '@angular/core';
import {Appointment} from "../model/appointment";

@Injectable()
export class ReminderSenderService {

  constructor() { }

  sendReminder(appointment: Appointment) {
    console.debug(" Appointment sent for: "+ appointment.dogId + " in date: " +  appointment.date);
  }

}
