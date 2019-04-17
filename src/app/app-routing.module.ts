import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppshellComponent} from './appshell/appshell.component';
import {ExampleComponent} from './dashboard/example/example.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo : 'home'},
  {path: 'home', component : AppshellComponent, children : [
      {path: '', pathMatch: 'full', redirectTo : 'dashboard'},
      {path: 'dashboard', component : ExampleComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
