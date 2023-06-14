package com.salesianostriana.meal.repository;

import com.salesianostriana.meal.model.Plato;
import com.salesianostriana.meal.model.Restaurante;
import com.salesianostriana.meal.security.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface PlatoRepository extends JpaRepository<Plato, UUID>, JpaSpecificationExecutor<Plato> {

    @Query("SELECT p FROM Plato p WHERE p.restaurante.id = :id")
    public Page<Plato> findByRestaurant(UUID id, Pageable pageable);

    @EntityGraph(value = "plato-con-valoraciones", type = EntityGraph.EntityGraphType.LOAD)
    public Optional<Plato> findFirstById(UUID id);

    @Modifying
    @Query("DELETE FROM Valoracion v WHERE v.plato.id = :id")
    public void deleteRatings(UUID id);

    public boolean existsByRestaurante(Restaurante restaurante);

    @Query("""
            SELECT p 
            FROM Plato p
            JOIN LineaVenta lv ON lv.plato = p
            JOIN Venta v ON lv.venta = v
            WHERE v.fecha > :from
            AND v.fecha < :to
            AND p.restaurante.restaurantAdmin = :loggedUser
            GROUP BY p
            HAVING COUNT(lv) >= ALL (SELECT COUNT(lv2) 
                    FROM Plato p2
                    JOIN LineaVenta lv2 ON lv2.plato = p2
                    JOIN Venta v2 ON lv2.venta = v2
                    WHERE v2.fecha > :from
                    AND v2.fecha < :to
                    AND p2.restaurante.restaurantAdmin = :loggedUser
                    GROUP BY p2
                    ORDER BY COUNT(lv2) DESC)
            """)
    List<Plato> findPlatoEstrella(LocalDateTime from, LocalDateTime to, User loggedUser);
}
