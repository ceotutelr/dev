import { DashboardShell } from '@/components/dashboard-shell';
import { KpiCard } from '@/components/kpi-card';
import { FunnelChart } from '@/components/funnel-chart';

export default function Page() {
  return (
    <DashboardShell title="Recruiter Dashboard">
      <p className="mb-4 text-slate-300">Source, score, and progress cybersecurity candidates through an AI-guided hiring pipeline.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <KpiCard label="Active Users" value="2,340" />
        <KpiCard label="Conversion Rate" value="34%" />
        <KpiCard label="Avg. Time to Hire" value="19 days" />
      </div>
      <div className="mt-6"><FunnelChart /></div>
    </DashboardShell>
  );
}
