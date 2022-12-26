import { Pipe, PipeTransform } from '@angular/core';
import { PhoneBook } from '../app.component';

@Pipe({
  name: 'sortFirstName'
})
export class SortFirstNamePipe implements PipeTransform {

  transform(value: PhoneBook[], type: boolean): PhoneBook[] {
    if(!value) return[];
    if(type){
      return value.sort((a, b) => (a.firstName > b.firstName) ? 1 : (a.firstName < b.firstName) ? -1 : 0);
    }
    return value.sort((a, b) => (a.firstName < b.firstName) ? 1 : (a.firstName > b.firstName )? -1 : 0);
}

}
