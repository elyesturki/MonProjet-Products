import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListService } from './services/products-list.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';

const tableDeRoutage = [
  { path: 'list', component: ProductsListComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'product/:id', component: ProductsDetailComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**',  component: NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductsListComponent,
    WelcomeComponent,
    NotFoundComponent,
    ProductsDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(tableDeRoutage)
  ],
  providers: [ProductsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
