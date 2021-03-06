import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { OhFourComponent } from './oh-four/oh-four.component';
import { OneFeatureComponent } from './one-feature/one-feature.component';
import { DetailFeatureComponent } from './detail-feature/detail-feature.component';
import { FeaturesService } from './services/features.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { ReseauComponent } from './reseau/reseau.component';
import { PublicationComponent } from './publication/publication.component';
import { MotDePasseComponent } from './mot-de-passe/mot-de-passe.component';
import { FormComponent } from './form/form.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ProjetComponent } from './projet/projet.component';
import { ProfilComponent } from './profil/profil.component';
import { PostComponent } from './post/post.component';
import { ListComponent } from './list/list.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    LoginComponent,
    OhFourComponent,
    OneFeatureComponent,
    DetailFeatureComponent,
    SignupComponent,
    CarouselComponent,
    ReseauComponent,
    PublicationComponent,
    MotDePasseComponent,
    FormComponent,
    HistoriqueComponent,
    ProjetComponent,
    ProfilComponent,
    PostComponent,
    ListComponent,
    DetailUserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    FeaturesService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
