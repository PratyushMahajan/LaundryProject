import React from "react";
import { Table, Badge } from "react-bootstrap";

const OrderDetails = ({ orders }) => {
  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "ready":
        return <Badge bg="success">Ready</Badge>;
      case "preparing":
        return <Badge bg="primary">Preparing</Badge>;
      case "not started":
        return <Badge bg="danger">Not Started</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="mb-4">
      {/* payal */}
      <h5>Orders Overview</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Status</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.user}</td>
              <td>{getStatusBadge(order.status)}</td>
              <td>
                <Badge bg={order.payment === "Paid" ? "success" : "warning"}>
                  {order.payment}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderDetails;
