import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";

function LoginButton() {
  const [{ isPending }] = usePayPalScriptReducer();
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
    
  const handlePayment = async () => {
    // Обробка платежу
    const response = await fetch('/api/paypal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: 10, // сума платежу
        currency: 'USD' // валюта платежу
      })
    });

    if (response.ok) {
      setPaid(true);
    } else {
      setError('Помилка оплати');
    }
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {!paid && <PayPalButtons createOrder={() => handlePayment()} />}
      {paid && <div>Платіж успішно здійснено!</div>}
    </div>
  );
};

function MyComponent() {
  return (
    <PayPalScriptProvider options={{ "client-id": "ATm-1JrVHJKx1v86PIbVhQgPROyahGLdnsoegts9YliSO0oD0Vzxc9S78YMwnR8v9Fj5m5NsWq2TpXlF" }}>
      <LoginButton />
    </PayPalScriptProvider>
  );
};

export default MyComponent;
