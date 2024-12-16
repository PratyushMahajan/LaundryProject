import React, { useEffect, useState } from 'react';
import api from './api';
import './Admin.css';


const Admin = () => {
  const [activeSection, setActiveSection] = useState('orders'); // Default section
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [shopOwners, setShopOwners] = useState([]);

  // Fetch all data from the backend
  useEffect(() => {
    if (activeSection === 'orders') fetchOrders();
    if (activeSection === 'customers') fetchCustomers();
    if (activeSection === 'delivery') fetchDelivery();
    if (activeSection === 'shopowners') fetchShopOwners();
  }, [activeSection]);

  const fetchOrders = async () => {
    try {
      const response = await api.get('/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchCustomers = async () => {
    try {
      const response = await api.get('/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const fetchDelivery = async () => {
    try {
      const response = await api.get('/delivery');
      setDelivery(response.data);
    } catch (error) {
      console.error('Error fetching delivery personnel:', error);
    }
  };

  const fetchShopOwners = async () => {
    try {
      const response = await api.get('/shopowners');
      setShopOwners(response.data);
    } catch (error) {
      console.error('Error fetching shop owners:', error);
    }
  };

  return (
    <div className="admin-dashboard" style={{ display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{ width: '200px', padding: '20px', backgroundColor: '#f4f4f4' }}>
        <h3>Admin Menu</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li
            style={{ padding: '10px', cursor: 'pointer', backgroundColor: activeSection === 'orders' ? '#ddd' : '' }}
            onClick={() => setActiveSection('orders')}
          >
            Orders
          </li>
          <li
            style={{ padding: '10px', cursor: 'pointer', backgroundColor: activeSection === 'customers' ? '#ddd' : '' }}
            onClick={() => setActiveSection('customers')}
          >
            Customers
          </li>
          <li
            style={{ padding: '10px', cursor: 'pointer', backgroundColor: activeSection === 'delivery' ? '#ddd' : '' }}
            onClick={() => setActiveSection('delivery')}
          >
            Delivery
          </li>
          <li
            style={{ padding: '10px', cursor: 'pointer', backgroundColor: activeSection === 'shopowners' ? '#ddd' : '' }}
            onClick={() => setActiveSection('shopowners')}
          >
            Shop Owners
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '20px' }}>
        <h1>Admin Dashboard</h1>
        {activeSection === 'orders' && (
          <section>
            <h2>All Orders</h2>
            <table border="1">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Items</th>
                  <th>No. of Items</th>
                  <th>Price</th>
                  <th>Pickup</th>
                  <th>Dropoff</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{order.items}</td>
                    <td>{order.numberOfItems}</td>
                    <td>{order.price}</td>
                    <td>{order.pickup}</td>
                    <td>{order.dropoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeSection === 'customers' && (
          <section>
            <h2>All Customers</h2>
            <table border="1">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.contact}</td>
                    <td>{customer.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeSection === 'delivery' && (
          <section>
            <h2>All Delivery Personnel</h2>
            <table border="1">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {delivery.map((person) => (
                  <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeSection === 'shopowners' && (
          <section>
            <h2>All Shop Owners</h2>
            <table border="1">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Shop Name</th>
                  <th>Location</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {shopOwners.map((owner) => (
                  <tr key={owner.id}>
                    <td>{owner.id}</td>
                    <td>{owner.shopName}</td>
                    <td>{owner.location}</td>
                    <td>{owner.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>
    </div>
  );
};

export default Admin;
