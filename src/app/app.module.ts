import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { FridgeComComponent } from './fridge-com/fridge-com.component';
import { RecipeComComponent } from './recipe-com/recipe-com.component';


@NgModule({
  declarations: [
    AppComponent,
    FridgeComComponent,
    RecipeComComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
