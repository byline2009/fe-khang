"use client";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe";
import dynamic from "next/dynamic";
const CheckoutForm = dynamic(() => import("./CheckoutForm"), {
  ssr: false,
});
import { useEffect, useState, useMemo } from "react";

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => console.log("data", data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 200000, // VND
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const options = useMemo(() => {
    return clientSecret ? { clientSecret } : null;
  }, [clientSecret]);

  if (!options) return null; // loading

  return (
    <div className="content-page">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
