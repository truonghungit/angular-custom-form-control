import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => RatingComponent),
  }]
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  @Input() max: number = 5;

  rating = 0;
  tempRating = 0;

  touched = false;
  disabled = false;
  stars: Array<number> = [];

  onChange = (rating: number) => { };
  onTouched = () => { };

  ngOnInit() {
    for (let index = 0; index < this.max; index++) {
      this.stars.push(index);
    }
  }

  writeValue(value: number): void {
    this.rating = value;
    this.tempRating = this.rating;
  }

  registerOnChange(onChangeFn: any): void {
    this.onChange = onChangeFn;
  }

  registerOnTouched(onTouchedFn: any): void {
    this.onTouched = onTouchedFn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onStarClick(rating: number) {
    if (this.disabled) {
      return;
    }

    this.markAsTouched();
    this.rating = rating;
    this.onChange(this.rating);
  }

  onMouseEnter(index: number) {
    if (this.disabled) {
      return;
    }
    this.tempRating = index + 1;
  }

  onMouseLeave() {
    if (this.disabled) {
      return;
    }
    this.tempRating = this.rating;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
