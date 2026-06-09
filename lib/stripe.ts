import "server-only"
import Stripe from "stripe"

// STRIPE_SECRET_KEY is provided via project environment variables.
//
// The client is created lazily so that importing this module never throws at
// build time. The missing-key error is only raised when checkout actually runs
// at request time, where it's caught and surfaced as a friendly message.
let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set")
  }
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-05-27.dahlia",
    })
  }
  return _stripe
}

// Product/pricing config — the source of truth for the trial offer.
//
// If STRIPE_TRIAL_PRICE_ID is set, checkout uses YOUR existing Stripe product/price
// directly (e.g. "price_1Tfm9OKJlm5AHGkT9YOeP1eU"). The price MUST live in the
// Stripe account currently connected to this project, or Stripe returns "No such price".
//
// If it is NOT set, checkout falls back to creating the price inline from the values
// below. Price is validated server-side either way so it can never be tampered with.
export const TRIAL_PRODUCT = {
  // Set this in Project Settings → Vars once your own Stripe account is connected.
  priceId: process.env.STRIPE_TRIAL_PRICE_ID,
  name: "Missed Call Money Machine",
  description: "AI-powered call recovery. AI answers missed calls 24/7, qualifies leads, and books appointments.",
  amountInCents: 99700, // $997.00 / month
  currency: "usd",
  interval: "month" as const,
  trialPeriodDays: 30,
}
