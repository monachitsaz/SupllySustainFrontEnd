import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';


@NgModule({
  declarations: [
    ProductFormComponent
    
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductManagementModule { }
