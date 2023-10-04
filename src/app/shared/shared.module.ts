import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { CustomComponent } from './components/custom/custom.component';
import { TranslationSharedPL } from './translation.pl';
import { TranslationCommonPL } from '../dashboard/translation.pl';

@NgModule({
  declarations: [CustomComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule
  ],
  providers:[TranslateStore],
  exports:[
    CustomComponent,
    TranslateModule
  ]
})
export class SharedModule { 
  constructor(translate: TranslateService) {
    translate.setTranslation('pl', TranslationSharedPL);
    translate.setTranslation('pl', TranslationCommonPL);
  }
}
