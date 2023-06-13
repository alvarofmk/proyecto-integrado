package com.salesianostriana.meal.model.dto.categoria;

import com.fasterxml.jackson.annotation.JsonView;
import com.salesianostriana.meal.model.Categoria;
import com.salesianostriana.meal.model.DireccionEnvio;
import com.salesianostriana.meal.model.Restaurante;
import com.salesianostriana.meal.model.dto.direccionEnvio.DireccionResponseDTO;
import com.salesianostriana.meal.model.view.View;
import lombok.Builder;
import lombok.Value;

import javax.persistence.ManyToOne;
import java.util.UUID;

@Builder
@Value
public class CategoriaResponseDTO {

    @JsonView({View.CategoriaView.CategoriaOverview.class, View.PlatoView.PlatoGenericView.class, View.PlatoView.PlatoDetailView.class, View.RestauranteView.RestauranteDetailView.class, View.VentaView.VentaDetailView.class})
    private UUID id;

    private Restaurante restaurante;

    @JsonView({View.CategoriaView.CategoriaOverview.class, View.PlatoView.PlatoGenericView.class, View.PlatoView.PlatoDetailView.class, View.RestauranteView.RestauranteDetailView.class})
    private int orden;

    @JsonView({View.CategoriaView.CategoriaOverview.class , View.PlatoView.PlatoGenericView.class, View.PlatoView.PlatoDetailView.class, View.RestauranteView.RestauranteDetailView.class, View.VentaView.VentaDetailView.class})
    private String nombre;

    public static CategoriaResponseDTO of(Categoria categoria){
        if(categoria == null) return null;
        return CategoriaResponseDTO.builder()
                .id(categoria.getId())
                .orden(categoria.getOrden())
                .nombre(categoria.getNombre())
                .build();
    }

}
