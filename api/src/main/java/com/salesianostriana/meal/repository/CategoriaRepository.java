package com.salesianostriana.meal.repository;

import com.salesianostriana.meal.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface CategoriaRepository extends JpaRepository<Categoria, UUID> {

    @Query("SELECT c FROM Categoria c WHERE c.restaurante.id = :idRestaurante ORDER BY c.orden")
    public List<Categoria> findByRestaurantId(UUID idRestaurante);

}
