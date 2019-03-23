import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { combineLatest, map } from "rxjs/operators";

@Injectable()
export class DataService {
  constructor(private db: AngularFirestore) { }

  getStats(): Observable<{}[]> {
    return this.db.collection("stats").valueChanges();
  }

  getData(type:string): Observable<any[]> {
    return this.db
      .collection(type)
      .snapshotChanges()
      .pipe(
        map(items => {
          return items.map(item => {
            return {
              ...item.payload.doc.data(),
              id: item.payload.doc.id
            };
          });
        })
      );
  }

  addData(handle: string): void {
    this.db.collection("accounts").add({
      handle
    });
  }

  removeData(id: string): void {
    this.db
      .collection("accounts")
      .doc(id)
      .delete();
  }
}
