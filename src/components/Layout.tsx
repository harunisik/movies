import { ReactNode } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => (
  <div>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
