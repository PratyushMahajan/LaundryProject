package com.freshThreads.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.freshThread.exceptions.ResourceNotFoundException;
import com.freshThreads.dao.shopsDao;
import com.freshThreads.dto.ApiResponse;
import com.freshThreads.entities.Shop;

@Service
@Transactional
public class ShopServiceImpl implements ShopService {
   
        @Autowired
        private shopsDao shopRepo;
    
        @Override
        public List<Shop> getAllShops() {
            return shopRepo.findAll();
        }
    
        @Override
        public String addNewShop(Shop newShop) {
            Shop persistentShop = shopRepo.save(newShop);
            return "Added new shop with ID = " + persistentShop.getId();
        }
    
        @Override
        public ApiResponse deleteShop(Long shopId) {
            if (shopRepo.existsById(shopId)) {
                shopRepo.deleteById(shopId);
                return new ApiResponse("Deleted shop details successfully!");
            }
            throw new ResourceNotFoundException("Shop with ID " + shopId + " not found!");
        }
    
        @Override
        public Shop getShopDetails(Long shopId) {
            return shopRepo.findById(shopId)
                    .orElseThrow(() -> new ResourceNotFoundException("Shop with ID " + shopId + " not found!"));
        }
    
        @Override
        public ApiResponse updateShopDetails(Long shopId, Shop shop) {
          
            Shop existingShop = shopRepo.findById(shopId)
                    .orElseThrow(() -> new ResourceNotFoundException("Shop with ID " + shopId + " not found!"));
    
        
            existingShop.setOwnerName(shop.getOwnerName());
            existingShop.setShopName(shop.getShopName());
            existingShop.setStatus(shop.getStatus());
          
    
            shopRepo.save(existingShop);
            return new ApiResponse("Updated Shop Details successfully!");
        }
  }
      






