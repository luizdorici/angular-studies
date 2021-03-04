import { ProductService } from './../../../components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  //propLegal = "qualquer"

  constructor(private productService: ProductService,
      private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.showMessage('Produto Criado!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

  /*fazerAlgo(): void {
    console.log("fazendo algo!")
  } verificar product-create.compoment.html*/

}
