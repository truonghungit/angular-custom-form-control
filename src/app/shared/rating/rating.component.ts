import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input() rating: number = 0;
  @Input() max: number = 5;

  @Output() ratingChanged = new EventEmitter();

  stars: Array<number> = [];
  tempRating = this.rating;

  ngOnInit() {
    for (let index = 0; index < this.max; index++) {
      this.stars.push(index);
    }
  }

  getActiveClass(index: number) {
    return this.tempRating >= index + 1 ? "active" : ""
  }

  onStarClick(rating: number) {
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
