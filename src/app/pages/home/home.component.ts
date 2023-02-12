import { Component } from '@angular/core';

export interface Languges {
  name: string
  range: number;
  icon: string;
  style: string;
}

export interface Intereses {
  name: string;
  icon: string;
}

export interface Herramientas {
  name: string
  range: number;
  icon: string;
  style: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  languages: Languges[] = [
    {
      name: 'HTML5',
      range: 70,
      icon: 'fab fa-html5',
      style: 'icon-html'
    },
    {
      name: 'CSS3',
      range: 20,
      icon: 'fab fa-css3-alt',
      style: 'icon-css'
    },
    {
      name: 'JavaScript',
      range: 80,
      icon: 'fab fa-js',
      style: 'icon-js'
    },
    {
      name: 'PHP',
      range: 20,
      icon: 'fab fa-php',
      style: 'icon-php'
    },
    {
      name: 'JAVA',
      range: 40,
      icon: 'fab fa-java',
      style: 'icon-jv'
    },
    {
      name: 'NodeJs',
      range: 70,
      icon: 'fab fa-node-js',
      style: 'icon-node'
    },
    {
      name: 'Angular',
      range: 70,
      icon: 'fab fa-angular',
      style: 'icon-ang'
    },
    {
      name: 'Postgresql - Mysql',
      range: 20,
      icon: 'fas fa-database',
      style: 'icon-sql'
    }
  ];

  intereses: Intereses[] = [
    {
      name: 'Lectura',
      icon: 'fab fa-readme'
    },
    {
      name: 'Deportes',
      icon: 'fas fa-running'
    },
    {
      name: 'Video Juegos',
      icon: 'fas fa-gamepad'
    },
    {
      name: 'Musica',
      icon: 'fas fa-music'
    }
  ];

  herramientas: Herramientas[] = [
    {
      name: 'POSTMAN',
      range: 40,
      icon: 'fas fa-user-astronaut',
      style: 'icon-post'
    },
    {
      name: 'VSCODE',
      range: 50,
      icon: 'fas fa-code',
      style: 'icon-vs'
    },
    {
      name: 'GIT',
      range: 30,
      icon: 'fab fa-github',
      style: ''
    },
  ]

}
