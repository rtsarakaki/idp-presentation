'use client';

import dynamic from 'next/dynamic';

const Presentation = dynamic(() => import('./Presentation'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white text-xl">Carregando apresentação...</div>
    </div>
  )
});

export default function PresentationWrapper() {
  return <Presentation />;
} 