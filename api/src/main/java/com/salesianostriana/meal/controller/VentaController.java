package com.salesianostriana.meal.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.salesianostriana.meal.model.dto.DatesDTO;
import com.salesianostriana.meal.model.dto.PageDTO;
import com.salesianostriana.meal.model.dto.restaurante.RestauranteRequestDTO;
import com.salesianostriana.meal.model.dto.restaurante.RestauranteResponseDTO;
import com.salesianostriana.meal.model.dto.venta.EstadisticasDTO;
import com.salesianostriana.meal.model.dto.venta.VentaResponseDTO;
import com.salesianostriana.meal.model.view.View;
import com.salesianostriana.meal.security.user.User;
import com.salesianostriana.meal.service.VentaService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.UUID;

@RestController
@RequestMapping("/venta")
@RequiredArgsConstructor
public class VentaController {

    private final VentaService service;

    @GetMapping("/")
    @JsonView(View.VentaView.VentaOverView.class)
    public PageDTO<VentaResponseDTO> getLastSales (@AuthenticationPrincipal User loggedUser,
                                                                   @PageableDefault(page = 0, size = 10) Pageable pageable) {
        PageDTO<VentaResponseDTO> result = new PageDTO<>();
        return result.of(service.findSales(loggedUser, pageable).map(VentaResponseDTO::of));
    }

    @GetMapping("/{id}")
    @JsonView(View.VentaView.VentaDetailView.class)
    public VentaResponseDTO getDetails (@AuthenticationPrincipal User loggedUser,
                                                   @PathVariable UUID id) {
        return VentaResponseDTO.of(service.findDetails(id));
    }

    @PostMapping("/estadisticas")
    public EstadisticasDTO getEstadisticas (@AuthenticationPrincipal User loggedUser, @RequestBody DatesDTO dates) {
        String[] to = dates.getTo().split("-");
        String[] from = dates.getFrom().split("-");
        return service.getEstadisticas(LocalDate.of(Integer.parseInt(from[0]),Integer.parseInt(from[1]),Integer.parseInt(from[2])), LocalDate.of(Integer.parseInt(to[0]),Integer.parseInt(to[1]),Integer.parseInt(to[2])), loggedUser);
    }
}
