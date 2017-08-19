import{ Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'cz-root',
  template: `<div>
      <h1>Corza</h1>
      <pm-products></pm-products>
  </div>
  `,
  providers:[ProductService]
})
export class AppComponent{
  pageTitle: string = 'Corza Company';
}
