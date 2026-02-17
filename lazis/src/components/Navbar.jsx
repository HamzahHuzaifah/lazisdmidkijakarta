const Navbar = ({ setHalaman }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top transition-all">
      <div className="container">
        <a className="navbar-brand fw-bold text-success" href="#" onClick={() => setHalaman('beranda')}>
          Lazis DMI DKI Jakarta
        </a>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-3 align-items-center">

            {/* Profil Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Profil</a>
              <ul className="dropdown-menu border-0 shadow-sm">
                <li><button className="dropdown-item" onClick={() => setHalaman('tentang')}>Tentang Kami</button></li>
                <li><button className="dropdown-item" onClick={() => setHalaman('visimisi')}>Visi & Misi</button></li>
                <li><button className="dropdown-item" onClick={() => setHalaman('pengurus')}>Susunan Pengurus</button></li>
              </ul>
            </li>

            {/* Ziswaf Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Ziswaf</a>
              <ul className="dropdown-menu border-0 shadow-sm">
                <li><button className="dropdown-item" onClick={() => setHalaman('zakat')}>Zakat</button></li>
                <li><button className="dropdown-item" onClick={() => setHalaman('wakaf')}>Wakaf</button></li>
                <li><button className="dropdown-item" onClick={() => setHalaman('infaq')}>Infaq</button></li>
              </ul>
            </li>

            {/* Program Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Program</a>
              <ul className="dropdown-menu border-0 shadow-sm">
                <li><button className="dropdown-item" onClick={() => setHalaman('donasi')}>Semua Program</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" onClick={() => setHalaman('pendidikan')}>Pendidikan</button></li>
                <li><button className="dropdown-item" onClick={() => setHalaman('kesehatan')}>Kesehatan</button></li>
                <li><button className="dropdown-item" onClick={() => setHalaman('ekonomi')}>Ekonomi</button></li>
                <li><button className="dropdown-item" onClick={() => setHalaman('kemanusiaan')}>Kemanusiaan</button></li>
                <li><button className="dropdown-item" onClick={() => setHalaman('lingkungan')}>Lingkungan</button></li>
              </ul>
            </li>

            {/* Layanan Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Layanan</a>
              <ul className="dropdown-menu border-0 shadow-sm">
                <li><button className="dropdown-item" onClick={() => setHalaman('kantor')}>Kantor Layanan</button></li>
                <li><button className="dropdown-item" onClick={() => setHalaman('konsultasi')}>Konsultasi</button></li>
                <li><button className="dropdown-item" onClick={() => setHalaman('rekening')}>Info Rekening</button></li>
                <li><button className="dropdown-item" onClick={() => setHalaman('laporan')}>Annual Report</button></li>
              </ul>
            </li>

            <li className="nav-item"><button className="nav-link btn-link border-0 bg-transparent" onClick={() => setHalaman('manfaat')}>Manfaat</button></li>
            <li className="nav-item"><button className="nav-link btn-link border-0 bg-transparent" onClick={() => setHalaman('berita')}>Berita</button></li>
          </ul>
          <div className="d-flex ms-lg-4 gap-3 mt-3 mt-lg-0 align-items-center">
            <button className="btn btn-success btn-sm rounded-pill px-4 py-2 shadow-sm fw-bold" onClick={() => setHalaman('donasi')}>Donasi Sekarang</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;