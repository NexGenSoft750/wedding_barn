import { Header } from '@/components/layout/header/main-header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';


export const metadata = {
  title: 'Wedding Barn',
  description: 'Wedding venue website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
