import { TestBed, inject } from '@angular/core/testing';

import { ReminderSenderService } from './reminder-sender.service';
import {Appointment} from "../model/appointment";

describe('ReminderSenderService', () => {
  beforeEach(() => {
  });

  it('should send the reminder', () => {
    let reminderService =  new ReminderSenderService();
    let appointment = new Appointment(1,new Date());

    expect(() => reminderService.sendReminder(appointment)).not.toThrow();
  });

  it('should throw an error when there is no appointment', () => {
    let reminderService =  new ReminderSenderService();

    expect(reminderService.sendReminder).toThrowError();
  });
});
