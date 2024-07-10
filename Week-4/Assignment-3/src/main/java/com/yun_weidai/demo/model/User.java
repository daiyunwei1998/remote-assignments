package com.yun_weidai.demo.model;

public class User {
    private int id;
    private String email;
    private String password;
    public User() {
    }

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User email: %s, password: %s".format(this.getEmail(), this.getPassword());
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }
}
