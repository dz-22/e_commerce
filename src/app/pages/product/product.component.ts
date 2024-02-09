import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product',
  standalone: true,
  imports: [SlicePipe,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  data: any = []


  constructor(public api: ApiService) {}

  ngOnInit(){
      this.api.getData().subscribe ( (response: any) => {
        this.data = response
    })


  }

}
