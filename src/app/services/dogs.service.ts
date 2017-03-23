import { Injectable } from '@angular/core';
import {Dog} from "../model/dog";

@Injectable()
export class DogsService {

  constructor() { }

  getDogs(): Dog[]{
    return null;
  }
}
