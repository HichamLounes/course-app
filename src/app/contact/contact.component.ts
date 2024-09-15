import { Component } from '@angular/core';
import { IDeactivateComponent } from '../candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent {
  name;
  email;
  subject;
  messege;

  canExit() {
    if (this.name || this.email || this.subject || this.messege) {
      return confirm('You do not have save the changes Do you really want to leave !!! ')
    }
    else {
      return true;
    }
  }

  onSubmit() { }
}
