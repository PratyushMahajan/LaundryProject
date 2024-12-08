package com.freshThreads.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class OrderRespDTO {
    private Long id;
    private String name;
    private String email; 
    private String shopName; 
    private String deliveryStatus;
    //private String status;
    private LocalDate orderDate;
    private Long totalAmount;
}
