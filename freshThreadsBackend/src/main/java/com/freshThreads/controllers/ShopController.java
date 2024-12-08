package com.freshThreads.controllers;

import com.freshThreads.entities.Shop;
import com.freshThreads.service.ShopService;

import com.freshThreads.dto.ApiResponse;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/shops")
public class ShopController {

    @Autowired
    private ShopService shopService;

     // Get all shops
     @GetMapping
     public ResponseEntity<?> viewShops() {
         return ResponseEntity.ok
                     (shopService.getAllShops());
     }

     // Get details of a shop by ID
     @GetMapping("/{id}")
     public ResponseEntity<Shop> getShop(@PathVariable Long id) {
         Shop shop = shopService.getShopDetails(id);
         return ResponseEntity.ok(shop);
     }

    // Create a new shop
    @PostMapping
    public ResponseEntity<?> createShop(@RequestBody @Valid  Shop shop) {
        return ResponseEntity.ok
                (shopService.addNewShop(shop));
    }

   

    // Update shop details
    @PutMapping("/{id}")
    public ResponseEntity<?> updateShop(@RequestBody @PathVariable Long id, @Valid  Shop shopDetails) {
        ApiResponse response = shopService.updateShopDetails(id, shopDetails);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteShop(@PathVariable Long id) {
        // Correctly use the instance of shopService to call the deleteShop method
        ApiResponse response = shopService.deleteShop(id);
        return ResponseEntity.ok(response);
    }
   
}
