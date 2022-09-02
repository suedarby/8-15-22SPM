import { Component } from '@angular/core'; //original

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({ //original
  selector: 'app-root', //original
  templateUrl: './app.component.html', //original
  styleUrls: ['./app.component.css'] //original
}) //original
export class AppComponent { //original
  title = 'Sewing Project Manager'; //original

  project: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.project = firestore.collection('projectForm').valueChanges();
  }

} //original
