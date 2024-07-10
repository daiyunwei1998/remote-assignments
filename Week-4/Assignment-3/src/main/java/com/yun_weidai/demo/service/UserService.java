package com.yun_weidai.demo.service;

import com.yun_weidai.demo.model.User;

public interface UserService {
    abstract public SignUpOutcome signUp(User user);
    abstract public SignInOutcome signIn(User user);
    abstract public boolean hasUser(User user);
    abstract public boolean validatePassword(User user);
}
