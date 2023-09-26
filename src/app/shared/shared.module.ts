import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { CustomComponent } from './components/custom/custom.component';

export function createSharedTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/shared/', '.json');
}

@NgModule({
  declarations: [CustomComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createSharedTranslateLoader),
        deps: [HttpClient]
      },
    })
  ],
  providers:[TranslateStore],
  exports:[
    CustomComponent,
    TranslateModule
  ]
})
export class SharedModule { 
  constructor(translate: TranslateService) {
    translate.use('pl');
  }
}
