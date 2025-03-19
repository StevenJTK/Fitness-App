import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

interface TrainingChoiceFormGroup {
  category: FormControl<'styrka'>;
  level: FormControl<'Lätt'>;
}

@Component({
  selector: 'app-training-form',
  imports: [ReactiveFormsModule],
  templateUrl: './training-form.component.html',
  styleUrl: './training-form.component.css',
})

export class TrainingFormComponent {
  trainingForm = new FormGroup<TrainingChoiceFormGroup>({
    category: new FormControl<'styrka'>('styrka', {
      nonNullable: true,
    }),
    level: new FormControl<'Lätt'>('Lätt', { nonNullable: true }),
  });

  constructor(private router: Router) {}

  handleOnSubmit() {
    // fetch values from form
    const formValues = this.trainingForm.value;

    // navigate to /exercises + send values as query parameters
    this.router.navigate(['/exercises'], {
      queryParams: formValues,
    });
  }
}
