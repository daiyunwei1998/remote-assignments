package com.yun_weidai.demo.dao;

import com.yun_weidai.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.sql.*;

@Component
public class UserDAOImpl implements UserDAO<User> {
    @Value("${database.url}")
    private String url;

    @Value("${database.username}")
    private String username;

    @Value("${database.password}")
    private String password;
    private final UserRowMapper userRowMapper;

    @Autowired
    public UserDAOImpl(UserRowMapper userRowMapper) {
        this.userRowMapper = userRowMapper;
    }


    @Override
    public void addUser(User user) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            try (Connection connection = DriverManager.getConnection(url, username, password);
            PreparedStatement statement = connection.prepareStatement("INSERT INTO user (email, password) VALUES (?, ?)")) {
                // Insert query
                BCryptPasswordEncoder bcryptPasswordEncoder = new BCryptPasswordEncoder();
                statement.setString(1, user.getEmail());
                statement.setString(2, bcryptPasswordEncoder.encode(user.getPassword()));
                statement.executeUpdate();

            } catch (SQLException e) {
                System.out.println("SQL Error: " + e.getMessage());
            }
        } catch (ClassNotFoundException e) {
            System.out.println("JDBC Driver not found: " + e.getMessage());
        }
    }


    @Override
    public User getUserByEmail(User user) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            try (Connection connection = DriverManager.getConnection(url, username, password);
                 PreparedStatement statement = connection
                         .prepareStatement("SELECT * FROM user WHERE email = ?")
            ) {
                // Insert query
                statement.setString(1, user.getEmail());
                ResultSet resultSet = statement.executeQuery();
                if (resultSet.next()) {
                    // Set other properties of the user if needed
                    User usr = userRowMapper.mapRow(resultSet,1);
                    return usr;
                } else {
                    return null;
                }
            } catch (SQLException e) {
                System.out.println("SQL Error: " + e.getMessage());
            }
        } catch (ClassNotFoundException e) {
            System.out.println("JDBC Driver not found: " + e.getMessage());
        }
        return null;
    }
}
