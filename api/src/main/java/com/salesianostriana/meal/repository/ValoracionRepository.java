package com.salesianostriana.meal.repository;

import com.salesianostriana.meal.model.Plato;
import com.salesianostriana.meal.model.Valoracion;
import com.salesianostriana.meal.model.key.ValoracionPK;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ValoracionRepository extends JpaRepository<Valoracion, ValoracionPK> {

}
