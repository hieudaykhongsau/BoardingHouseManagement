package com.mvc.backend.constant;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ResponseMessage {
    public static final String SUCCESS = "Success";
    public static final String ERROR = "Error";
    public static final String INVALID_CREDENTIALS = "Invalid credentials";
    public static final String USER_NOT_FOUND = "User not found";
    public static final String USER_ALREADY_EXISTS = "User already exists";
    public static final String ACCESS_DENIED = "Access denied";
    public static final String UNAUTHORIZED = "Unauthorized";
    public static final String INTERNAL_SERVER_ERROR = "Internal server error";
    public static final String BAD_REQUEST = "Bad request";
}
