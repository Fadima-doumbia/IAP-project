import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailFeatureComponent } from './detail-feature/detail-feature.component';
import { FeaturesComponent } from './features/features.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OhFourComponent } from './oh-four/oh-four.component';
import { OneFeatureComponent } from './one-feature/one-feature.component';
import { PublicationComponent } from './publication/publication.component';
import { ReseauComponent } from './reseau/reseau.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', canActivate : [AuthGuardGuard] ,component: LayoutComponent, children : [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home',  component: HomeComponent},
    { path: 'reseau',  component: ReseauComponent},
    { path: 'publication',  component: PublicationComponent},
    { path: 'features', component: FeaturesComponent},
    { path: 'features/:id', component: OneFeatureComponent},
    { path: 'carousel', component: CarouselComponent},
    { path: 'not-found', component: OhFourComponent},
    { path:'**', redirectTo:'/not-found'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
