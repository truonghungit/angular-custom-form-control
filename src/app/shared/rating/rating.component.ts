import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input('rating') rating: number = 0;
  @Input('starCount') starCount: number = 5;

  @Output() ratingChanged = new EventEmitter();

  ratingArr: Array<number> = [];
  tempRating = this.rating;

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  getActiveClass(index: number) {
    return this.tempRating >= index + 1 ? "active" : ""
  }

  onClick(rating: number) {
    this.rating = rating;
    this.ratingChanged.emit(rating);
  }

  onMouseEnter(index: number) {
    this.tempRating = index + 1;
  }

  onMouseLeave() {
    this.tempRating = this.rating;
  }
}
