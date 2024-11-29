import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderDetails from './OrderDetails'
import DeliveryManProfile from './DeliveryManProfile'
import CompletedOrders from './CompletedOrders';


const User = () => {
  return (
      <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Header */}
        <Header />

        {/* Order Details */}
        <DeliveryManProfile/>
        <OrderDetails />
        <CompletedOrders/>
        {/* made by payal Gajbe*/}
      </div>
    </div>


  )
}

export default User
