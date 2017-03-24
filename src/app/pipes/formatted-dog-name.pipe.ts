import { Pipe, PipeTransform } from '@angular/core';
import {DogDetail} from "../model/dog-detail";

@Pipe({
  name: 'formattedDogName'
})
export class FormattedDogNamePipe implements PipeTransform {

  transform(dogDetail: DogDetail, args?: any): any {

    return `${dogDetail.dog.name} (${dogDetail.owner.surnames}, ${dogDetail.owner.name})`.toUpperCase();
  }

}
