package com.freshThreads.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import java.util.Collection;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/login", "/signup", "/about", "/contact").permitAll()
                .requestMatchers("/partner").hasRole("SHOP")
                .requestMatchers("/pickup").hasRole("DELIVERY")
                .requestMatchers("/admin").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/login")
                .successHandler(roleBasedRedirectHandler()) 
                .permitAll()
            )
            .logout(logout -> logout
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/")
                .permitAll()
            );

        return http.build();
    }

    @Bean
    public AuthenticationSuccessHandler roleBasedRedirectHandler() {
        return (request, response, authentication) -> {
            String redirectUrl = "/";
            Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

            for (GrantedAuthority authority : authorities) {
                String role = authority.getAuthority();
                switch (role) {
                    case "ROLE_USER":
                        redirectUrl = "/";
                        break;
                    case "ROLE_SHOP":
                        redirectUrl = "/partner";
                        break;
                    case "ROLE_DELIVERY":
                        redirectUrl = "/pickup";
                        break;
                    case "ROLE_ADMIN":
                        redirectUrl = "/admin";
                        break;
                }
            }

            response.sendRedirect(request.getContextPath() + redirectUrl);
        };
    }
}
