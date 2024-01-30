import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Cheese} from "../data/cheese";
import {MatCheckbox} from "@angular/material/checkbox";

let input = Input;

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    NgIf,
    MatCardTitle,
    FormsModule,
    MatCardContent,
    MatFormField,
    MatInput,
    MatCardActions,
    MatButton,
    MatCheckbox
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnChanges {
  title = 'Select a cheese or input a new one!';
  @Input() selectedCheese?: Cheese;
  @Input() cheeseList?: Cheese[] = [];
  @Output() onCheeseSave = new EventEmitter<Cheese>;
  localCheese: Cheese = this.getDefaultCheese()

  ngOnChanges(changes: SimpleChanges) {
    let newCheese = changes['selectedCheese'] && changes['selectedCheese'].currentValue;
    if (newCheese) {
      this.localCheese = {
        id: newCheese.id,
        brand: newCheese.brand,
        name: newCheese.name,
        texture: newCheese.texture,
        favorite: newCheese.favorite
      };
    }
  }

  createCheese(createdCheese?: Cheese) {
    console.log("Creating Cheese: " + JSON.stringify(createdCheese))

    if (this.cheeseList && createdCheese) {
      this.cheeseList.push({
        id: Math.random(),
        brand: createdCheese.brand,
        name: createdCheese.name,
        texture: createdCheese.texture,
        favorite: createdCheese.favorite
      })

      this.reset();
    }
  }

  saveCheese(updatedCheese?: Cheese) {
    console.log("Update for: " + JSON.stringify(updatedCheese))

    if (this.cheeseList && updatedCheese) {
      let idx: number = this.cheeseList.findIndex(cheese => cheese.id == updatedCheese.id);

      if (idx !== -1) {
        this.onCheeseSave.emit(updatedCheese);
        this.cheeseList[idx] = {
          id: updatedCheese.id,
          brand: updatedCheese.brand,
          name: updatedCheese.name,
          texture: updatedCheese.texture,
          favorite: updatedCheese.favorite
        }
      } else {
        this.createCheese(updatedCheese);
      }

      // Maybe
      this.reset();
    }
  }

  reset() {
    this.localCheese = this.getDefaultCheese();
  }

  private getDefaultCheese() : Cheese {
    return {
      id: -1,
      brand: '',
      name: '',
      texture: '',
      favorite: false
    }
}
}
