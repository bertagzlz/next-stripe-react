import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// process.env.STRIPE_SECRET_KEY
//const stripePromise = loadStripe("sk_test_VY7lDUGTPJbz7iG3FHNgbW7Q".toString());

export async function initiateCheckout({ lineItems } = {}) {
  const stripe = await stripePromise;
  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}