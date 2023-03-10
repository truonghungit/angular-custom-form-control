import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCustomFormControl';

  feedbackForm: FormGroup;
  rating = 0;
  ratingAds = 0;
  ratingForEasyToUse = 0;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      rating: [],
      ratingForAds: [],
      ratingForEasyToUse: [],
      feedback: [],
    });

    console.log(this.feedbackForm);
  }

  obSubmit(): void {
    console.log("data: ", this.feedbackForm.value)
    // TODO: send data to server
  }

}
