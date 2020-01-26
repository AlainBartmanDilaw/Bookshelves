import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'bookshelves';

  constructor() {

    const firebaseConfig = {
      apiKey: 'AIzaSyAymLCuWlx9DwQvanXK8cCLj_Mq0wAPh-A',
      authDomain: 'bookshelves-c626c.firebaseapp.com',
      databaseURL: 'https://bookshelves-c626c.firebaseio.com',
      projectId: 'bookshelves-c626c',
      storageBucket: 'bookshelves-c626c.appspot.com',
      messagingSenderId: '270723217677',
      appId: '1:270723217677:web:e910f68ecc54c090079844',
      measurementId: 'G-0T3YFSSQGG'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

  }
}
