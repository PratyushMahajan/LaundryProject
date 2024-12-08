package com.freshThreads.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.freshThreads.entities.UserRoles;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class Signup {
	@JsonProperty(access = Access.READ_ONLY) // this property only used during ser.
	private Long id;
	@NotBlank(message = "First Name required")
	private String name;
	
	@Email(message = "Invalid Email!!!")
	private String email;
	@JsonProperty(access = Access.WRITE_ONLY)// this property only used during de-ser.
	private String password;
	private UserRoles userRoles;
	public Signup(String firstName, 
			String email, String password, UserRoles userRoles) {
		super();
		this.name = name;
		
		this.email = email;
		this.password = password;
		this.userRoles = userRoles;
	}
	
	
}
