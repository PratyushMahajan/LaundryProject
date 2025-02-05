package com.freshThreads.controllers;

import com.freshThreads.dto.OrderItemsRespDTO;
import com.freshThreads.entities.OrderItems;
import com.freshThreads.service.OrderItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orderitems")

public class OrderItemsController {

    @Autowired
    private OrderItemsService orderItemsService;

    @GetMapping("/{orderId}")
    public ResponseEntity<?> getOrderItems(@PathVariable Long orderId) {
        List<OrderItemsRespDTO> orderItems = orderItemsService.getAllOrderItems(orderId);
        if (orderItems.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(orderItems);
    }

    @PostMapping
    public ResponseEntity<?> addOrderItem(@RequestBody OrderItems orderItem) {
        OrderItemsRespDTO createdOrderItem = orderItemsService.addOrderItem(orderItem);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrderItem);
    }

    @PutMapping("/{itemId}")
    public ResponseEntity<?> updateOrderItem(@PathVariable Long itemId, @RequestBody OrderItems orderItem) {
        OrderItemsRespDTO updatedOrderItem = orderItemsService.updateOrderItem(itemId, orderItem);
        return ResponseEntity.ok(updatedOrderItem);
    }

    @DeleteMapping("/{itemId}")
    public ResponseEntity<?> deleteOrderItem(@PathVariable Long itemId) {
        try {
            orderItemsService.deleteOrderItem(itemId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

}
