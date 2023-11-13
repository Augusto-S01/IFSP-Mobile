import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../models/IAppState';
import { map, Observable, take } from 'rxjs';
import { criarNota } from '../store/app.state';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  constructor(
    private store:Store<{ app : IAppState }>) {
    }


  notas$ = this.store
  .select('app').pipe(
    map(e => e.notas));

  ngOnInit(): void {

  }





}
