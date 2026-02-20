'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

const navItems = [
  ['Candidate', '/candidate'],
  ['Recruiter', '/recruiter'],
  ['Admin', '/admin'],
  ['Jobs', '/jobs'],
  ['Mentors', '/mentors'],
  ['Assessments', '/assessments'],
  ['Analytics', '/analytics'],
];

export function DashboardShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B132B] text-white">
      <div className="grid grid-cols-[260px_1fr]">
        <aside className="border-r border-cyan-500/20 p-5">
          <h1 className="mb-6 text-xl font-semibold text-[#00D4FF]">Tutelr Career Fast Forward</h1>
          <nav className="space-y-2">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="block rounded-md px-3 py-2 hover:bg-[#1C2541]">
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <motion.main
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-8"
        >
          <h2 className="mb-5 text-3xl font-bold">{title}</h2>
          {children}
        </motion.main>
      </div>
    </div>
  );
}
