import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Document } from '../models/document.model';

@Component({
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document;
  
  constructor( private ApiService: ApiService) {  }

  ngOnInit() {
    this.ApiService.getDocuments().subscribe(data => {
      this.documents = data;
    })
  }
}
