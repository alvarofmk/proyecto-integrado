import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestauranteResponse } from 'src/app/core/model/restauranteResponse';
import { RestauranteService } from 'src/app/core/services/restaurante.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurantes: RestauranteResponse[] = [];
  showSuccessDelete: boolean = false;
  showErrorDelete: boolean = false;
  showSuccessImg: boolean = false;
  showErrorImg: boolean = false;

  file: File | undefined = undefined;

  constructor(private restauranteService: RestauranteService, private router: Router) { }

  ngOnInit(): void {
    this.restauranteService.getManaged().subscribe(response => {
      this.restaurantes = response.contenido;
    })
  }

  eliminar(id: string){
    debugger;
    this.restauranteService.delete(id).subscribe({
      next: Response => {
        this.showSuccessDelete = true;
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      error: error => {
        this.showErrorDelete = true;
        setTimeout(() => {
          this.showErrorDelete = false;
        }, 3000);
      }
    });
  }

  onFilechange(event: any, id: string) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
    this.restauranteService.editImg(id, this.file!).subscribe({
      next: Response => {
        this.showSuccessImg = true;
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      error: error => {
        this.showErrorImg = true;
        setTimeout(() => {
          this.showErrorImg = false;
        }, 3000);
      }
    })
  }

}
