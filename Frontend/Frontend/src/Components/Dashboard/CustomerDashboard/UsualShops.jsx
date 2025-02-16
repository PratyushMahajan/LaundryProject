import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsualShops() {
  const [shops, setShops] = useState([]);
  const [orderDetails, setOrderDetails] = useState({ shopId: '', totalAmount: '', userId: '' });

  
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get('http://localhost:8080/shops');
        setShops(response.data);
      } catch (error) {
        console.error('Error fetching shops:', error);
      }
    };

    fetchShops();
  }, []);

  
  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  // Handle order submission
  const handleOrder = async (e) => {
    e.preventDefault();

    try {
   
      const deliveryResponse = await axios.post('http://localhost:8080/delivery', {
        pickupTime: new Date().toISOString(),
        dropTime: new Date(Date.now() + 3600000).toISOString(), 
        deliveryStatus: 'Pending',
        deliveryPersonName: 'prakaksh',  
        deliveryPersonPhone: '1234567890', 
      });
      console.log('Delivery Response:', deliveryResponse.data);

      const deliveryId = deliveryResponse.data.id; 

      
      const orderPayload = {
        userId: parseInt(orderDetails.userId), 
        shopId: parseInt(orderDetails.shopId), 
        deliveryid: deliveryId, 
        status: 'Processing',
        orderDate: new Date().toISOString().split('T')[0],
        totalAmount: parseFloat(orderDetails.totalAmount), 
        createdOn: new Date().toISOString().split('T')[0],
      };

      await axios.post('http://localhost:8080/orders', orderPayload);
      alert('Order placed successfully!');

      setOrderDetails({ shopId: '', totalAmount: '', userId: '' }); 
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shop Details</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Shop ID</th>
            <th className="border p-2">Shop Name</th>
            <th className="border p-2">Owner Name</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((shop) => (
            <tr key={shop.id}>
              <td className="border p-2">{shop.id}</td>
              <td className="border p-2">{shop.shopName}</td>
              <td className="border p-2">{shop.ownerName}</td>
              <td className="border p-2">{shop.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6">Place an Order</h3>
      <form onSubmit={handleOrder} className="mt-4">
        <label className="block mb-2">User ID:</label>
        <input
          type="text"
          name="userId"
          value={orderDetails.userId}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter User ID"
          required
        />

        <label className="block mb-2">Shop ID:</label>
        <input
          type="text"
          name="shopId"
          value={orderDetails.shopId}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter Shop ID"
          required
        />

        <label className="block mb-2">Total Amount:</label>
        <input
          type="text"
          name="totalAmount"
          value={orderDetails.totalAmount}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter Total Amount"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default UsualShops;
