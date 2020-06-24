import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WritingPageRoutingModule } from './writing-routing.module';

import { WritingPage } from './writing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WritingPageRoutingModule
  ],
  declarations: [WritingPage]
})
export class WritingPageModule {}
