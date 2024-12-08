package com.freshThreads.service;
import java.util.List;

import com.freshThreads.dto.ApiResponse;
import com.freshThreads.dto.OrderRespDTO;
import com.freshThreads.entities.Orders;

public interface OrderService {
	List<OrderRespDTO> getAllOrders();

	String addNewOrder(Orders newOrder);

	ApiResponse deleteOrder(Long orderId);

	OrderRespDTO getOrderDetails(Long orderId);

	ApiResponse updateOrderDetails(Long orderId, Orders order);
}
