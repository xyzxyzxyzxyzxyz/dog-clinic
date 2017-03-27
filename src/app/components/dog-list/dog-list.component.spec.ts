
import { DogListComponent } from './dog-list.component';
import {DogDetail} from "../../model/dog-detail";
import {Dog} from "../../model/dog";
import {Owner} from "../../model/owner";

describe('DogListComponent', () => {
  let component: DogListComponent;
  let isEmitted: Boolean;
  let dogDetail: DogDetail = new DogDetail(new Dog("Scooby", 4, 1), new Owner(1,"Shaggy","slim"));


  beforeEach(() => {
    isEmitted = false;
    component = new DogListComponent();
    component.dogDetailSelected.subscribe(() =>
      isEmitted = true);
    });


  it('row clicked not event is emitted when list is empty', () => {
    component.dogList = null;
    component.detailClicked(dogDetail);

    expect(isEmitted).toBe(false);
  });
});
