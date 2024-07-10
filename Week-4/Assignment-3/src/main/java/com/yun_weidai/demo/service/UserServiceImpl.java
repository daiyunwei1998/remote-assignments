package com.yun_weidai.demo.service;

import com.yun_weidai.demo.dao.UserDAOImpl;
import com.yun_weidai.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAOImpl userDAOImpl;
    @Override
    public SignUpOutcome signUp(User user) {

        if (!hasUser(user)) {
            // Case 1: Email not found, insert new user
            userDAOImpl.addUser(user);
            return SignUpOutcome.SUCCESS;
        } else {
            // Case 2: Email found, check password
            return SignUpOutcome.DUPLICATE;
        }
    }

    @Override
    public SignInOutcome signIn(User user) {
        if (!hasUser(user)) {
            System.out.println("no user");
            return SignInOutcome.SIGNIN_FAILURE_USER_NOT_FOUND;
        } else if (!validatePassword(user)) {
            System.out.println("wrong pwd");
            return SignInOutcome.SIGNIN_FAILURE_WRONG_PASSWORD;
        } else {
            return SignInOutcome.SUCCESS;
        }
    }

    @Override
    public boolean hasUser(User user) {
        User userQuery = userDAOImpl.getUserByEmail(user);
        return userQuery != null;
    }
    @Override
    public boolean validatePassword(User user) {
        User userInDB = userDAOImpl.getUserByEmail(user);
        // if user not found
        if (!hasUser(user)) {
            return false;
        }
        // return true if password match
        return userInDB.getPassword().equals(user.getPassword());
    }


}
