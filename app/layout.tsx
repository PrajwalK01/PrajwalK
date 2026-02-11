import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prajwal | Space Portfolio',
  description: 'A space and physics inspired full-stack portfolio built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
