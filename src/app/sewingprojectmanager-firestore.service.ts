// import {
//   CollectionReference,
//   DocumentData,
//   addDoc,
//   collection,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from '@firebase/firestore';

// import { Firestore, collectionData, docData } from '@angular/fire/firestore';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';


// //need to list all the data fields
// interface projectForm {
//   // category: string;
//   // completed: boolean;
//   // image: string;
//   // inProgress: boolean;
//   // item: string;
//   // location: string;
//   // missingSupplies: boolean;
//   // notStarted: boolean;
//   projectDescription: string;
//   projectId?: number;
//   projectName: string;
// //   qty: string;
// //   status: string;
// //   supplyDescription: string;
// //   supplyItem: string;
// //   tags: string;
// //   ufo: string;
// // }


// @Injectable({
//   providedIn: 'root'
// })
// export class SewingprojectmanagerFirestoreService {

//   private SewingprojectmanagerFirestoreService: CollectionReference<DocumentData>;

//   constructor(private readonly firestore: Firestore) {
//     this.projectFormCollection = collection(this.firestore, 'projectForm');
//   }


//   getAll() {
//     return collectionData(this.projectFormCollection, {
//       idField: 'id',
//     }) as Observable<projectForm[]>;
//   }

//   get(id: string) {
//     const projectFormDocumentReference = doc(this.firestore, `projectForm/${id}`);
//     return docData(projectFormDocumentReference, { idField: 'id' });
//   }

//   create(projectform: projectForm) {
//     return addDoc(this.projectform.Collection, projectform);
//   }

//   update(projectForm: projectForm) {
//     const projectFormDocumentReference = doc(
//       this.firestore,
//       `projectForm/${projectForm.id}`
//     );
//     return updateDoc(projectFormDocumentReference, { ...projectForm });
//   }

//   delete(id: string) {
//     const projectFormDocumentReference = doc(this.firestore, `projectform/${id}`);
//     return deleteDoc(projectFormDocumentReference);
//   }




// }
