package com.project.usermanage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.usermanage.entity.History;
@Repository
public interface HistoryRepository extends JpaRepository<History,Long>{
    
}
