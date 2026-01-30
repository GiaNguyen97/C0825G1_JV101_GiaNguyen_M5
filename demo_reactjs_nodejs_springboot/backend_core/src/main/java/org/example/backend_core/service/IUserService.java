package org.example.backend_core.service;

import org.example.backend_core.entity.User;

import java.util.List;

public interface IUserService {

    List<User> findAll();

    User save(User user);

    User findById(Long id);

    void delete(Long id);
}
