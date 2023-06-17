import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  formGroup: FormGroup
  products:Product[]
  constructor(private api: ApiService) { }

    displayedColumns: string[] = ['Name', 'Description'];

ngOnInit(): void {
  this.getList();
  this.formGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl('')

  })
}
submitForm() {
  if (this.formGroup.valid) {
  debugger
    let infoData = this.formGroup.value;
    this.api.create(infoData, 'Product')
      .subscribe((response) => {
        alert(response);
        this.getList();
      })
    this.formGroup.reset();
  }

  else {
    alert('The data is not valid')
  }

}


cancel() {
  this.formGroup.reset();
}



getList() {
  this.api.getList('Product').subscribe(response => {
    debugger
    this.products = response
    alert( this.products)
  })
}


deletRow(id) {
  if (confirm("are you sure?")) {
    this.api.delete(`Product/${id}`).subscribe(a => {
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
