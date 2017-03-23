import { Injectable } from '@angular/core';
import {Owner} from "../model/owner";

@Injectable()
export class OwnerService {

  constructor() { }

  getOwners(dogIds: number[]): Owner[]{
    return null;
  }
}
