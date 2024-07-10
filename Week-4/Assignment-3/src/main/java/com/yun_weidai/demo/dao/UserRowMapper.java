package com.yun_weidai.demo.dao;

import com.yun_weidai.demo.model.User;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class UserRowMapper implements RowMapper<User> {
    public User mapRow(ResultSet rs, int rowNum) throws SQLException {
        User usr = new User();
        usr.setId(rs.getInt("id"));
        usr.setEmail(rs.getString("email"));
        usr.setPassword(rs.getString("password"));
        return usr;
    }
}
