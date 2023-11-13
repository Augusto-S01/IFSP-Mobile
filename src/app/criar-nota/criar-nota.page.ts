import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { criarNota } from '../store/app.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable, take } from 'rxjs';
import { IAppState } from '../models/IAppState';

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.page.html',
  styleUrls: ['./criar-nota.page.scss'],
})
export class CriarNotaPage implements OnInit {
  id: number = 0;
  titulo: string = "";
  conteudo: string = "";
  imagem: string = "";
  dataCriacao: Date = new Date();

  notas$ = this.store
  .select('app').pipe(
    map(e => e.notas));

  contador$ = this.store
  .select('app').pipe(
    map(e => e.contador));

  constructor(
    private store:Store<{ app : IAppState }>,
    private formBuilder: FormBuilder,
    private router : Router,
    ) {}


  ngOnInit() {

  }



  criarNovaNota(){
    this.contador$.pipe(take(1)).subscribe(c => this.id = c);
    this.store.dispatch(criarNota({
      payload:{
        id: this.id,
        titulo: this.titulo,
        conteudo: this.conteudo,
        dataCriacao: new Date(),
        imagem: this.imagem
      }
    }))
      this.titulo = "";
      this.conteudo = "";
      this.imagem = "";
      this.router.navigate(['/home']);

  }



}
