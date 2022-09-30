import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchSurveyPageRoutingModule } from './search-survey-routing.module';

import { SearchSurveyPage } from './search-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchSurveyPageRoutingModule
  ],
  declarations: [SearchSurveyPage]
})
export class SearchSurveyPageModule {}
