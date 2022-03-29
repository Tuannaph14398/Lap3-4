import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name : "Samsung",
      descripttion : "galaxy",
      price : 25000000
    }
  ]

  productsFilter = this.products;

  newProduct = {
    name : "",
    descripttion : "",
    price : 0
  }

  onSubmit(){
    if (this.isEdit) {
      this.isEdit = false;
    }else{
      this.products.push(this.newProduct);
    }

    this.newProduct = {
      name : "",
      descripttion : "",
      price : 0
    }
  }

  isEdit = false;
  onEdit(obj: any){
    this.newProduct = obj;
    this.isEdit = true;
  }

  remove(productName: any){
    // this.urers ~ thuộc tính users của class UserComponent
    this.productsFilter = this.productsFilter.filter(function(product){
      return product.name !== productName;
    })
  }
}
