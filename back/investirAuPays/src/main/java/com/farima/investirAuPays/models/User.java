package com.farima.investirAuPays.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(	name = "users", uniqueConstraints = {
			@UniqueConstraint(columnNames = "username"),
			@UniqueConstraint(columnNames = "email") })
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	private String username;
	private String email;
	private String presentation;
	private Long roleId;
	private String password;


	public User(String username, String email, String presentation, Long role, String encode) {
		this.username = username;
		this.email = email;
		this.presentation = presentation;
		this.roleId = role;
		this.password = encode;

	}
}
