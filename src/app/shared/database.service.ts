import { Injectable } from '@angular/core';

import * as Datastore from 'nedb';
declare var require: any;
@Injectable()


export class DatabaseService {
  public db;
  constructor(private data: any) {
    this.db = new Datastore({
          filename: './db/customers.db' ,
          autoload: true });
   }
  findAll() {
    return new Promise((resolve, reject) => {
      return this.db.find({}, ((err, items) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(items);
        }
      }));
    })
  }
}
