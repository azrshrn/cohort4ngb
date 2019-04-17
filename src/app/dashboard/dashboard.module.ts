import {NgModule} from '@angular/core';
import {ExampleComponent} from './example/example.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ExampleComponent],
  exports: [],
  imports: [SharedModule, NgbModule],
  providers: [],
  entryComponents: []
})
export class DashboardModule {

}
