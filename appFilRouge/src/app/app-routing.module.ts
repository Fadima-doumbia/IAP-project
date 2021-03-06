import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { FeaturesComponent } from './features/features.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HistoriqueComponent } from './historique/historique.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { OhFourComponent } from './oh-four/oh-four.component';
import { OneFeatureComponent } from './one-feature/one-feature.component';
import { ProfilComponent } from './profil/profil.component';
import { ProjetComponent } from './projet/projet.component';
import { PublicationComponent } from './publication/publication.component';
import { ReseauComponent } from './reseau/reseau.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', canActivate : [AuthGuardGuard] ,component: LayoutComponent, children : [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home',  component: HomeComponent},
    { path: 'detail-user',  component: DetailUserComponent},
    { path: 'profil',  component: ProfilComponent},
    { path: 'projet',  component: ProjetComponent},
    { path: 'historique',  component: HistoriqueComponent},
    { path: 'liste',  component: ListComponent},
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
