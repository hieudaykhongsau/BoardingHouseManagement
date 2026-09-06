package com.mvc.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mvc.backend.entity.User;

public interface UserRepository extends JpaRepository<Long, User>{
    Optional<User> findByEmail(String email);
}
