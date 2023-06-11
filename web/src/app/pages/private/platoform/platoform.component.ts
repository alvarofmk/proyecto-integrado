import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoriaResponse } from 'src/app/core/model/categoriaResponse';
import { PlatoRequest } from 'src/app/core/model/platoRequest';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { PlatoService } from 'src/app/core/services/plato.service';

@Component({
  selector: 'app-platoform',
  templateUrl: './platoform.component.html',
  styleUrls: ['./platoform.component.css']
})
export class PlatoformComponent implements OnInit {

  idRestaurante: String = "";
  categorias: CategoriaResponse[] = [];
  categoriaVacia: boolean = false;
  
  file: File | undefined = undefined;
  showSuccess: boolean = false;
  idPlato: string = '';
  platoToEdit: PlatoRequest | undefined;

  constructor(private route: ActivatedRoute,
    private platoService: PlatoService,
    private categoriaService: CategoriaService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPlato = params['idPlato'];
      this.idRestaurante = params['id'];
      this.platoService.findById(this.idPlato).subscribe(plato => {
        this.platoToEdit = plato
        debugger;
        if(this.platoToEdit != undefined){
          this.platoForm.controls['nombre'].setValue(plato.nombre);
          this.platoForm.controls['descripcion'].setValue(plato.descripcion as string);
          this.platoForm.controls['precio'].setValue(plato.precio);
          this.platoForm.controls['ingredientes'].setValue(plato.ingredientes.join(", "));
          this.platoForm.controls['sinGluten'].setValue(plato.sinGluten);
          this.platoForm.controls['categoria'].setValue(this.categorias.find(c => c.id == plato.categoria.id));
        }
      });
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

  platoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(0.0, Validators.required),
    ingredientes: new FormControl('', Validators.required),
    sinGluten: new FormControl(false,),
    categoria: new FormControl(),
  });

  onSubmit(){
    debugger;
    if(this.platoToEdit == undefined){{
      let platoNuevo: PlatoRequest = {
        nombre: this.platoForm.value.nombre!,
        descripcion: this.platoForm.value.descripcion!,
        ingredientes: this.platoForm.value.ingredientes!.split(","),
        precio: this.platoForm.value.precio!,
        sinGluten: this.platoForm.value.sinGluten!,
        categoria: this.platoForm.value.categoria != null ? this.platoForm.value.categoria : null,
        id: null
      }
      this.platoService.create(platoNuevo, this.file!, this.idRestaurante as string).subscribe(response => {
        this.showSuccess = true;
        setTimeout(() => {
          this.router.navigate(['platos/' + this.idRestaurante])
        }, 2000);
        
        });
      } 
    }else {
      let platoNuevo: PlatoRequest = {
        nombre: this.platoForm.value.nombre!,
        descripcion: this.platoForm.value.descripcion!,
        ingredientes: this.platoForm.value.ingredientes!.replace(" ", "").split(","),
        precio: this.platoForm.value.precio!,
        sinGluten: this.platoForm.value.sinGluten!,
        categoria: this.platoForm.value.categoria != null ? this.platoForm.value.categoria : null,
        id: this.platoToEdit.id
      }
      this.platoService.edit(platoNuevo).subscribe(response => {
        this.showSuccess = true;
        setTimeout(() => {
          this.router.navigate(['platos/' + this.idRestaurante])
        }, 2000);
        
      });
    }
  }

  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }

}
