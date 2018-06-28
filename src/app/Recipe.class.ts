 import { Ingredients } from './Ingredients.class';

export class Recipe{
    
    ingredientArray : Array<Ingredients>;
    instructions : string;
    time : number;

    addItem(ing : Ingredients){
        this.ingredientArray.push(ing);
    }

    addInstruction(inst : String){
        this.instructions = this.instructions  +  inst;
    }

    constructor(ing : Array<Ingredients>, inst : string, timeCount : number){
        this.ingredientArray = ing;
        this.instructions = inst;
        this.time = timeCount;
    }



}

