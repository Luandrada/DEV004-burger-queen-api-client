import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  products: Array<Product> = [
    {
      id: 1,
      name: "Café",
      price: 10,
    },
    {
      id: 2,
      name:  "Café con leche",
      price: 13,
    },
    {
      id: 3,
      name:  "Té",
      price: 8,
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
