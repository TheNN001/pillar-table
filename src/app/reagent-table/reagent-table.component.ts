import { Component, Input, OnInit } from '@angular/core';
import { reagentTable } from './reagent-table';

@Component({
  selector: 'app-reagent-table',
  templateUrl: './reagent-table.component.html',
  styleUrls: ['./reagent-table.component.scss']
})
export class ReagentTableComponent {
  @Input() dataArray : Array<reagentTable> | undefined;
  @Input() overallScore : boolean = false;
  @Input() overallText : string | undefined;
  @Input() overallColor : string | undefined;
  @Input() scoreWidth : number = 35;
}

//overallScore es para habilitar o deshabilitar la calificacion general que se muestra por encima de la tabla
//overallText es el texto que se va a colocar en la calificacion general
//overallColor es el color que va a tener la calificacion general
//scoreWidth es la cantidad de espacio que va a tomar la calificacion en la tabla (en porcentaje)

//affirmations as collapsible
//reagent table