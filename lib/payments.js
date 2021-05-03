import { loadStripe } from '@stripe/stripe-js';

//const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
//const stripePromise = loadStripe("pk_test_LtebB582NS83XkmTeG38Tysy");
const stripePromise = loadStripe("sk_test_VY7lDUGTPJbz7iG3FHNgbW7Q");
export async function initiateCheckout({ lineItems } = {}) {
  const stripe = await stripePromise;

  await stripe.redirectToCheckout({
    mode: 'payment',

    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}