
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../shared/database.service';

//ngb
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
      providers: [ DatabaseService ]
})
export class CustomerComponent implements OnInit {

  constructor(private db: DatabaseService) {

  }
  items: any = [];
  
  ngOnInit() {
    this.findItems();/*  */
  }

  findItems() {
    this.db.findAll().then(
      (items) => {
        this.items = items;
      },
      (err) => {
        console.log(err);
      }
    )
  }

   get diagnostic() {
    return JSON.stringify(this.items);
  }
}
