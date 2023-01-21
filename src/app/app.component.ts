import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pageTitle:string;
  constructor(private router: Router,
    public ngFireAuth: AngularFireAuth) {}

  async logOut() {
   return this.ngFireAuth.signOut().then(() => {
      this.router.navigate(['']);
   });
  }

  changeTitle(title :string):void {
    this.pageTitle= title;
}
}
