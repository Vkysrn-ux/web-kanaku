import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'kanaku.co.in — Smart GST & Accounting Platform',
  description: 'Structured Accounting. Stress-free Compliance. Upload invoices, AI extracts data, experts verify, file GST returns — all in one platform.',
  keywords: 'GST compliance, bookkeeping, accounting, GSTR-1, GSTR-3B, India',
  openGraph: {
    title: 'kanaku.co.in — Smart GST & Accounting Platform',
    description: 'Structured Accounting. Stress-free Compliance.',
    url: 'https://kanaku.co.in',
    siteName: 'kanaku.co.in',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
