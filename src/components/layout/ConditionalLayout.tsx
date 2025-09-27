'use client';

import { usePathname } from 'next/navigation';
import Layout from '@/components/layout/Layout';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <Layout>
      {children}
    </Layout>
  );
}