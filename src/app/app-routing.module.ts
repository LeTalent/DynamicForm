import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent }      from './forms/forms.component';


const routes: Routes = [ 
                       { path: '', redirectTo: '/formView', pathMatch: 'full' },
                       { path: 'formView', component: FormsComponent }
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
