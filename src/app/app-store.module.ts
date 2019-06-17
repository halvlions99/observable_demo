import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Store, StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { reducers } from './app.reducer';

// IMPORT EFFECTS


const effects = [
];

// IMPORT SERVICES
const services = [

];

// IMPORT STORES

const stores = [

];

@NgModule({
  imports: [
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 100 }),
    EffectsModule.forRoot([...effects])
  ],
  providers: [...services, ...stores],
  exports: [RouterModule]
})
export class AppStoreModule {}
