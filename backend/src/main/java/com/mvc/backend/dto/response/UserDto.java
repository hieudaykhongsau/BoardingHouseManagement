package com.mvc.backend.dto.response;

import lombok.Data;

@Data 
public class UserDto {
    private String fullName;
    private String email;
    private String avatarUrl;
}
