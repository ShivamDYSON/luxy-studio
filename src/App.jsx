import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Design from './components/Design'; // Rename Step1 to Design
import Payment from './components/Payment'; // Rename Step3 to Payment
import Confirmation from './components/Confirmation';

const App = () => {
  const [step, setStep] = useState(0);
  const [designData, setDesignData] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const handleNext = (data) => {
    setDesignData(data);
    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const handleFinalize = (paymentData) => {
    const orderData = {
      ...designData,
      ...paymentData,
      orderNumber: 'LX123456',
      deliveryDate: '5-7 business days',
    };
    setOrderDetails(orderData);
    setStep(step + 1);
  };

  const handleCartUpdate = () => {
    setCartCount(cartCount + 1); // Increment the cart count
  };

  return (
    <Provider store={store}>
      <div>
        <Navbar cartCount={cartCount} />
        {step === 0 && <Landing onNext={() => setStep(1)} onCartUpdate={handleCartUpdate} />}
        {step === 1 && <Design onNext={handleNext} />} {/* Changed from Step1 to Design */}
        {step === 2 && (
          <Payment
            designData={designData}
            onFinalize={handleFinalize}
            cartCount={cartCount}
            onCartUpdate={handleCartUpdate} // Pass the handleCartUpdate function
          />
        )}
        {step === 3 && <Confirmation orderDetails={orderDetails} />} {/* Adjusted step number */}
      </div>
    </Provider>
  );
};

export default App;
