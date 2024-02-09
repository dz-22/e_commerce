import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: any = []


  constructor(public api: ApiService) {}

  ngOnInit(){
      this.api.getData().subscribe ( (response: any) => {
        this.data = response
    })


  }

}
