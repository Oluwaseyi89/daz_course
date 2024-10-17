import React, { useState } from 'react';

import '../../styles/paymentmethods.css';

function PaymentMethods (props) {

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
  
    const handleSavePaymentMethod = (e) => {
      e.preventDefault();
      // Perform validation or logic to save payment method
      console.log('Payment method saved successfully');
    };

    return (
        <div className="paymentmethods">
          <h2>Payment Methods</h2>
          <p>Add or update your payment information below</p>
          <form onSubmit={handleSavePaymentMethod} className="payment-form">
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                placeholder="Enter card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="payment-input"
                required
              />
            </div>
    
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="payment-input"
                required
              />
            </div>
    
            <div className="form-group">
              <label>CVV</label>
              <input
                type="password"
                placeholder="Enter CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="payment-input"
                required
              />
            </div>
    
            <button type="submit" className="save-payment-button">Save Payment Method</button>
          </form>
        </div>
      );

};

export default PaymentMethods;