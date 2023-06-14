import { Component, OnInit } from '@angular/core';
import { VentaResponse } from 'src/app/core/model/ventaResponse';
import { PageDTO } from 'src/app/core/model/pageDTO';
import { VentaService } from 'src/app/core/services/venta.service';
import { ValoracionesService } from 'src/app/core/services/valoraciones.service';
import { RateResponse } from 'src/app/core/model/rateResponse';
import { DatesRequest } from 'src/app/core/model/datesRequest';
import { Stats } from 'src/app/core/model/statsDTO';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  ventas: VentaResponse[] = [];
  valoraciones : RateResponse[] = [];
  defaultPage = 0;
  defaultSize = 10;
  stats: Stats | undefined;

  constructor(private ventaService: VentaService, private valoracionService: ValoracionesService) { }

  ngOnInit(): void {
    this.ventaService.getSales(this.defaultPage, this.defaultSize).subscribe(res => {
      this.ventas = res.contenido;
    })
    this.valoracionService.getValoraciones().subscribe(res => {
      this.valoraciones = res.contenido;
    })
    let currentDate = new Date();
    let from = new Date();
    from.setDate(currentDate.getDate() - 1);
    this.getStats(from, currentDate);
  }

  searchStats(event: any) {
    let currentDate = new Date();
    let dateFrom = new Date();
    switch (event.currentTarget.value) {
      case "dia":
        dateFrom.setDate(currentDate.getDate() - 1);
        break;
      case "mes":
        dateFrom.setDate(currentDate.getDate() - 30);
        break;
      case "anio":
        dateFrom.setDate(currentDate.getDate() - 365);
        break;
      default:
        break;
    }
    this.getStats(dateFrom, currentDate);

  }

  getStats(from: Date, to: Date){
    let request: DatesRequest = {
      from: from.getFullYear() + "-" + from.getMonth() + "-" + from.getDate(), 
      to: to.getFullYear() + "-" + to.getMonth() + "-" + to.getDate(),
    }
    this.ventaService.findStats(request).subscribe({
      next: response => {
        this.stats = response
      },error: error => {
        this.stats = {from: request.from, to: request.to, imgPlatoMasPedido: "default-plato.jpg", nombrePlatoMasPedido: "Ninguno", numPedidos: 0, recaudado: 0}
      }
    })
  }

}
