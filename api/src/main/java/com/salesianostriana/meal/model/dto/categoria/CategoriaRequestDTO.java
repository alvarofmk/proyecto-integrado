package com.salesianostriana.meal.model.dto.categoria;

import com.fasterxml.jackson.annotation.JsonView;
import com.salesianostriana.meal.model.Categoria;
import com.salesianostriana.meal.model.Restaurante;
import com.salesianostriana.meal.model.view.View;
import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Value;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.util.UUID;

@Builder
@Value
public class CategoriaRequestDTO {

    private UUID id;

    @NotNull
    @Positive
    private int orden;

    @NotBlank
    private String nombre;

    public Categoria toCategoria(){
        return Categoria.builder()
                .id(id)
                .orden(orden)
                .nombre(nombre)
                .build();
    }

}
