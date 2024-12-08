package com.freshThreads.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freshThreads.dto.ApiResponse;
import com.freshThreads.dto.OrderRespDTO;
import com.freshThreads.entities.Orders;
import com.freshThreads.service.OrderServiceImpl;


@RestController
@RequestMapping("/orders")
public class OrderController {
	@Autowired
	private OrderServiceImpl orderService;

	public OrderController() {
		System.out.println("in ctor " + getClass());
	}

	@GetMapping
	public ResponseEntity<?> getOrders() {
		System.out.println("in get all orders");
//		List<OrderRespDTO> orders = orderService.getAllOrders();
//		if (orders.isEmpty())
//			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
//		return ResponseEntity.status(HttpStatus.OK).body(orders);
		List<OrderRespDTO> orders = orderService.getAllOrders();
	    return ResponseEntity.ok(orders);
	}

	@PostMapping
	public ResponseEntity<?> addNewOrder(@RequestBody Orders order) {
		System.out.println("in add new order " + order);
		return ResponseEntity.status(HttpStatus.CREATED) 
				.body(new ApiResponse(orderService.addNewOrder(order)));
	}

	@DeleteMapping("/{orderId}")
	public ResponseEntity<?> deleteOrderDetails(@PathVariable Long orderId) {
		System.out.println("in delete order " + orderId);
		try {
			return ResponseEntity.ok(orderService.deleteOrder(orderId));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}

	@GetMapping("/{orderId}")
	public ResponseEntity<?> getOrderDetails(@PathVariable Long orderId) {
		System.out.println("in get order details " + orderId);
		try {
			return ResponseEntity.ok(orderService.getOrderDetails(orderId));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}

	@PutMapping("/{orderId}")
	public ResponseEntity<?> updateOrderDetails(@PathVariable Long orderId, @RequestBody Orders order) {
		System.out.println("in update order " + orderId + " " + order);
		try {
			return ResponseEntity.ok(orderService.updateOrderDetails(orderId, order));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
}
