import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categoria-cards',
  templateUrl: './categoria-cards.component.html',
  styleUrls: ['./categoria-cards.component.css']
})
export class CategoriaCardsComponent implements OnInit {

  @Input() categorias:any;

  constructor() { }

  ngOnInit(): void {
  }

}
