const Profil = ({ subPage }) => {
  // Database Konten Profil
  const konten = {
    tentang: {
      judul: "Tentang Lazis DMI DKI Jakarta",
      isi: "Lazis DMI DKI Jakarta adalah lembaga nirlaba yang berkhidmat dalam pemberdayaan umat melalui pengelolaan ZISWAF secara profesional."
    },
    visimisi: {
      judul: "Visi & Misi",
      isi: (
        <div>
          <h5>Visi</h5><p>Menjadi Lembaga Amil Zakat Terpercaya berbasis Masjid.</p>
          <h5>Misi</h5><p>1. Optimalisasi ZISWAF Digital.<br/>2. Penyaluran tepat sasaran.</p>
        </div>
      )
    },
    pengurus: {
      judul: "Susunan Pengurus",
      isi: "Ketua Umum: [Nama], Sekretaris: [Nama], Bendahara: [Nama]."
    }
  };

  const data = konten[subPage] || konten.tentang;

  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="card border-0 shadow-sm p-5 rounded-4">
          <h2 className="fw-bold text-success mb-4 border-bottom pb-2">{data.judul}</h2>
          <div className="text-secondary fs-5">{data.isi}</div>
        </div>
      </div>
    </section>
  );
};
export default Profil;