import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import '../styles/global.css';

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-8 flex-1 bg-gray-50 overflow-y-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-700">Mekong Inclusive Ventures</h1>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Your central hub for managing your venture’s growth — from diagnostics to readiness,
              GEDSI compliance, and capital facilitation — all in one place.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
