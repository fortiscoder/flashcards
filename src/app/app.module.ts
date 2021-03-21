import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import {FlashcardSettingComponent} from './components/flashcard-setting/flashcard-setting.component';
import { HomeComponent } from './components/home/home.component';

// Services
import { QuizSettingService  } from "./services/quiz-setting.service";
import { QuizService } from "./services/quiz.service";

// Route Configuration
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'flashcard', component: FlashcardComponent},
  {path: 'settings', component: FlashcardSettingComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    FlashcardSettingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: false}
    ),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    QuizService,
    QuizSettingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
