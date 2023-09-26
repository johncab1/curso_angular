import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  constructor(){}

  ngOnInit(): void{

  }

  //nombre:string = "Jonatan Rodríguez";

  persona:Persona = {
    nombre: 'Jonatan Rodríguez',
    edad: 30
  }
}
