import { Component } from '@angular/core';
import { Persona } from '../persona';
@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  personas:Persona[] = [
    {nombre: 'Juan', edad: 20},
    {nombre: 'Alma', edad: 22},
    {nombre: 'Pedro', edad: 10},
    {nombre: 'Desire', edad: 22}
  ];

}
