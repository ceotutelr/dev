import { DashboardShell } from '@/components/dashboard-shell';
import { KpiCard } from '@/components/kpi-card';


export default function Page() {
  return (
    <DashboardShell title="Profile Builder">
      <p className="mb-4 text-slate-300">Upload resume, tag skills, add portfolio links, and improve recruiter discoverability.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <KpiCard label="Active Users" value="2,340" />
        <KpiCard label="Conversion Rate" value="34%" />
        <KpiCard label="Avg. Time to Hire" value="19 days" />
      </div>
      
    </DashboardShell>
  );
}
