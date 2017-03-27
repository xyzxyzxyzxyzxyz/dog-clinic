
import { DogListComponent } from './dog-list.component';
import {DogDetail} from "../../model/dog-detail";
import {Dog} from "../../model/dog";
import {Owner} from "../../model/owner";

describe('DogListComponent', () => {
  let component: DogListComponent;
  let isEmitted: Boolean;
  let dogDetail: DogDetail = new DogDetail(new Dog("Scooby", 4, 1), new Owner(1,"Shaggy","slim"));
  let emittedDogDetail: DogDetail;

  beforeEach(() => {
    isEmitted = false;
    emittedDogDetail = null;
    component = new DogListComponent();
    component.dogDetailSelected.subscribe((dogDetail) => {
      emittedDogDetail = dogDetail;
      isEmitted = true;
    });
  });

  it('should not emit dogDetailSelected event when the list is empty', () => {
    component.dogDetailList = null;
    component.detailClicked(dogDetail);

    expect(isEmitted).toBe(false);
  });

  it('should not emit dogDetailSelected event when dogDetail is null', () => {
    component.dogDetailList = [dogDetail];
    component.detailClicked(null);

    expect(isEmitted).toBe(false);
  });

  it('should emit dogDetailSelected event when row is clicked', () => {
    component.dogDetailList = [dogDetail];
    component.detailClicked(dogDetail);

    expect(isEmitted).toBe(true);
    expect(emittedDogDetail).toBe(dogDetail);
  });
});
