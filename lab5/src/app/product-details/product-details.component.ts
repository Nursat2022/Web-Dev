import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
location: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  deleteProduct(product: Product){

    const index = products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      products.splice(index, 1);
      this.location.back();
    }
  }

  likeProduct(product: Product){
    if (product.liked == false) {
      product.likes++; 
      product.liked = true;
    }
  }
}