package com.freshThreads.dto;

public class OrderItemsRespDTO {

    private Long orderItemId;
    private String itemName;
    private Double itemPrice;
    private Integer quantity;

    // Constructor
    public OrderItemsRespDTO() {
    }

    public OrderItemsRespDTO(Long orderItemId, String itemName, Double itemPrice, Integer quantity) {
        this.orderItemId = orderItemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.quantity = quantity;
    }

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
}
