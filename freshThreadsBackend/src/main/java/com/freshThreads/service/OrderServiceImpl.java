package com.freshThreads.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.freshThread.exceptions.ResourceNotFoundException;
import com.freshThreads.dao.OrderDao;
import com.freshThreads.dto.ApiResponse;
import com.freshThreads.dto.OrderRespDTO;
import com.freshThreads.entities.Orders;

@Service
@Transactional // Auto transaction management
public class OrderServiceImpl implements OrderService {

	@Autowired 
	private OrderDao orderDao;

	@Autowired 
	private ModelMapper modelMapper;

	@Override
	public List<OrderRespDTO> getAllOrders() {
		   return orderDao.findAll().stream().map(order -> {
			   OrderRespDTO dto = new OrderRespDTO();
		        dto.setId(order.getId());
		        dto.setName(order.getUser().getName());
		        dto.setEmail(order.getUser().getEmail());
		        dto.setShopName(order.getShop().getShopName());
		        dto.setDeliveryStatus(order.getDelivery().getDeliveryStatus());
		        dto.setOrderDate(order.getOrderDate());
		        dto.setTotalAmount(order.getTotalAmount());
		        return dto;
		    }).collect(Collectors.toList());
	}

	
	private OrderRespDTO mapToOrderRespDTO(Orders order) {
	    OrderRespDTO dto = new OrderRespDTO();

	    // Set order-level details
	    dto.setId(order.getId());
	    dto.setOrderDate(order.getCreatedOn());
	    dto.setTotalAmount(order.getTotalAmount());

	    // Flatten User details
	    if (order.getUser() != null) {
	        dto.setName(order.getUser().getName()); // Map user's name
	        dto.setEmail(order.getUser().getEmail()); // Map user's email
	    }

	    // Flatten Shop details
	    if (order.getShop() != null) {
	        dto.setShopName(order.getShop().getShopName()); // Map shop's name
	    }

	    // Flatten Delivery details
	    if (order.getDelivery() != null) {
	        dto.setDeliveryStatus(order.getDelivery().getDeliveryStatus()); // Map delivery status
	    }

	    return dto;
	}


	@Override
	public String addNewOrder(Orders newOrder) {
		
		Orders persistentOrder = orderDao.save(newOrder);
		return "Added new order with ID=" + persistentOrder.getId();
	}

	@Override
	public ApiResponse deleteOrder(Long orderId) {
		if (orderDao.existsById(orderId)) {
			// Valid order id
			orderDao.deleteById(orderId);
			return new ApiResponse("Deleted order details!");
		}
		throw new ResourceNotFoundException("Invalid Order ID!");
	}

	@Override
	public OrderRespDTO getOrderDetails(Long orderId) {
		Orders orderEntity = orderDao.findById(orderId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Order ID!"));
		
		return modelMapper.map(orderEntity, OrderRespDTO.class);
	}

	@Override
	public ApiResponse updateOrderDetails(Long orderId, Orders updatedOrder) {
	    // Check if the order exists
	    Orders existingOrder = orderDao.findById(orderId)
	        .orElseThrow(() -> new ResourceNotFoundException("Order with ID " + orderId + " not found"));

	    // Update necessary fields
	    existingOrder.setStatus(updatedOrder.getStatus());
	    existingOrder.setOrderDate(updatedOrder.getOrderDate());
	    existingOrder.setTotalAmount(updatedOrder.getTotalAmount());
	    existingOrder.setUser(updatedOrder.getUser());
	    existingOrder.setShop(updatedOrder.getShop());
	    existingOrder.setDelivery(updatedOrder.getDelivery());

	    // Save the updated order
	    Orders savedOrder = orderDao.save(existingOrder);

	    return new ApiResponse("Order updated successfully with ID " + savedOrder.getId());
	}

}
