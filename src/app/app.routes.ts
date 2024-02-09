import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { single } from 'rxjs';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'product', component:ProductComponent},
  {path:'product/:id', component:SingleComponent}



];
