import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const Order = ({ order, updateOrderStatus }) => {
  return (
    <div className="mb-2">
      <h6>Order ID: {order.id}</h6>
      <ul>
        <li>
          <Badge bg="success">Ready:</Badge> {order.status === "ready" ? "1" : "0"}
        </li>
        <li>
          <Badge bg="primary">Preparing:</Badge> {order.status === "preparing" ? "1" : "0"}
        </li>
        <li>
          <Badge bg="danger">Not Started:</Badge> {order.status === "notStarted" ? "1" : "0"}
        </li>
      </ul>
      <div className="d-flex justify-content-between mb-2">
        <Button onClick={() => updateOrderStatus(order.id, "ready")}>Mark as Ready</Button>
        <Button onClick={() => updateOrderStatus(order.id, "preparing")}>Mark as Preparing</Button>
        <Button onClick={() => updateOrderStatus(order.id, "notStarted")}>Mark as Not Started</Button>
      </div>
    </div>
  );
};

const OrderStatusSummary = ({ initialOrders }) => {
  const [orders, setOrders] = useState(initialOrders);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) => 
      prevOrders.map(order => 
        order.id === orderId 
          ? {
              ...order,
              status: newStatus // Set the new status directly
            } 
          : order // Keep other orders unchanged
      )
    );
  };

  return (
    <div className="mb-4">
      <h5>Order Status Summary</h5>
      {orders.map(order => (
        <Order key={order.id} order={order} updateOrderStatus={updateOrderStatus} />
      ))}
    </div>
  );
};

// Sample usage
const App = () => {
  const initialOrders = [
    { id: 1, status: null }, // Initial status can be null or any of the three statuses
    { id: 2, status: null },
    { id: 3, status: null },
  ];

  return <OrderStatusSummary initialOrders={initialOrders} />;
};

export default App;