import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
