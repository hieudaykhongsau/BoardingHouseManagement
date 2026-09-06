package com.mvc.backend.controller;

import com.mvc.backend.utils.MessageHelper;
import com.mvc.backend.dto.response.UserDto;
import com.mvc.backend.utils.ResponseBuilder;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final MessageHelper messageHelper;
    
    @PostMapping("/login")
    public ResponseEntity<Object> login(String googleToken) {

        UserDto userDto = new UserDto();
        userDto.setFullName("John Doe");
        return ResponseBuilder.ok(userDto, messageHelper.getMessage("login.success"));
    }
    
}
