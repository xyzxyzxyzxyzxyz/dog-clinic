import {Owner} from "./owner";
import {Dog} from "./dog";

export class DogDetail {
  constructor(private _dog: Dog, private _owner: Owner){}

  get dog(): Dog{
    return this._dog;
  }

  get owner(): Owner{
    return this._owner;
  }


}
