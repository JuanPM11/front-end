import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
   
    this.peliculasEnCines   =[{
      titulo: 'Spider-Man',
      fechaLanzamiento: new Date(),
      precio: 14000.12,
      poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg'


    },
    {
      titulo: 'Moana',
      fechaLanzamiento: '2020-02-15',
      precio: 100.12,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }]

}
peliculasEnCines ;

peliculasProximosEstrenos = [{
    titulo: 'Batman',
    fechaLanzamiento: new Date(),
    precio: 14000.12,
    poster:'https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg'

},
{
    titulo: 'Cars',
    fechaLanzamiento: '2020-02-15',
    precio: 100.12,
    poster:'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_UX182_CR0,0,182,268_AL_.jpg'


}]

}
