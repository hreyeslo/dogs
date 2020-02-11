import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RequestIdleModule } from 'ngx-request-idle';
import { NbThemeModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
// Shared
import { API_HOST } from '@shared/models';
// Env settings
import { environment } from '../environments/environment';
// Module parts
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RequestIdleModule.forRoot(),
    NbThemeModule.forRoot({name: 'default'})
  ],
  providers: [
    {
      provide: API_HOST,
      useValue: environment.api.host
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
