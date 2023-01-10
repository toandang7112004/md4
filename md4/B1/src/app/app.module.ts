import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AHelloComponent } from './a-hello/a-hello.component';
import { BPropertyComponent } from './b-property/b-property.component';
import { CClassComponent } from './c-class/c-class.component';
import { DEventComponent } from './d-event/d-event.component';
import { ETwoWayComponent } from './e-two-way/e-two-way.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';
import { ITemplateComponent } from './i-template/i-template.component';
import { KLifeCycleComponent } from './k-life-cycle/k-life-cycle.component';
import { LInputComponent } from './l-input/l-input.component';
import { UTemplateDrivenComponent } from './u-template-driven/u-template-driven.component';
import { VDataDrivenComponent } from './v-data-driven/v-data-driven.component';
import { YRegisterComponent } from './y-register/y-register.component';
@NgModule({
  declarations: [
    AppComponent,
    AHelloComponent,
    BPropertyComponent,
    CClassComponent,
    DEventComponent,
    ETwoWayComponent,
    CustomPipe,
    ITemplateComponent,
    KLifeCycleComponent,
    LInputComponent,
    UTemplateDrivenComponent,
    VDataDrivenComponent,
    YRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
