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
    this.name = 'Audi';
    this.speed = 300;
    this.model = 'RS8';
    this.colors = {
      car: 'Белый',
      salon: 'Черный',
      wheels: 'Серибристый'
    };
    this.options = ["ABS","Автопилот","Авто паркинг"];
    }

    bmwSelect(){
      this.name = 'BMW';
      this.speed = 320;
      this.model = 'M5';
      this.colors = {
        car: 'Синий',
        salon: 'Белый',
        wheels: 'Матовые'
      };
      this.options = ["ABS","Авто паркинг"];
    }

}

interface Colors {
  car:string,
  salon:string,
  wheels:string
}
