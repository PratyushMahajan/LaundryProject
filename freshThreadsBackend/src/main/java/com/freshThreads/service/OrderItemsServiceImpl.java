package com.freshThreads.service;

import com.freshThreads.dao.OrderItemsDao;
import com.freshThreads.dto.OrderItemsRespDTO;
import com.freshThreads.entities.OrderItems;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderItemsServiceImpl implements OrderItemsService {

    @Autowired
    private OrderItemsDao orderItemsDAO;

    @Override
    public List<OrderItemsRespDTO> getAllOrderItems(Long orderId) {
        List<OrderItems> items = orderItemsDAO.findAllByOrderOrderId(orderId);
        return items.stream()
                    .map(item -> new OrderItemsRespDTO(item.getOrderItemId(), item.getItemName(), item.getItemPrice(), item.getQuantity()))
                    .collect(Collectors.toList());
    }

    @Override
    public OrderItemsRespDTO addOrderItem(OrderItems orderItem) {
        OrderItems savedOrderItem = orderItemsDAO.save(orderItem);
        return new OrderItemsRespDTO(savedOrderItem.getOrderItemId(), savedOrderItem.getItemName(), savedOrderItem.getItemPrice(), savedOrderItem.getQuantity());
    }

    @Override
    public OrderItemsRespDTO updateOrderItem(Long orderItemId, OrderItems orderItem) {
        orderItem.setOrderItemId(orderItemId);
        OrderItems updatedOrderItem = orderItemsDAO.save(orderItem);
        return new OrderItemsRespDTO(updatedOrderItem.getOrderItemId(), updatedOrderItem.getItemName(), updatedOrderItem.getItemPrice(), updatedOrderItem.getQuantity());
    }

    @Override
    public void deleteOrderItem(Long orderItemId) {
        orderItemsDAO.deleteById(orderItemId);
    }
}
