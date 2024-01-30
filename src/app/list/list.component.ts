import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatActionList, MatListItem} from "@angular/material/list";
import {Cheese} from "../data/cheese";
import {MatLine} from "@angular/material/core";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {DetailComponent} from "../detail/detail.component";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatActionList,
    MatCardTitle,
    MatListItem,
    MatLine,
    MatButton,
    MatIcon,
    NgForOf,
    NgIf,
    DetailComponent,
    MatDivider
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  title = 'Cheesey Cheese';
  @Input() cheeseList?: Cheese[];
  currentCheese?: Cheese;

  selectCheese(selectedCheese: Cheese) {
    this.currentCheese = selectedCheese;
  }

  deleteCheese(deletedCheese: Cheese) {
    if (this.cheeseList && deletedCheese) {
      let idx: number = this.cheeseList.findIndex(cheese => cheese.id == deletedCheese.id);

      console.log("Delete index found: " + idx);
      if (idx !== -1) {
        this.cheeseList.splice(idx, 1);
      }
    }
  }

  handleCheeseUpdate(eventCheese: Cheese) {
    // Just a test of sending something back to the list component
    console.log("Event Update for Cheese Received: " + JSON.stringify(eventCheese))
  }
}
