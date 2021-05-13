import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Group } from '../interfaces/group';
@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groupsCollection: AngularFirestoreCollection<Group>;
  groups: Observable<Group[]>;

  constructor(
    public afs: AngularFirestore
  ) { 
    this.groups = this.afs.collection('groups', query => query.orderBy('date','desc')).valueChanges();
    this.groupsCollection = this.afs.collection('groups');
  }

  getGroups = () : Observable<Group[]> => {
    return this.groups;
  }

  getTotalGroupsCount = () : any => {
    return this.afs.collection('groups').get().toPromise();
  }

  createGroup = (group:Group) : void  => {
    this.groupsCollection.add(group);
  }
}
