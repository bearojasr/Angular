import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})

export class EuComponent implements OnInit {

  Nome:string= "Beatriz Adriana del Valle Rojas Romero";
  Idade:number= 31;
  Amo:string= " ir à praia, tomar uma cerveja gelada, compartilhar com a família e amigos. É o melhor da vida";
  Gosto:string= "comemorar aniversários, celebrar a vida, ir ao cinema ver um bom filme, uma boa serie de Netflix."; 
  Disfruto:string= " assistir os filmes de Harry Potter e da Marvel, sou uma grande fã.";
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
