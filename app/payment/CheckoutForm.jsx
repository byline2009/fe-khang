"use client";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Stripe sẽ redirect về đây nếu cần 3DS
        return_url: `${window.location.origin}/success`,
      },
      redirect: "if_required",
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      router.push("/success");
    }

    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />

      {error && <p className="text-danger mt-2">{error}</p>}

      <div className="mt-4 flex justify-center">
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!stripe || loading}
        >
          {loading ? "Processing..." : "Pay"}
        </button>
      </div>
    </form>
  );
}
