import { FormattedDogNamePipe } from './formatted-dog-name.pipe';
import {DogDetail} from "../model/dog-detail";
import {Dog} from "../model/dog";
import {Owner} from "../model/owner";

describe('FormattedDogNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FormattedDogNamePipe();
    expect(pipe).toBeTruthy();
  });
  it('given a dogDetail object should return a string with this format [dogName] ([Surnames], [Name]) in uppercase', () => {
    const pipe = new FormattedDogNamePipe();
    let dogDetail: DogDetail = new DogDetail(new Dog("Snoopy", 4, 1), new Owner(1, "Carlitos", "Brown"))
    expect(pipe.transform(dogDetail)).toBe("SNOOPY (BROWN, CARLITOS)");
  });
});
