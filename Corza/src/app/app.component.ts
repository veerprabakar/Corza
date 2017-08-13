import{ Component } from '@angular/core';

@Component({
  selector: 'cz-root',
  template: `<div>
      <h1>Corza</h1>
      <pm-products></pm-products>
  </div>
  `
})
export class AppComponent{
  pageTitle: string = 'Corza Company'
}
