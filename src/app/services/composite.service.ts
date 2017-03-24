import { Injectable } from '@angular/core';
import {DogsService} from "./dogs.service";
import {OwnerService} from "./owner.service";
import {DogDetail} from "../model/dog-detail";

@Injectable()
export class CompositeService {

  constructor(private dogsService: DogsService, private ownerService: OwnerService) { }

  getDogs(): DogDetail[]{

    let dogs = null;
    try {
      dogs = this.dogsService.getDogs();
    }
    catch(e) {
      throw {
        message: "DogsService failed",
        cause: e
      };
    }

    let ownerIds = dogs.map(dog => dog.ownerId)

    let owners = null;
    try {
      owners = this.ownerService.getOwners(ownerIds);
    }
    catch(e) {
      throw {
        message: "OwnerService failed",
        cause: e
      };
    }

    return dogs.map(dog => {
      let owner = owners.find(owner => owner.id == dog.ownerId);

      if (!owner) {
        throw new Error(`The owner with ID [${owner.id}] does not exist`);
      }

      return new DogDetail(dog, owner);
    });
  }
}
