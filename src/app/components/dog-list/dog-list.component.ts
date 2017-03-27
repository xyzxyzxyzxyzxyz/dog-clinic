import {Component, Output, EventEmitter, Input} from '@angular/core';
import {DogDetail} from "../../model/dog-detail";

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent{

  constructor() { }

  @Input()
  dogList: DogDetail[];

  @Output()
  dogDetailSelected : EventEmitter<DogDetail> = new EventEmitter();

  detailClicked(dogDetail : DogDetail) {
    throw Error();
  }
}
