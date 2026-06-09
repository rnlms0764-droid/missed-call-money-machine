"use server"

import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { getStripe, TRIAL_PRODUCT } from "@/lib/stripe"

export type CheckoutState = { error?: string }

export async function startFreeTrial(
  _prevState: CheckoutState,
  _formData: FormData,
): Promise<CheckoutState> {
  // Build an absolute base URL for the success/cancel redirects.
  const headersList = await headers()
  const host = headersList.get("host") ?? "localhost:3000"
  const protocol = host.includes("localhost") ? "http" : "https"
  const baseUrl = `${protocol}://${host}`

  // Use your existing Stripe product/price when STRIPE_TRIAL_PRICE_ID is set,
  // otherwise create the price inline from the TRIAL_PRODUCT config.
  const lineItem = TRIAL_PRODUCT.priceId
    ? { quantity: 1, price: TRIAL_PRODUCT.priceId }
    : {
        quantity: 1,
        price_data: {
          currency: TRIAL_PRODUCT.currency,
          unit_amount: TRIAL_PRODUCT.amountInCents,
          recurring: { interval: TRIAL_PRODUCT.interval },
          product_data: {
            name: TRIAL_PRODUCT.name,
            description: TRIAL_PRODUCT.description,
          },
        },
      }

  let checkoutUrl: string | null = null

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "subscription",
      // No card required to start the trial — Stripe only collects an email.
      payment_method_collection: "if_required",
      line_items: [lineItem],
      subscription_data: {
        trial_period_days: TRIAL_PRODUCT.trialPeriodDays,
        // If no card is on file when the trial ends, pause the subscription
        // instead of cancelling — keeps the customer recoverable.
        trial_settings: {
          end_behavior: { missing_payment_method: "pause" },
        },
      },
      success_url: `${baseUrl}/checkout/success`,
      cancel_url: `${baseUrl}/?canceled=1`,
    })
    checkoutUrl = session.url
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.log("[v0] Stripe checkout error:", message)

    if (/api key/i.test(message)) {
      return {
        error:
          "Payments are temporarily unavailable. The Stripe connection needs to be refreshed — please try again shortly.",
      }
    }
    return { error: "We couldn't start your trial right now. Please try again in a moment." }
  }

  if (!checkoutUrl) {
    return { error: "We couldn't start your trial right now. Please try again in a moment." }
  }

  // redirect() throws internally, so it must run outside the try/catch above.
  redirect(checkoutUrl)
}
