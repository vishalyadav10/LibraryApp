package com.project.usermanage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.usermanage.entity.Message;
@Repository
public interface MessageRepository extends JpaRepository<Message,Long> {
    
}
