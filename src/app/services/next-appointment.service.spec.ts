import { TestBed, inject } from '@angular/core/testing';

import { NextAppointmentService } from './next-appointment.service';

describe('NextAppointmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NextAppointmentService]
    });
  });

  it('should ...', inject([NextAppointmentService], (service: NextAppointmentService) => {
    expect(service).toBeTruthy();
  }));
});
