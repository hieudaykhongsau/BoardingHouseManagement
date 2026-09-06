package com.mvc.backend.utils;

import com.mvc.backend.model.response.ApiResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ResponseBuilder {
    public static <T> ResponseEntity<Object> ok(T data, String message) {
        return ok(data, HttpStatus.OK, message);
    }

    public static <T> ResponseEntity<Object> ok(T data, HttpStatus status, String message) {
        return ResponseEntity.status(status).body(buildApiResponse(data, message));
    }

     private static <T> ApiResponse<T> buildApiResponse(T data, String message) {
        return ApiResponse.<T>builder()
                .data(data)
                .message(message)
                .build();
    }
}
