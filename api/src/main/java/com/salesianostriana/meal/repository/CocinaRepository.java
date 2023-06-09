package com.salesianostriana.meal.repository;

import com.salesianostriana.meal.model.Cocina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CocinaRepository extends JpaRepository<Cocina, UUID> {

    @Query("SELECT c FROM Cocina c WHERE c.id IN :cocinas")
    List<Cocina> findByIds(List<UUID> cocinas);
}
