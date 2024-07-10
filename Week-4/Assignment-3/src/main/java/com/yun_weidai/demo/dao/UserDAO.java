package com.yun_weidai.demo.dao;

import org.springframework.stereotype.Repository;

@Repository
public interface UserDAO<User> {
    void addUser(User user);
    User getUserByEmail(User user);
}
