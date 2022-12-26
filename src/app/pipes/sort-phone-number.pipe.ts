import { Pipe, PipeTransform } from '@angular/core';
import { PhoneBook } from '../app.component';

@Pipe({
  name: 'sortPhoneNumber'
})
export class SortPhoneNumberPipe implements PipeTransform {

  transform(value: PhoneBook[], type: boolean): PhoneBook[] {
    if(!value) return[];
    if(type){
      return value.sort((a, b) => (a.number > b.number) ? 1 : (a.number < b.number) ? -1 : 0);
    }
    return value.sort((a, b) => (a.number < b.number) ? 1 : (a.number > b.number) ? -1 : 0)
  }

}
