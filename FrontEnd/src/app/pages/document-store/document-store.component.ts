import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';


@Component({
  templateUrl: './document-store.component.html',
  styleUrls: ['./document-store.component.css']
})
export class DocumentStoreComponent implements OnInit {

  constructor(private ApiService: ApiService, private formBuilder: FormBuilder){ }
  uploadForm: FormGroup;
  ngOnInit(){
    this.uploadForm = this.formBuilder.group({
      pdf: [''],
      title: [''],
      content: ['']
    });
  }

  onFileSelect(event){
    const file = event.target.files[0];
    this.uploadForm.get('pdf').setValue(file);
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('pdf', this.uploadForm.get('pdf').value);
    formData.append('title', this.uploadForm.get('title').value);
    formData.append('content', this.uploadForm.get('content').value);

    this.ApiService.postDocuments(formData).subscribe((data)=> console.log(data), (err)=> console.log(err));
  }
}
