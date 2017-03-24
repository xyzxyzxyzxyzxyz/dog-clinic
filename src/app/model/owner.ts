export class Owner {

  constructor(private _id: number,
              private _name: string,
              private _surnames: string){

  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get surnames(): string {
    return this._surnames;
  }
}
