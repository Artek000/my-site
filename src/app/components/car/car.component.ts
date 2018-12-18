import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  model:string;
  speed:number;
  name:string;
  colors:Colors;
  options:string[];

  constructor() { }

  ngOnInit() {
    this.name = 'Mersedes';
    this.speed = 350;
    this.model = 'майбах';
    this.colors = {
      car: 'Золотой',
      salon: 'Кожа',
      wheels: 'Черный'
    };
    this.options = ["ABS","Автопилот","Авто паркинг","Массажное кресло"];

    }

    addOpt(option){
      this.options.unshift(option);
      return false;
    }
    delOpt(option){

    }

    carSelect(carName){
      if(carName == 'bmw'){
          this.name = 'BMW';
          this.speed = 320;
          this.model = 'M5';
          this.colors = {
            car: 'Синий',
            salon: 'Белый',
            wheels: 'Матовые'
          };
          this.options = ["ABS","Авто паркинг"];
      }else if(carName == 'audi'){
        this.name = 'Audi';
        this.speed = 300;
        this.model = 'RS8';
        this.colors = {
          car: 'Белый',
          salon: 'Черный',
          wheels: 'Серибристый'
        };
        this.options = ["ABS"];
      }else if(carName == 'mers'){
        this.name = 'Mersedes';
        this.speed = 350;
        this.model = 'майбах';
        this.colors = {
          car: 'Золотой',
          salon: 'Кожа',
          wheels: 'Черный'
        };
        this.options = ["ABS","Автопилот","Авто паркинг","Массажное кресло"];
      }

    }

}

interface Colors {
  car:string,
  salon:string,
  wheels:string
}
