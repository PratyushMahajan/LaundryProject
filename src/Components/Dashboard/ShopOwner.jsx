import React, { useState } from "react";
import OrderDetails from "./ShopOwnerDashboard/SOrderDetails";
import PickupOverview from "./ShopOwnerDashboard/SPickupOverview";
import PaymentStatus from "./ShopOwnerDashboard/SPaymentStatus";
import OrderStatusSummary from "./ShopOwnerDashboard/SOrderStatusSummary";
import ShopDetails from "./ShopOwnerDashboard/SShopDetails";

const ShowOwnerDashboard = () => {
  const [orders] = useState([
    { id: "001", user: "Ace", status: "Ready", payment: "Paid" },
    { id: "002", user: "Ben", status: "Preparing", payment: "Pending" },
    { id: "003", user: "Charlie", status: "Not Started", payment: "Pending" },
  ]);

  const [pickups] = useState([
    { id: "P001", location: "loc A", time: "10:00 AM" },
    { id: "P002", location: "loc B", time: "11:00 AM" },
  ]);

  const [payments] = useState({ completed: 80, pending: 20 });

  const [shop] = useState({
    name: "Anil",
    address: "123 High St, mumbai",
    rating: 4.5,
    dailyOrders: 45,
    pendingOrders: 5,
  });

  const orderStatusSummary = {
    ready: 10,
    preparing: 20,
    notStarted: 5,
  };

  return (
    <div className="container-fluid py-4">
      <div className="row d-flex justify-content-center ">
      <div className="col-md-12">
      <h3>Owner Dashboard</h3>
      <hr></hr>
          <ShopDetails shop={shop} />
        </div>
        <div className="col-md-12">
          <OrderDetails orders={orders} />
        </div>
        <div className="col-md-12">
          <PickupOverview pickups={pickups} />
        </div>
        <div className="col-md-12">
          <PaymentStatus payments={payments} />
        </div>
        <div className="col-md-12">
          <OrderStatusSummary statusSummary={orderStatusSummary} />
        </div>
      </div>
    </div>
  );
};

export default ShowOwnerDashboard;
