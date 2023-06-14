package com.salesianostriana.meal.service;

import com.salesianostriana.meal.model.Plato;
import com.salesianostriana.meal.model.Venta;
import com.salesianostriana.meal.model.dto.PageDTO;
import com.salesianostriana.meal.model.dto.venta.EstadisticasDTO;
import com.salesianostriana.meal.model.dto.venta.VentaResponseDTO;
import com.salesianostriana.meal.repository.VentaRepository;
import com.salesianostriana.meal.security.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class VentaService {

    private final VentaRepository repository;
    private final PlatoService platoService;

    public Page<Venta> findSales(User loggedUser, Pageable pageable) {
        Page<Venta> result = repository.findSales(pageable, loggedUser);
        if(result.getNumberOfElements() == 0){
            throw new EntityNotFoundException();
        }
        return result;
    }

    public Venta findDetails(UUID id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException());
    }

    public EstadisticasDTO getEstadisticas(LocalDate from, LocalDate to, User loggedUser) {
        EstadisticasDTO result = repository.findEstadisticas(LocalDateTime.of(from, LocalTime.MIDNIGHT), LocalDateTime.of(to, LocalTime.MIDNIGHT), loggedUser);
        Plato platoEstrella =platoService.findPlatoEstrella(LocalDateTime.of(from, LocalTime.MIDNIGHT), LocalDateTime.of(to, LocalTime.MIDNIGHT), loggedUser);
        result.setImgPlatoMasPedido(platoEstrella.getImgUrl());
        result.setNombrePlatoMasPedido(platoEstrella.getNombre());
        result.setTo(to);
        result.setFrom(from);
        return result;
    }
}
