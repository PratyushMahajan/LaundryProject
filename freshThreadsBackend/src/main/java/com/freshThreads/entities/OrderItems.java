package com.freshThreads.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity    
public class OrderItems {
    
    
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long orderItemId;
    
        private String itemName;
        private Double itemPrice;
        private Integer quantity;
    
        @ManyToOne
        private Orders order;  // Foreign key relationship with Orders
    
        // Getters and Setters
        public Long getOrderItemId() {
            return orderItemId;
        }
    
        public void setOrderItemId(Long orderItemId) {
            this.orderItemId = orderItemId;
        }
    
        public String getItemName() {
            return itemName;
        }
    
        public void setItemName(String itemName) {
            this.itemName = itemName;
        }
    
        public Double getItemPrice() {
            return itemPrice;
        }
    
        public void setItemPrice(Double itemPrice) {
            this.itemPrice = itemPrice;
        }
    
        public Integer getQuantity() {
            return quantity;
        }
    
        public void setQuantity(Integer quantity) {
            this.quantity = quantity;
        }
    
        public Orders getOrder() {
            return order;
        }
    
        public void setOrder(Orders order) {
            this.order = order;
        }
    
    
    
       
}
