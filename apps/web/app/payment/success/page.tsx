import { DashboardShell } from '@/components/dashboard-shell';

export default function PaymentSuccessPage() {
  return (
    <DashboardShell title="Payment Success">
      <p className="rounded-lg border border-[#22C55E]/40 bg-[#22C55E]/10 p-4 text-[#22C55E]">
        Your subscription payment is confirmed. Invoice and plan details are now available in Billing.
      </p>
    </DashboardShell>
  );
}
