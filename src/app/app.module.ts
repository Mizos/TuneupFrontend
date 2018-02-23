import { AppRouter } from './Router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';



import { HomeComponent } from './views/home/home.component';
import { TrackPageComponent } from './views/track-page/track-page.component';
import { Dz } from './services/music.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { TuneComponent } from './components/tune/tune.component';
import { FeedComponent } from './components/feed/feed.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    TuneComponent,
    FeedComponent,
    LoaderComponent,
    HomeComponent,
    TrackPageComponent,
    SidebarComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRouter
  ],
  providers: [Dz],
  bootstrap: [AppComponent]
})
export class AppModule { }
