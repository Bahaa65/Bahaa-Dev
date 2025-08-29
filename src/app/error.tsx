"use client";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  return (
    <div className="p-6">
      <h2>Something went wrong.</h2>
      <pre className="mt-2 text-sm opacity-70">{error.message}</pre>
    </div>
  );
}


