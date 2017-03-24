import { DogPanelComponent } from './dog-panel.component';
import {DogDetail} from "../../../model/dog-detail";
import {Appointment} from "../../../model/appointment";

describe('DogPanelComponent', () => {
  let component: DogPanelComponent;

  beforeEach(() => {
    component = new DogPanelComponent();
  });

  it('No event is emitted if there is no dogDetail or appointment', () => {

    let dogDetail:DogDetail = null;
    let appointment:Appointment = null;
    let emittedAppointment:Boolean = false;

    component.dogDetail = dogDetail;
    component.nextAppointment = appointment;

    component.sendReminderButtonClicked.subscribe((appointment:Appointment) =>
      {
        emittedAppointment = true;
      });

    component.sendReminderButtonOnClick()

    expect(emittedAppointment).toBe(false);
  });
});
