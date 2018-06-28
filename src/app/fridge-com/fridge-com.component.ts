import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from '../angular-service.service';
import { Ingredients } from '../Ingredients.class';

@Component({
  selector: 'app-fridge-com',
  templateUrl: './fridge-com.component.html',
  styleUrls: ['./fridge-com.component.css']
})
export class FridgeComComponent implements OnInit {
  public angService = new AngularServiceService();

  public temp : Ingredients = new Ingredients("", 0);
  public temp2 : Ingredients= null;
  public temp3 : Ingredients = new Ingredients("", 0);
    
  constructor(angService:AngularServiceService) { }

  ngOnInit() {
  }
  add(){
    this.angService.coolFridge.addIng(new Ingredients(this.temp.name,this.temp.quantity));
  }
  delete(){
    this.angService.coolFridge.removeIng(this.temp2,this.temp2.quantity);
    console.log(this.temp2);

  }
  select(x: Ingredients){
    this.temp2=x;

  }


}
