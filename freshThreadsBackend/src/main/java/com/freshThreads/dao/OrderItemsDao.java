package com.freshThreads.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.freshThreads.entities.OrderItems;

public interface OrderItemsDao extends JpaRepository<OrderItems, Long> {
    List<OrderItems> findAllByOrderOrderId(Long orderId);
}

    
