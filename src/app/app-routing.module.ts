import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';

const routes: Routes = [
  { path: 'contact/:id', component: ContactDetailsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'edit/:id', component: ContactEditComponent },
  { path: 'edit', component: ContactEditComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'statistic', component: StatisticPageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
