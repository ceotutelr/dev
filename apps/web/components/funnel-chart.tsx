'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  { stage: 'Applied', count: 120 },
  { stage: 'Screened', count: 75 },
  { stage: 'Interview', count: 40 },
  { stage: 'Offer', count: 18 },
];

export function FunnelChart() {
  return (
    <div className="h-72 rounded-xl border border-cyan-400/20 bg-[#1C2541]/30 p-4">
      <p className="mb-4 font-medium">Hiring Funnel</p>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <XAxis dataKey="stage" stroke="#00D4FF" />
          <YAxis stroke="#94a3b8" />
          <Bar dataKey="count" fill="#00D4FF" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
