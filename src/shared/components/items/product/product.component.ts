import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../../pages/home/models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data: ProductModel;
  constructor() { }

  ngOnInit(): void {
  }

}
