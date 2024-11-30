import React from 'react';

const Partner = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Become a Partner</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="shopAddress" className="form-label">Shop Address</label>
          <input type="text" className="form-control" id="shopAddress" />
        </div>
        <div className="mb-3">
          <label htmlFor="shopName" className="form-label">Shop Name</label>
          <input type="text" className="form-control" id="shopName" />
        </div>
        <div className="mb-3">
          <label htmlFor="services" className="form-label">Services</label>
          <textarea className="form-control" id="services" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" className="form-control" id="price" />
        </div>
        <div className="mb-3">
          <label htmlFor="documents" className="form-label">Documents (PAN etc...)</label>
          <input type="file" className="form-control" id="documents" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Partner;