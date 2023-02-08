import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: 'candlist', component: CandidateListComponent },
    { path: 'candregister', component: CandidateRegistrationComponent },
 ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
