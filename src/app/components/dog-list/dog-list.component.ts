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
  dogDetailList: DogDetail[];

  @Output()
  dogDetailSelected : EventEmitter<DogDetail> = new EventEmitter();

  detailClicked(dogDetail : DogDetail) {
    if(dogDetail != null && this.dogDetailList != null && this.dogDetailList.length != 0){
      this.dogDetailSelected.emit(dogDetail);
    }
  }

}
