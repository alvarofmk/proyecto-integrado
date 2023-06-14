package com.salesianostriana.meal.model.dto.venta;

import com.salesianostriana.meal.model.Plato;
import com.salesianostriana.meal.model.dto.plato.PlatoResponseDTO;
import lombok.*;

import java.time.LocalDate;

@Builder
@Getter
@Setter
public class EstadisticasDTO {

    public EstadisticasDTO(Double recaudado, Long numPedidos, String nombrePlatoMasPedido, String imgPlatoMasPedido) {
        this.recaudado = recaudado;
        this.numPedidos = numPedidos;
        this.nombrePlatoMasPedido = nombrePlatoMasPedido;
        this.imgPlatoMasPedido = imgPlatoMasPedido;
    }

    public EstadisticasDTO(Double recaudado, Long numPedidos) {
        this.recaudado = recaudado;
        this.numPedidos = numPedidos;
    }

    public EstadisticasDTO() {
    }

    public EstadisticasDTO(Double recaudado, Long numPedidos, String nombrePlatoMasPedido, String imgPlatoMasPedido, LocalDate from, LocalDate to) {
        this.recaudado = recaudado;
        this.numPedidos = numPedidos;
        this.nombrePlatoMasPedido = nombrePlatoMasPedido;
        this.imgPlatoMasPedido = imgPlatoMasPedido;
        this.from = from;
        this.to = to;
    }

    private Double recaudado;

    private Long numPedidos;

    private String nombrePlatoMasPedido;

    private String imgPlatoMasPedido;

    private LocalDate from;

    private LocalDate to;

}
