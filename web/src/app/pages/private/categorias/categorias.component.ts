import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaResponse } from 'src/app/core/model/categoriaResponse';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {

  categorias: CategoriaResponse[] = [];
  categoriaVacia: boolean = false;
  modified: boolean = false;
  idRestaurante: String = "";
  showSuccessSave: boolean = false;
  showErrorSave: boolean = false;

  categoriaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
  });
  

  constructor(private categoriaService: CategoriaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.idRestaurante = params['id'];
      this.categoriaService.getFromRestaurante(this.idRestaurante).subscribe({
        next: Response => {
          this.categorias = Response;
        },
        error: error => {
          this.categoriaVacia = true;
        }
      })

    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.categorias, event.previousIndex, event.currentIndex);
    this.reassignOrder();
    this.modified=true;
  }

  reassignOrder() {
    this.categorias.forEach((c, index) => c.orden = index + 1);
  }

  save(){
    this.categoriaService.save(this.categorias, this.idRestaurante ).subscribe({
      next: Response => {
        this.showSuccessSave = true;
        setTimeout(() => {
          this.showSuccessSave = false;
        }, 3000);
      },
      error: error => {
        this.showErrorSave = true;
        setTimeout(() => {
          this.showErrorSave = false;
        }, 3000);
      }
    });
  }

  addCategoria(){
    let categoriaNueva: CategoriaResponse = {
      nombre: this.categoriaForm.value.nombre!,
      id: null,
      orden: this.categorias.length + 1
    }
    this.categorias.push(categoriaNueva);
    this.categoriaForm.reset()
  }

}


