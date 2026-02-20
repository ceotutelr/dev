import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0B132B] px-8 py-16 text-white">
      <section className="mx-auto max-w-5xl text-center">
        <p className="mb-3 inline-block rounded-full border border-[#00D4FF]/50 px-3 py-1 text-xs text-[#00D4FF]">
          Cybersecurity Career Acceleration SaaS
        </p>
        <h1 className="text-5xl font-extrabold leading-tight">Tutelr Career Fast Forward</h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          Get hired faster with AI-powered mock interviews, task assessments, mentor guidance, certifications, and recruiter matching.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/candidate" className="rounded-lg bg-[#00D4FF] px-6 py-3 font-semibold text-black">Start Career Accelerator</Link>
          <Link href="/recruiter" className="rounded-lg border border-[#F43F5E] px-6 py-3 font-semibold text-[#F43F5E]">Hire Cyber Talent Now</Link>
        </div>
      </section>
    </main>
  );
}
