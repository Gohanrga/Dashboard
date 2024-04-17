'use client';

import { useEffect } from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Params {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Params) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center gap-2">
        <FaceFrownIcon className="w-10 text-gray-400" />
        <p>Could not find the requested invoice.</p>
        <Link
          href="/dashboard/invoices"
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        >
          Go Back
        </Link>
      </main>
    </>
  );
}
