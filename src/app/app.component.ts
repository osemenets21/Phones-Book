import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular_pipes';

  public searchInput = '';
  public modal = false;
  public indeX!: any;
  public isColor = false;
  public modalWindow: boolean = false;
  public number!: string;
  public firstN!: string;
  public LastN!: string;

  public sortF = true;
  public hideF = false;
  public sortL = true;
  public hideL = false;
  public sortP = true;
  public hideP = false;

  public newContact = {
    firstN: '',
    lastN: '',
    phoneN: '',
  };

  public regExp = {
    fname: /^[\w \-]{2,20}$/,
    lname: /^[\w \-]{2,20}$/,
    phoneN: /^[\d\+]{6,13}$/,
  };

  public phoneList: Array<PhoneBook> = [
    {
      firstName: 'Dolche',
      lastName: 'Gabanna',
      number: `0931991351`,
    },
    {
      firstName: 'Pablo',
      lastName: 'Picasso',
      number: `4830248392`,
    },
    {
      firstName: 'Monna',
      lastName: 'Lisa',
      number: `4287529890`,
    },
    {
      firstName: 'David',
      lastName: 'Dicaprio',
      number: `6549398966`,
    },
    {
      firstName: 'Pablo',
      lastName: 'Escabar',
      number: `3458298574`,
    },
    {
      firstName: 'lorenzo',
      lastName: 'veratti',
      number: `1258349789`,
    },
    {
      firstName: 'Santa',
      lastName: 'Maria Curri',
      number: `4883583655`,
    },
    {
      firstName: 'Tommy',
      lastName: 'Hilfiger',
      number: `2439843485`,
    },
  ];

  ngOnInit(): void {}

  deleteUser(index: number): void {
    this.phoneList.splice(index, 1);
  }

  showModal(): void {
    this.modalWindow = true;
  }

  hideModal(): void {
    this.modalWindow = false;
  }

  resetInput(): void {
    this.newContact.firstN = '';
    this.newContact.lastN = '';
    this.newContact.phoneN = '';
  }

  firstSort(): void {
    this.hideF = true;
    this.sortF = !this.sortF;
    this.hideL = !this.hideF;
    this.hideP = !this.hideF;
  }
  lastSort(): void {
    this.hideL = true;
    this.sortL = !this.sortL;
    this.hideF = !this.hideL;
    this.hideP = !this.hideL;
   }
  phoneSort(): void {
    this.hideP = true;
    this.sortP = !this.sortP;
    this.hideL = !this.hideP;
    this.hideF = !this.hideP;
  }

  editUser(index: number): void {
    this.showModal();
    
    this.indeX = index;
    this.newContact.firstN = this.phoneList[index].firstName;
    this.newContact.lastN = this.phoneList[index].lastName;
    this.newContact.phoneN = this.phoneList[index].number;

  }

  saveModal(): void {
    if (
      this.regExp.fname.test(this.newContact.firstN) &&
      this.regExp.lname.test(this.newContact.lastN) &&
      this.regExp.phoneN.test(this.newContact.phoneN)
    ) {
      this.isColor = false;
      this.modal = false;
      if (this.indeX === undefined) {
        let newUser = {
          firstName: this.newContact.firstN,
          lastName: this.newContact.lastN,
          number: this.newContact.phoneN,
        };
        this.phoneList.push(newUser);
      } else {
        this.phoneList[this.indeX].firstName = this.newContact.firstN;
        this.phoneList[this.indeX].lastName = this.newContact.lastN;
        this.phoneList[this.indeX].number = this.newContact.phoneN;
      }
    } else {
      this.isColor = true;
      return;
    }
    this.resetInput();
    this.hideModal();
    this.indeX = undefined;
  }

  

}

export interface PhoneBook {
  firstName: string;
  lastName: string;
  number: string;
}
