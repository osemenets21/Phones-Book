import { Pipe, PipeTransform } from '@angular/core';
import { PhoneBook } from '../app.component';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: PhoneBook[],searchInput:string): PhoneBook[] {
    if(!value) return[];
    if(!searchInput) return value;
    return value.filter(book=>book.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
                              book.lastName.toLowerCase().includes(searchInput.toLowerCase())  ||
                              book.number.toLowerCase().includes(searchInput.toLowerCase()))
  }

}
