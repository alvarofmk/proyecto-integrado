package com.salesianostriana.meal.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.salesianostriana.meal.error.exception.InvalidSearchException;
import com.salesianostriana.meal.model.Plato;
import com.salesianostriana.meal.model.dto.PageDTO;
import com.salesianostriana.meal.model.dto.categoria.CategoriaRequestDTO;
import com.salesianostriana.meal.model.dto.categoria.CategoriaResponseDTO;
import com.salesianostriana.meal.model.dto.plato.PlatoResponseDTO;
import com.salesianostriana.meal.model.dto.restaurante.RestauranteRequestDTO;
import com.salesianostriana.meal.model.dto.restaurante.RestauranteResponseDTO;
import com.salesianostriana.meal.model.view.View;
import com.salesianostriana.meal.search.Criteria;
import com.salesianostriana.meal.search.Utilities;
import com.salesianostriana.meal.security.user.User;
import com.salesianostriana.meal.service.CategoriaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.converters.models.PageableAsQueryParam;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/categoria")
@RequiredArgsConstructor
public class CategoriaController {

    private final CategoriaService service;

    @Operation(summary = "Obtiene todas las categorias de un restaurante")
    @PageableAsQueryParam
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Se han encontrado categorias",
                    content = {
                            @Content(mediaType = "application/json",
                                    array = @ArraySchema(schema = @Schema(implementation = PagePlatoResponse.class)))
                    }),
            @ApiResponse(responseCode = "404",
                    description = "No se han encontrado categorias",
                    content = @Content(schema = @Schema(implementation = com.salesianostriana.meal.error.model.Error.class))),
            @ApiResponse(responseCode = "400",
                    description = "La búsqueda es incorrecta",
                    content = @Content(schema = @Schema(implementation = com.salesianostriana.meal.error.model.Error.class)))
    })
    @Parameter(description = "Id del restaurante del cual buscar las categorias", name = "id", required = true)
    @JsonView(View.CategoriaView.CategoriaOverview.class)
    @GetMapping("/restaurante/{id}")
    public List<CategoriaResponseDTO> findByRestaurant(@PathVariable UUID id){
        return service.findByRestaurant(id).stream().map(CategoriaResponseDTO::of).toList();
    }

    @Operation(summary = "Edita las categorias de un restaurante")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Se ha editado las categorias ",
                    content = {@Content(schema = @Schema(implementation = RestauranteResponseDTO.class))}),
            @ApiResponse(responseCode = "400",
                    description = "Los datos no son válidos",
                    content = @Content(schema = @Schema(implementation = com.salesianostriana.meal.error.model.Error.class))),
            @ApiResponse(responseCode = "404",
                    description = "No se han encontrado el restaurante a editar",
                    content = @Content(schema = @Schema(implementation = com.salesianostriana.meal.error.model.Error.class))),
            @ApiResponse(responseCode = "401",
                    description = "No se está loggeado",
                    content = @Content(schema = @Schema(implementation = com.salesianostriana.meal.error.model.Error.class))),
            @ApiResponse(responseCode = "403",
                    description = "El usuario no es el propietario del recurso",
                    content = @Content(schema = @Schema(implementation = com.salesianostriana.meal.error.model.Error.class))),
    })
    @Parameter(description = "Id del restaurante a editar", name = "id", required = true)
    @PutMapping("/restaurante/{id}")
    @JsonView(View.RestauranteView.RestauranteDetailView.class)
    public List<CategoriaResponseDTO> edit(@AuthenticationPrincipal User loggedUser, @PathVariable UUID id, @Valid @RequestBody List<CategoriaRequestDTO> categoriaRequest){
        return service.editCategorias(categoriaRequest, id).stream().map(CategoriaResponseDTO::of).toList();
    }

}
