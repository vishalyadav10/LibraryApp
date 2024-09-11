package com.project.usermanage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.usermanage.entity.Payment;
@Repository
public interface PaymentRepository extends JpaRepository<Payment,Long>{

} 
