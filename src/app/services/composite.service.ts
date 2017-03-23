import { Injectable } from '@angular/core';
import {DogsService} from "./dogs.service";
import {OwnerService} from "./owner.service";
import {DogDetail} from "../model/dog-detail";

@Injectable()
export class CompositeService {

  constructor(private dogsService: DogsService, private ownerService: OwnerService) { }

  getDogs(): DogDetail[]{
    let dogs = this.dogsService.getDogs();
    let ownerIds = dogs.map(dog => dog.ownerId)
    let owners = this.ownerService.getOwners(ownerIds);

    return dogs.map(dog => {
      let owner = owners.find(owner => owner.id == dog.ownerId);
      return new DogDetail(dog, owner);
    });
  }
}
