package com.project.usermanage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.usermanage.entity.Checkout;
@Repository
public interface CheckoutRepository extends JpaRepository<Checkout,Long>{
    
}
