import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  name: string = '';
  name_en: string = '';
  phone: string = '';
  degree: string = '';
  approved = false;
  approved2 = false;

  get legalese(): string {
    return 'אני מאשר/ת את חתימתי על מכתב הערכים המשותפים המתנגד לרפורמה המשפטית בתצורתה הנוכחית.';
  }

  get legalese2(): string {
    return 'אני מאשר/ת את פרסום שמי המלא.';
  }

  get to(): string {
    return 'stand.together4democracy@gmail.com';
  }

  get subject(): string {
    return encodeURIComponent(`[SIGN] ${this.name} (${this.name_en})`);
  }

  get body(): string {
    return encodeURIComponent(`${this.legalese}\n\n${this.legalese2}\n\nדרגה/תואר: ${this.degree}\n\n${this.name}\n${this.name_en}\n${this.phone}\n\nאפשר להוסיף אחרי שורה זו מידע נוסף שתרצו לספר לנו.`);
  }

  get gmailurl(): string {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${this.to}&su=${this.subject}&body=${this.body}`;
  }
  
  get emailurl(): string {
    return `mailto:${this.to}?subject=${this.subject}&body=${this.body}`;
  }

  ready() {
    return this.name.length >= 5 && this.name_en.length >= 7 && this.phone.length > 7 && this.approved && this.approved2 && this.degree.length > 2;
  }
}
