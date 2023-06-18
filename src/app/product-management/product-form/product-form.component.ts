import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  formGroup: FormGroup
  products:Product[]
  displayedColumns: string[] = ['Name', 'Description'];

  constructor(private api: ApiService) { }


ngOnInit(): void {
  this.getList();
  this.formGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('',Validators.required),
    description: new FormControl('')

  })
}
submitForm() {
  if (this.formGroup.valid) {

    let infoData = this.formGroup.value;
    this.api.postData(infoData, 'api/Product')
      .subscribe((response) => {
       alert(response);
        this.getList();
        this.formGroup.reset();
      })
  }

}


cancel() {
  this.formGroup.reset();
}



getList() {
  this.api.getList('api/Product').subscribe(response => {
    this.products = response

  })

}


deletRow(id) {
  if (confirm("are you sure?")) {
    this.api.delete(`api/Product/${id}`).subscribe(a => {
      this.getList();
      alert(a);
    })
  }
}

 
}

export interface Product{
  id:number;
  name:string;
  description:string
}
