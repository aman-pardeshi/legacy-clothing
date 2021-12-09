import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JyWQTSGqSBcpx3TU1kiyP9CURPNfgmNtgbLuIp54fZ0pC9XZTN08RUqCGRnioTkTeyuJnqH4oMVcLlPshEF8jxe005PQonymm";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Legacy Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is ₹${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
