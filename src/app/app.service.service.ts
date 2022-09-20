import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
// import { Firestore, collectionData, docData } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectformComponent } from './projects/projectform/projectform.component';

// interface Pokemon {
//   height: number;
//   id: string;
//   description: string;
//   imgUrl: string;
//   name: string;
//   type: string;
//   weight: number;
// }

interface projectForm {
    category: string;
    completed: boolean;
    image: string;
    inProgress: boolean;
    item: string;
    location: string;
    missingSupplies: boolean;
    notStarted: boolean;
    projectDescription: string;
    projectId?: number;
    projectName: string;
    qty: string;
    status: string;
    supplyDescription: string;
    supplyItem: string;
    tags: string;
    ufo: string;
  }

@Injectable({
  providedIn: 'root',
})

export class PokedexFirestoreService {
  private pokemonCollection: CollectionReference<DocumentData>;



  // constructor(private readonly firestore: Firestore) {
  //   this.pokemonCollection = collection(this.firestore, 'pokemon');
  // }

  // getAll() {
  //   return collectionData(this.pokemonCollection, {
  //     idField: 'id',
  //   }) as Observable<Pokemon[]>;
  // }jsx

  // get(id: string) {
  //   const pokemonDocumentReference = doc(this.firestore, `pokemon/${id}`);
  //   return docData(pokemonDocumentReference, { idField: 'id' });
  // }

  // create(pokemon: Pokemon) {
  //   return addDoc(this.pokemonCollection, pokemon);
  // }

  // update(pokemon: Pokemon) {
  //   const pokemonDocumentReference = doc(
  //     this.firestore,
  //     `pokemon/${pokemon.id}`
  //   );
  //   return updateDoc(pokemonDocumentReference, { ...pokemon });
  // }

  // delete(id: string) {
  //   const pokemonDocumentReference = doc(this.firestore, `pokemon/${id}`);
  //   return deleteDoc(pokemonDocumentReference);
  // }
}
