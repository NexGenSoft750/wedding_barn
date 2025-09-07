import Header from '@/components/layout/header/MainHeader';
import Footer from '@/components/layout/footer/Footer';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;