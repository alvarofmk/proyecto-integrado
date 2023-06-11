package com.salesianostriana.meal.service;

import com.salesianostriana.meal.model.Categoria;
import com.salesianostriana.meal.model.Restaurante;
import com.salesianostriana.meal.model.dto.categoria.CategoriaRequestDTO;
import com.salesianostriana.meal.model.dto.categoria.CategoriaResponseDTO;
import com.salesianostriana.meal.repository.CategoriaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CategoriaService {

    private final CategoriaRepository repository;
    private final RestauranteService restauranteService;

    public List<Categoria> findByRestaurant(UUID idRestaurant){
        List<Categoria> result = repository.findByRestaurantId(idRestaurant);
        if (result.isEmpty()) throw new EntityNotFoundException();
        return result;
    }

    public List<Categoria> editCategorias(List<CategoriaRequestDTO> categoriaRequest, UUID id) {
        Restaurante restaurante = restauranteService.findDetails(id);
        categoriaRequest.forEach(c -> {
            Categoria toSave = c.toCategoria();
            toSave.setRestaurante(restaurante);
            repository.save(toSave);
        });
        return findByRestaurant(id);
    }
}
