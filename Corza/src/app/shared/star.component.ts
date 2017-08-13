import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl:'./star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  @Input() rating: number;
  startWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new
                 EventEmitter<string>();

  ngOnChanges(): void {
     this.startWidth = this.rating * 86/5;
  }

  onClick(): void {
      //console.log(`the rating ${this.rating} was clicked !`);
      this.ratingClicked.emit(`the rating ${this.rating} was clicked !`)
  }
}
