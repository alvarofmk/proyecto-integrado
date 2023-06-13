import { Component, OnInit } from '@angular/core';
import { PageDTO } from 'src/app/core/model/pageDTO';
import { VentaResponse } from 'src/app/core/model/ventaResponse';
import { VentaService } from 'src/app/core/services/venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  
  defaultPage = 0;
  defaultSize = 10;
  ventas: PageDTO<VentaResponse> | undefined;
  Arr = Array;
  numPages: number = 0;
  selectedPage: number = 0;
  ventaDetails: VentaResponse | undefined;;

  constructor(private ventaService: VentaService) { }

  ngOnInit(): void {
    this.ventaService.getSales(this.defaultPage, this.defaultSize).subscribe(res => {
      this.ventas = res;
      this.numPages = res.numeroPaginas;
      this.selectedPage = res.paginaActual
    })
  }

  changePage(page: number){
    this.ventaService.getSales(page, this.defaultSize).subscribe(res => {
      this.ventas = res;
      this.numPages = res.numeroPaginas;
      this.selectedPage = res.paginaActual
    })
  }

  toggleDetails(id: string){
    if(this.ventaDetails != undefined && this.ventaDetails.id == id){
      this.ventaDetails = undefined;
    }else{
      this.ventaService.findDetails(id).subscribe(res => {
        this.ventaDetails = res;
      })
    }
    
  }

}
