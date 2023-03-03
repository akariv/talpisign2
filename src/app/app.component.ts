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
  otherletter: string = '';
  approved = false;
  approved2 = false;
  volunteer = false;

  get legalese(): string {
    return 'אני מאשר/ת את חתימתי על מכתב הערכים המשותפים המתנגד לרפורמה המשפטית בתצורתה הנוכחית.';
  }

  get legalese2(): string {
    return 'אני מאשר/ת את פרסום שמי המלא.';
  }

  get volunteer_text(): string {
    return 'אני יכול לעזור לוודא חותמים אחרים על מכתב זה.';
  }

  get to(): string {
    return 'stand.together4democracy@gmail.com';
  }

  get subject(): string {
    return encodeURIComponent(`[SIGN] ${this.degree} ${this.name} (${this.name_en})`);
  }

  get body(): string {
    return encodeURIComponent(`${this.legalese}
${this.legalese2}

${this.degree} ${this.name}
${this.name_en}
${this.phone}

${this.otherletter ? 'חתמתי גם על מכתב: ' + this.otherletter : ''}
${this.volunteer ? this.volunteer_text : ''}

אפשר להוסיף אחרי שורה זו מידע נוסף שתרצו לספר לנו.`);
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
