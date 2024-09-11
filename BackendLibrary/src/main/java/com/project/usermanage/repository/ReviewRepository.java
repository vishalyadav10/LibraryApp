package com.project.usermanage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.usermanage.entity.Review;
@Repository
public interface ReviewRepository extends JpaRepository<Review,Long>{
    
}
