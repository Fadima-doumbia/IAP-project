package com.farima.investirAuPays.repository;


import com.farima.investirAuPays.models.ERole;
import com.farima.investirAuPays.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
