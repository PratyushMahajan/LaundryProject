package com.freshThreads.entities;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Users extends BaseEntity{
		 
	@Column(length=80)	
	private String name;
	@Column(length=80)
	private String email;
	@Column(name = "phone_number", length=10)
    private String phoneNumber;
	@Column(length=500)
	private String address;
	@Column(length=50)
	private String password;
	@Column(length=80)
	private String city;
	@Column(length=30)
	@Enumerated(EnumType.STRING)
	private UserRoles userRoles;
	// private LocalDateTime preferredDeliveryTime;
	private LocalDate pickUpDate;
	
	@ManyToOne
	@JoinColumn(name = "shop_id") // Foreign key column name
	private Shop shop;
	
	 @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<Orders> orders;

}