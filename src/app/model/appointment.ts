export class Appointment {


  constructor(private _dogId : number, private _date : Date){

  }

  get dogId() : number {
    return this._dogId;
  }

  get date() : Date {
    return this._date;
  }

}
