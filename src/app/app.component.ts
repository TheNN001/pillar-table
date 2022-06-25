import { Component } from '@angular/core';
import { reagentTable } from './reagent-table/reagent-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  examplArray: Array<reagentTable> = [
    {
      id: 1,
      title: 'Example1',
      scoreText: 'Excelente',
      scoreColor: '#0000ff',
      scoreTextColor: '#FFFFFF',
      affirmationSubContent: [
        {
          id_sub: 1,
          title_sub: 'Example1Sub1',
          scoreText_sub: 'Muy alta',
          scoreColor_sub: '#003cff',
          scoreTextColor_sub: '#FFFFFF'
        },
        {
          id_sub: 2,
          title_sub: 'Example1Sub2',
          scoreText_sub: 'Alta',
          scoreColor_sub: '#008eff',
          scoreTextColor_sub: '#FFFFFF'
        },
        {
          id_sub: 3,
          title_sub: 'Example1Sub3',
          scoreText_sub: 'Media (+)',
          scoreColor_sub: '#00ffff',
          scoreTextColor_sub: '#FFFFFF'
        }
      ]
    },
    {
      id: 2,
      title: 'Example2',
      scoreText: 'Media (-)',
      scoreColor: '#ff8e00',
      scoreTextColor: '#FFFFFF',
      affirmationSubContent: [
        {
          id_sub: 1,
          title_sub: 'Example2Sub1',
          scoreText_sub: 'Muy Baja',
          scoreColor_sub: '#ff3c00',
          scoreTextColor_sub: '#FFFFFF'
        },
        {
          id_sub: 2,
          title_sub: 'Example2Sub2',
          scoreText_sub: 'Critica',
          scoreColor_sub: '#ff0000',
          scoreTextColor_sub: '#FFFFFF'
        },
        {
          id_sub: 3,
          title_sub: 'Example2Sub3',
          scoreText_sub: 'Mas Texto',
          scoreColor_sub: '#211576',
          scoreTextColor_sub: '#FFFFFF'
        },
        {
          id_sub: 4,
          title_sub: 'Example2Sub4',
          scoreText_sub: 'Mas Texto',
          scoreColor_sub: '#211576',
          scoreTextColor_sub: '#FFFFFF'
        },
        {
          id_sub: 5,
          title_sub: 'Example2Sub5',
          scoreText_sub: 'Mas Texto',
          scoreColor_sub: '#211576',
          scoreTextColor_sub: '#FFFFFF'
        }
      ]
    },
    {
      id: 3,
      title: 'Example3',
      scoreText: 'Texto',
      scoreColor: 'green',
      scoreTextColor: '#FFFFFF',
      affirmationSubContent: [
        {
          id_sub: 1,
          title_sub: 'Example3Sub1',
          scoreText_sub: 'Mas Texto',
          scoreColor_sub: '#211576',
          scoreTextColor_sub: '#FFFFFF'
        },
        {
          id_sub: 2,
          title_sub: 'Example3Sub2',
          scoreText_sub: 'Mas Texto',
          scoreColor_sub: '#211576',
          scoreTextColor_sub: '#FFFFFF'
        }
      ]
    },
    {
      id: 4,
      title: 'Example4',
      scoreText: 'Texto',
      scoreColor: '#ABBCCD',
      scoreTextColor: '#FFFFFF'
    }
  ]
}
