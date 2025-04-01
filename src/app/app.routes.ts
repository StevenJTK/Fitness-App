import { Routes } from '@angular/router';
import { TrainingFormComponent } from './training-form/training-form.component';
import { TestExercisesComponent } from './test-exercises/test-exercises.component';
import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  //{ path: '', component: TrainingFormComponent }, // default route, user lands here first
  { path: 'exercises', component: TestExercisesComponent }, // when user sends form
  { path: 'about', component: AboutComponent }, // path to about
  { path: '', component: LandingPageComponent }, // dafault path
];
