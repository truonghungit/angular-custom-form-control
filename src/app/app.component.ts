import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() {
    this.feedbackForm = new FormGroup({
      feedback: new FormControl()
    })
  }

  onRatingChanged(rating: number): void {
    this.rating = rating;
  }

  onRatingForAdsChanged(rating: number): void {
    this.ratingAds = rating;
  }

  onRatingForEasyToUseChanged(rating: number): void {
    this.ratingForEasyToUse = rating;
  }

  obSubmit(): void {
    const data = {
      ...this.feedbackForm.value,
      rating: this.rating,
      ratingAds: this.ratingAds,
      ratingForEasyToUse: this.ratingForEasyToUse,
    };

    console.log("data: ", data)
    // TODO: send data to server
  }

}
