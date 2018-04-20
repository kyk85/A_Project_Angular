import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  userId: any;
  collectionItems = [];

  constructor(public collectionService: CollectionService, public router: Router, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.userId = localStorage.getItem('userId');
      console.log(this.userId);
      this.getCollection(this.userId);
    });
  }

  ngOnInit() {
  }

  getCollection(id) {
      this.collectionService.getCollection(id).then((data) => {
        this.collectionItems = data['library'];
        console.log(this.collectionItems);
      }).catch(error => {
        console.log(error);
      });
  }

}
