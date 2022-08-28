import { Component } from '@angular/core'; //original

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({ //original
  selector: 'app-root', //original
  templateUrl: './app.component.html', //original
  styleUrls: ['./app.component.css'] //original
}) //original
export class AppComponent { //original
  title = 'Sewing Project Manager'; //original
  facoffee = faCoffee;

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }

} //original
