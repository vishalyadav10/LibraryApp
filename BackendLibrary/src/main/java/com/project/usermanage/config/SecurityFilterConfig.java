package com.project.usermanage.config;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.project.usermanage.Jwt.JWTAuthenticationFilter;
import com.project.usermanage.Jwt.JwtAuthenticationEntryPoint;
import lombok.AllArgsConstructor;

@Configuration
@AllArgsConstructor
public class SecurityFilterConfig {
	@Autowired
	 private JwtAuthenticationEntryPoint point;
	@Autowired
	 private JWTAuthenticationFilter filter;
	 @Bean
	    public SecurityFilterChain filterChain(HttpSecurity security) throws Exception {
	        return security.csrf(csrf -> csrf.disable())
			.cors(cors -> cors.configurationSource(request -> {
				var corsConfiguration = new org.springframework.web.cors.CorsConfiguration();
				corsConfiguration.setAllowedOrigins(java.util.List.of("http://localhost:5173")); // Allow your frontend origin
				corsConfiguration.setAllowedMethods(java.util.List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
				corsConfiguration.setAllowedHeaders(java.util.List.of("*"));
				corsConfiguration.setAllowCredentials(true);
				return corsConfiguration;
			}))
	                .authorizeHttpRequests(auth -> auth
	                		.requestMatchers("/authenticate").permitAll()
                            .requestMatchers("/addAdmin").permitAll()
	                        .anyRequest().authenticated())
	                .exceptionHandling(ex -> ex.authenticationEntryPoint(point))
	                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
	                .addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class)
	                .build();
	 }
}