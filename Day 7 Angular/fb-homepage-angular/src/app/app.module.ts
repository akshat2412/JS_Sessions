import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FbFooterComponent } from './fb-footer/fb-footer.component';
import { FbHeaderComponent } from './fb-header/fb-header.component';
import { FbInputBoxComponent } from './fb-input-box/fb-input-box.component';
import { FbButtonComponent } from './fb-button/fb-button.component';
import { FbSignupFormComponent } from './fb-signup-form/fb-signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FbFooterComponent,
    FbHeaderComponent,
    FbInputBoxComponent,
    FbButtonComponent,
    FbSignupFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
