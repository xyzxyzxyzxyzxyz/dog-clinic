import { Injectable } from '@angular/core';
import {Appointment} from "../model/appointment";

@Injectable()
export class ReminderSenderService {

  constructor() { }

  sendReminder(appointment: Appointment) {
    throw new Error();
  }

}
