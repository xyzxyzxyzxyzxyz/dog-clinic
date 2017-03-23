import { Injectable } from '@angular/core';
import {DogsService} from "./dogs.service";
import {OwnerService} from "./owner.service";
import {DogDetail} from "../model/dog-detail";

@Injectable()
export class CompositeService {

  constructor(dogsService: DogsService, ownerService: OwnerService) { }

  getDogs(): DogDetail[]{
    return null;
  }
}
