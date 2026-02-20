interface Props {
  params: { certificateId: string };
}

export default function CertificateVerifyPage({ params }: Props) {
  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-[#0B132B] p-8 text-white">
      <h1 className="text-3xl font-bold text-[#00D4FF]">Certificate Verification</h1>
      <p className="mt-3 text-slate-300">Certificate ID: {params.certificateId}</p>
      <div className="mt-6 rounded-lg border border-cyan-500/30 bg-[#1C2541]/40 p-5">
        <p>Candidate: Jane Doe</p>
        <p>Program: Career Fast Forward Accelerator</p>
        <p>Status: Verified ✅</p>
      </div>
    </main>
  );
}
