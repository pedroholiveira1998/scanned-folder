import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http:HttpClient, private formBuilder: FormBuilder){ }
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

    this.http.post<any>('http://localhost:3000/store', formData).subscribe((res)=> console.log(res), (err)=> console.log(err));
  }
}
