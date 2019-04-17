import {NgModule} from '@angular/core';
import {ExampleComponent} from './example/example.component';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ExampleComponent],
  exports: [],
  imports: [SharedModule, NgbModule],
  providers: [],
  entryComponents: []
})
export class DashboardModule {

}
