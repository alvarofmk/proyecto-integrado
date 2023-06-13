import { Component, OnInit } from '@angular/core';
import { VentaResponse } from 'src/app/core/model/ventaResponse';
import { PageDTO } from 'src/app/core/model/pageDTO';
import { VentaService } from 'src/app/core/services/venta.service';
import { ValoracionesService } from 'src/app/core/services/valoraciones.service';
import { RateResponse } from 'src/app/core/model/rateResponse';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ventas: VentaResponse[] = [];
  valoraciones : RateResponse[] = [];
  defaultPage = 1;
  defaultSize = 10;

  constructor(private ventaService: VentaService, private valoracionService: ValoracionesService) { }

  ngOnInit(): void {
    this.ventaService.getSales(this.defaultPage, this.defaultSize).subscribe(res => {
      this.ventas = res.contenido;
    })
    this.valoracionService.getValoraciones().subscribe(res => {
      debugger;
      this.valoraciones = res.contenido;
    })
  }

}
