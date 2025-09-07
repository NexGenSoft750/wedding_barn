import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss';
import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Wedding Barn',
  description: 'Wedding venue website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
