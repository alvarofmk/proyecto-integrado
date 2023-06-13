package com.salesianostriana.meal.service;

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
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class VentaService {

    private final VentaRepository repository;

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
/*
    public EstadisticasDTO getEstadisticas(LocalDate from, LocalDate to, User loggedUser) {
        return repository.findEstadisticas(from, to, loggedUser);
    }*/
}
