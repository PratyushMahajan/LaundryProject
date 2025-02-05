package com.freshThreads.service;

import com.freshThreads.dto.OrderItemsRespDTO;
import com.freshThreads.entities.OrderItems;

import java.util.List;

public interface OrderItemsService {

    List<OrderItemsRespDTO> getAllOrderItems(Long orderId);

    OrderItemsRespDTO addOrderItem(OrderItems orderItem);

    OrderItemsRespDTO updateOrderItem(Long itemId, OrderItems orderItem);

    void deleteOrderItem(Long orderItemId);
}
