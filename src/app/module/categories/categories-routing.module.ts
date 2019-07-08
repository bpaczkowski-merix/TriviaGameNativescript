import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CategoriesListComponent } from './containers/categories-list/categories-list.component';

export const routes: Routes = [
  {
    path: '',
    component: CategoriesListComponent,
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CategoriesRoutingModule { }
