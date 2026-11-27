// src/components/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MobileNav from './MobileNav';
import ScrollManager from './ScrollManager';
import FloatingChat from '../ui/FloatingChat';
import ScrollProgress from '../ui/ScrollProgress';

export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col pb-[calc(4rem+env(safe-area-inset-bottom))] lg:pb-0">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <ScrollManager />
      <ScrollProgress />
      <Header />
      <main id="content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
      <FloatingChat />
    </div>
  );
}