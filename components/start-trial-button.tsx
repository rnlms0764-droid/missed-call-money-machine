"use client"

// Uses React 18 form hooks (useFormState) — not useActionState (React 19).
import { useFormState, useFormStatus } from "react-dom"
import { startFreeTrial, type CheckoutState } from "@/app/actions/checkout"

function SubmitButton({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending} className={className}>
      {pending ? "Starting your trial…" : children}
    </button>
  )
}

export function StartTrialButton({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const [state, formAction] = useFormState<CheckoutState, FormData>(startFreeTrial, {})

  return (
    <div className="contents">
      <form action={formAction} className="contents">
        <SubmitButton className={className}>{children}</SubmitButton>
      </form>
      {state?.error ? (
        <p role="alert" className="mt-3 text-sm text-red-500">
          {state.error}
        </p>
      ) : null}
    </div>
  )
}
