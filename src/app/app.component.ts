import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { Shopping } from "./shopping";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Project x';

  shoppingValue!: string;
  list: Shopping[] | undefined;

  ngOnInit() {
    this.list = [];
    this.shoppingValue = "";
  }

  // Tuotteen lisäys & tarkistetaan, että ei ole tyhjä string
  addItem() {
    if (this.shoppingValue !== "") {
      const newItem: Shopping = {
        id: Date.now(),
        value: this.shoppingValue,
        isDone: false
      };
      this.list?.push(newItem);
    }
    this.shoppingValue = "";
  }

  // Tuotteen poisto. Annetaan poistettavan tuotteen id parametrina.
  deleteItem(id: number) {
    this.list = this.list?.filter(item => item.id !== id);
  }


}
