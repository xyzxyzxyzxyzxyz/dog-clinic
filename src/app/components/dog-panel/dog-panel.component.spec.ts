import { DogPanelComponent } from './dog-panel.component';
import {DogDetail} from "../../model/dog-detail";
import {Appointment} from "../../model/appointment";
import {Dog} from "../../model/dog";
import {Owner} from "../../model/owner";

describe('DogPanelComponent', () => {
  let component: DogPanelComponent;
  let emittedAppointment: Boolean;

  beforeEach(() => {
    component = new DogPanelComponent();
    emittedAppointment = false;
    component.sendReminderButtonClicked.subscribe((appointment:Appointment) =>
    {
      emittedAppointment = true;
    });
  });

  it('No event is emitted if there is no dogDetail', () => {
    component.dogDetail = null;
    component.nextAppointment = new Appointment(1, new Date());

    component.sendReminderButtonOnClick()

    expect(emittedAppointment).toBe(false);
  });

  it('No event is emitted if there is no appointment', () => {
    component.dogDetail = new DogDetail(
      new Dog("Snoopy", 3, 1),
      new Owner(1, "Charlie", "Brown")
    );
    component.nextAppointment = null;

    component.sendReminderButtonOnClick()

    expect(emittedAppointment).toBe(false);
  });

  it('The event is emitted when we have dogDetail and appointment', () => {
    component.dogDetail = new DogDetail(
      new Dog("Snoopy", 3, 1),
      new Owner(1, "Charlie", "Brown")
    );
    component.nextAppointment = new Appointment(1, new Date());

    component.sendReminderButtonOnClick()

    expect(emittedAppointment).toBe(true);
  });

});
