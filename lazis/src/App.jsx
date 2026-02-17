import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

// Import Komponen
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Halaman
import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import Ziswaf from './pages/Ziswaf';
import Program from './pages/Program';
import Layanan from './pages/Layanan';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function App() {
  const [halaman, setHalaman] = useState('beranda');

  // Fungsi untuk menentukan halaman mana yang muncul
  const renderContent = () => {
    switch (halaman) {
      case 'beranda':
        return <Beranda setHalaman={setHalaman} />;

      // Group Profil
      case 'tentang':
      case 'visimisi':
      case 'pengurus':
        return <Profil subPage={halaman} />;

      // Group Ziswaf
      case 'zakat':
      case 'wakaf':
      case 'infaq':
        return <Ziswaf type={halaman} />;

      // Group Program
      case 'donasi':     // Tampilkan semua
      case 'pendidikan': // Filter kategori
      case 'kesehatan':
      case 'ekonomi':
      case 'kemanusiaan':
      case 'lingkungan':
        return <Program kategori={halaman} />;

      // Group Layanan
      case 'kantor':
      case 'konsultasi':
      case 'rekening':
      case 'laporan':
        return <Layanan subPage={halaman} />;

      // Halaman Standalone
      case 'manfaat': return <div className="container py-5 mt-5"><h2>Halaman Penerima Manfaat</h2></div>;
      case 'berita': return <div className="container py-5 mt-5"><h2>Halaman Berita Terkini</h2></div>;

      default: return <Beranda setHalaman={setHalaman} />;
    }
  };

  return (
    <>
      <Navbar setHalaman={setHalaman} />

      {/* Area Konten Utama */}
      <main style={{ minHeight: '80vh' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={halaman}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}

export default App;