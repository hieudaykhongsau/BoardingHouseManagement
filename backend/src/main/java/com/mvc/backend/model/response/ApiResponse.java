package com.mvc.backend.model.response;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> {

    /** Dữ liệu nghiệp vụ. Null với các thao tác không trả về gì (vd xoá). */
    private T data;

    /** Câu thông báo cho người dùng, lấy từ {@code MessageHelper} nên đã theo ngôn ngữ request. */
    private String message;

    private LocalDateTime timestamp;
}