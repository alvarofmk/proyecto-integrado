package com.salesianostriana.meal.model.dto.restaurante;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonView;
import com.salesianostriana.meal.model.Cocina;
import com.salesianostriana.meal.model.Plato;
import com.salesianostriana.meal.model.Restaurante;
import com.salesianostriana.meal.model.dto.CocinaDTO;
import com.salesianostriana.meal.model.dto.plato.PlatoResponseDTO;
import com.salesianostriana.meal.model.view.View;
import lombok.Builder;
import lombok.Value;
import org.hibernate.LazyInitializationException;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Builder
@Value
public class RestauranteResponseDTO {

    @JsonView({View.RestauranteView.RestauranteGenericView.class, View.RestauranteView.RestauranteDetailView.class})
    private UUID id;

    @JsonView({View.RestauranteView.RestauranteGenericView.class, View.RestauranteView.RestauranteDetailView.class})
    private String nombre;

    @JsonView({View.RestauranteView.RestauranteGenericView.class, View.RestauranteView.RestauranteDetailView.class})
    private String descripcion;

    @JsonView({View.RestauranteView.RestauranteGenericView.class, View.RestauranteView.RestauranteDetailView.class})
    private String coverImgUrl;

    @JsonView({View.RestauranteView.RestauranteGenericView.class, View.RestauranteView.RestauranteDetailView.class})
    private LocalTime apertura;

    @JsonView({View.RestauranteView.RestauranteGenericView.class, View.RestauranteView.RestauranteDetailView.class})
    private LocalTime cierre;

    @JsonView({View.RestauranteView.RestauranteDetailView.class})
    private List<CocinaDTO> cocinas;

    public static RestauranteResponseDTO of(Restaurante restaurante){
        List<CocinaDTO> cocinas = new ArrayList<>();
        try{
            cocinas = restaurante.getCocina().stream().map(CocinaDTO::of).toList();
        }catch (LazyInitializationException ex){

        }
        return RestauranteResponseDTO.builder()
                .id(restaurante.getId())
                .nombre(restaurante.getNombre())
                .coverImgUrl(restaurante.getCoverImgUrl())
                .apertura(restaurante.getApertura())
                .cierre(restaurante.getCierre())
                .descripcion(restaurante.getDescripcion())
                .cocinas(cocinas)
                .build();
    }

}
