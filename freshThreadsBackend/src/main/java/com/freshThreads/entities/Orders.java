package com.freshThreads.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.annotation.Nullable;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="orders")
@Getter
@Setter
public class Orders extends BaseEntity {
	
	@ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
	@JsonIgnore
    private Users user;

    @ManyToOne
    @JoinColumn(name = "shop_id", nullable = false)
	@JsonIgnore
    private Shop shop;

    @ManyToOne
    @JoinColumn(name = "delivery_id",nullable = false)
	@JsonIgnore
    private Delivery delivery;
    @Column(length=30)
    private String Status;
	private LocalDate orderDate;
	private Long totalAmount;
}
