import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


type PRODUCT_ITEM_TYPE = {
  id: number,
  name: string,
  descripttion: string,
  price: number
} | undefined;

type PRODUCTS_TYPE = PRODUCT_ITEM_TYPE[];
// number[], string[]
// type mix = number | string;
// mix[]
// any

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  public id: any = null;
  public showProduct :PRODUCT_ITEM_TYPE;

  constructor(public routes: ActivatedRoute) {
    console.log(this.id);

  }

  ngOnInit(): void {
    this.id = this.routes.snapshot.paramMap.get('id');

    this.showProduct = this.products
    .find(product => {
      console.log(this, product, this.id);

      return product?.id == this.id;
    });
  }

  products: PRODUCTS_TYPE = [
    {
      id: 1,
      name : "Samsung galaxy A50",
      descripttion : "galaxy",
      price : 25000000
    },
    {
      id: 1,
      name : "Iphone 11 pro",
      descripttion : "iphone",
      price : 14000000
    },
    {
      id: 1,
      name : "Xaomi redmi note 11",
      descripttion : "xaomi",
      price : 5000000
    }
  ]


}
