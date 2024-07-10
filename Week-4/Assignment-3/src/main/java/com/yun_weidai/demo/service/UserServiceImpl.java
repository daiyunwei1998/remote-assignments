package com.yun_weidai.demo.service;

import com.yun_weidai.demo.dao.UserDAOImpl;
import com.yun_weidai.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAOImpl userDAOImpl;
    @Override
    public SignUpOutcome signUp(User user) {
        if (!isValidateEmailFormat(user)) {
            return SignUpOutcome.WRONG_EMAIL_FORMAT;
        }
        if (!hasUser(user)) {
            // Case 1: Email not found, insert new user
            userDAOImpl.addUser(user);
            return SignUpOutcome.SIGNUP_SUCCESS;
        } else {
            // Case 2: Email found, check password
            return SignUpOutcome.SIGNUP_FAILTURE_DUPLICATE;
        }
    }

    @Override
    public SignInOutcome signIn(User user) {
        if (!isValidateEmailFormat(user)) {
            return SignInOutcome.WRONG_EMAIL_FORMAT;
        }
        if (!hasUser(user)) {
            return SignInOutcome.SIGNIN_FAILURE_USER_NOT_FOUND;
        } else if (!validatePassword(user)) {
            return SignInOutcome.SIGNIN_FAILURE_WRONG_PASSWORD;
        } else {
            return SignInOutcome.SIGNIN_SUCCESS;
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

    @Override
    public boolean isValidateEmailFormat(User user) {
        String EMAIL_REGEX =
                "^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
        Pattern emailPattern = Pattern.compile(EMAIL_REGEX);
        Matcher matcher = emailPattern.matcher(user.getEmail());
        return matcher.matches();
    }


}
