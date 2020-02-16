import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Core
import { CoreModule, I18nModule } from '@app/core';
// UI
import { SelectModule } from '@ui/select';
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
    CoreModule,
    I18nModule.forRoot('app'),
    SelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
