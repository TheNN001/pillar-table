import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reagent-table-row',
  templateUrl: './reagent-table-row.component.html',
  styleUrls: ['./reagent-table-row.component.scss']
})
export class ReagentTableRowComponent {
  @Input() rowName : string = '';
  @Input() rowScoreText : string = '';
  @Input() rowScoreColor : string = '';
  @Input() rowScoreTextColor : string = '#FFFFFF';
  @Input() scoreWidth : number = 35;
  @Input() affirmation : boolean = true;
}
