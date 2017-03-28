
import { CompositeService } from './composite.service';
import {OwnerService} from "./owner.service";
import {Owner} from "../model/owner";
import {DogsService} from "./dogs.service";
import {Dog} from "../model/dog";

describe('CompositeService', () => {
  beforeEach(() => {

  });

  it('should return dogs with owners', () => {
    let owners: Owner[] = [new Owner(1, "Roberto","Moreno"), new Owner(2, "Carlitos", "Brown")];
    let dogs: Dog[] = [new Dog("sparky", 5, 1), new Dog("snoopy", 2, 2)];
    let ownerService: OwnerService = {
      getOwners(dogsIds : number[]): Owner[]{
        return owners;
      }
    };

    let dogsService: DogsService = {
      getDogs(): Dog[]{
        return dogs;
      }
    };

    let compositeService: CompositeService = new CompositeService(dogsService, ownerService);

    let actualDogs = compositeService.getDogs();
    actualDogs.forEach(function(dogDetail){
      expect(dogDetail.dog.ownerId).toBe(dogDetail.owner.id)
    })

  });


  it("should throw an error if the dog's owner is not found", () => {
    let owners: Owner[] = [new Owner(2, "Carlitos", "Brown")];
    let dogs: Dog[] = [new Dog("sparky", 5, 1)];
    let ownerService: OwnerService = {
      getOwners(dogsIds : number[]): Owner[]{
        return owners;
      }
    };

    let dogsService: DogsService = {
      getDogs(): Dog[]{
        return dogs;
      }
    };

    let compositeService: CompositeService = new CompositeService(dogsService, ownerService);

    expect(() => compositeService.getDogs()).toThrowError();

  });


  it("should throw an error if the DogService fails", () => {
    let ownerService: OwnerService = {
      getOwners(dogsIds : number[]): Owner[]{
        return [];
      }
    };

    let dogsService: DogsService = {
      getDogs(): Dog[]{
        throw new Error("Random failure from DogService");
      }
    };

    let compositeService: CompositeService = new CompositeService(dogsService, ownerService);

    expect(() => compositeService.getDogs()).toThrow();

  });


  it("should throw an error if the OwnerService fails", () => {
    let ownerService: OwnerService = {
      getOwners(dogsIds : number[]): Owner[]{
        throw new Error("Random failure from OwnerService");
      }
    };

    let dogs: Dog[] = [new Dog("sparky", 5, 1)];
    let dogsService: DogsService = {
      getDogs(): Dog[]{
        return dogs;
      }
    };

    let compositeService: CompositeService = new CompositeService(dogsService, ownerService);

    expect(() => compositeService.getDogs()).toThrow();

  });




});
