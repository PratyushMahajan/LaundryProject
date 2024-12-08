package com.freshThreads.service;


import java.util.List;
import com.freshThreads.dto.ApiResponse;
import com.freshThreads.entities.Shop;

public interface ShopService {

   List<Shop> getAllShops();
   String addNewShop(Shop newShop);  
   Shop getShopDetails(Long shopId);
   ApiResponse updateShopDetails(Long shopId, Shop shop);
   ApiResponse deleteShop(Long shopId); 
}


