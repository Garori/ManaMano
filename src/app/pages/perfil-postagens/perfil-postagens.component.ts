import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil-postagens',
  templateUrl: './perfil-postagens.component.html',
  styleUrls: ['./perfil-postagens.component.css']
})
export class PerfilPostagensComponent implements OnInit {

  @Input() producoes:any;

  constructor() { }

  ngOnInit(): void {
  }

}
