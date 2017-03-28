import { async} from '@angular/core/testing';

import { PageComponent } from './page.component';
import {CompositeService} from "../../services/composite.service";
import {NextAppointmentService} from "../../services/next-appointment.service";
import {Appointment} from "../../model/appointment";
import {Dog} from "../../model/dog";
import {DogDetail} from "../../model/dog-detail";
import {Owner} from "../../model/owner";


describe('PageComponent', () => {
  let component: PageComponent;
  let compositeService: CompositeService;
  let nextAppointmentService: NextAppointmentService;
  let compositeServiceSpy;

  beforeEach(async(() => {


    let nextAppointmentService: NextAppointmentService = {
      getNextAppointment(dogId : number) : Appointment{
        return null;
      }
    };
    spyOn(nextAppointmentService, 'getNextAppointment');

    compositeService = new CompositeService(null,  null);
    compositeServiceSpy = spyOn(compositeService, 'getDogs');

    component = new PageComponent(compositeService, nextAppointmentService);
  }));

  it('should retrieve the dog list on initialization time', () => {
    component.ngOnInit();
    expect(compositeServiceSpy).toHaveBeenCalledTimes(1);
    expect(component.dogList).not.toBeNull()
  });

});
