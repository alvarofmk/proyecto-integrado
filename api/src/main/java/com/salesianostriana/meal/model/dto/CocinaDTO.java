package com.salesianostriana.meal.model.dto;

import com.fasterxml.jackson.annotation.JsonView;
import com.salesianostriana.meal.model.Cocina;
import com.salesianostriana.meal.model.view.View;
import lombok.Builder;
import lombok.Value;

import java.util.UUID;

@Builder
@Value
public class CocinaDTO {

    @JsonView({View.RestauranteView.RestauranteGenericView.class, View.RestauranteView.RestauranteDetailView.class})
    private UUID id;

    @JsonView({View.RestauranteView.RestauranteGenericView.class, View.RestauranteView.RestauranteDetailView.class})
    private String nombre;

    @JsonView({View.RestauranteView.RestauranteGenericView.class, View.RestauranteView.RestauranteDetailView.class})
    private String descripcion;

    @JsonView({View.RestauranteView.RestauranteGenericView.class, View.RestauranteView.RestauranteDetailView.class})
    private String iconUrl;

    @JsonView({View.RestauranteView.RestauranteGenericView.class, View.RestauranteView.RestauranteDetailView.class})
    private String imgUrl;

    public static CocinaDTO of(Cocina cocina){
        return CocinaDTO.builder()
                .id(cocina.getId())
                .nombre(cocina.getNombre())
                .descripcion(cocina.getDescripcion())
                .iconUrl(cocina.getIconUrl())
                .imgUrl(cocina.getImgUrl())
                .build();
    }

}
