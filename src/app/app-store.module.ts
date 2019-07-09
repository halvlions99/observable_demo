import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// If showing devtools uncomment
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// If showing devtools add to package.json
// "@ngrx/store-devtools": "^8.0.0-beta.26",

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
    // If showing devtools uncomment
    // StoreDevtoolsModule.instrument({ maxAge: 100 }),
    EffectsModule.forRoot([...effects])
  ],
  providers: [...services, ...stores],
  exports: [RouterModule]
})
export class AppStoreModule {}
