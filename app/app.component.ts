//ROOT COMPONENT
import { Component } from '@angular/core';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS // this is our VIEW
@Component({ // defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1 id="title">Recipe List</h1>
   <ul class="noBullets"> <!-- repeater DIRECTIVE --> <!-- tasks is the array and it is assigning each iteration to currentTask temporarly -->
     <li *ngFor="let recipe of recipes"><h2>{{recipe.title}}</h2> <br> {{recipe.ingredients}} <br> {{recipe.directions}}</li>
   </ul>
  </div>
  `
})

//Part 2 CLASS DEFINITION -- determines how it BEHAVES
export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Oatmeal', "Oats, Water, Honey", "Put oats in boiling water. Add honey when cooked."),

    new Recipe('Salmon', "Fish, lemon", "Bake salmon. Add lemon.")
  ];
}
//class declaration is our MODEL which is also data
export class Recipe {

  constructor(public title: string, public ingredients: string, public directions: string) { }
}


//TIP when a variable in a component's class declaration references another variable in the class, it must be prefaced with the this keyword.
