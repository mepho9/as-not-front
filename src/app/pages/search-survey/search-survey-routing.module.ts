import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchSurveyPage } from './search-survey.page';

const routes: Routes = [
  {
    path: '',
    component: SearchSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchSurveyPageRoutingModule {}
