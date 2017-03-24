export class Dog {

  constructor(private _name: string,
              private _age: number,
              private _ownerId: number) {}

  get name(): string{
    return this._name;
  }

  get age(): number{
    return this._age;
  }

  get ownerId(): number{
    return this._ownerId;
  }

}
