import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { LandingPageComponent } from '@app/landing-page/landing-page.component';
import { MaterialModule } from '@app/material.module';

import { FooterComponent } from './app-layouts/secure-main-layout/components/footer/footer.component';
import { SideNavConentComponent } from './app-layouts/secure-main-layout/components/side-nav-content/side-nav-conent.component';
import { ToolbarMainConentComponent } from './app-layouts/secure-main-layout/components/toolbar-main-content/toolbar-main-conent.component';
import { SecureLayoutComponent } from './app-layouts/secure-main-layout/containers/layout/secure-layout.component';

@NgModule({
  declarations: [SecureLayoutComponent, SideNavConentComponent, ToolbarMainConentComponent, FooterComponent, LandingPageComponent],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule, ReactiveFormsModule, FlexLayoutModule],
  exports: [CommonModule, MaterialModule, RouterModule],
  providers: [],
  bootstrap: []
})
export class SharedModule {}
