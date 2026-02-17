const Ziswaf = ({ type }) => {
  const judul = type.charAt(0).toUpperCase() + type.slice(1); // Kapital huruf depan

  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="fw-bold text-success">Layanan {judul}</h2>
            <p className="lead">Salurkan {type} Anda untuk membersihkan harta dan membantu sesama.</p>
            <div className="alert alert-success mt-3">
              <strong>Rekening {judul}:</strong><br/>
              BSI: 700.123.4567 a.n Lazis DMI DKI Jakarta
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card p-4 shadow-sm bg-light border-0">
              <h4>Kalkulator {judul}</h4>
              <div className="mb-3">
                <label>Nominal (Rp)</label>
                <input type="number" className="form-control" placeholder="0" />
              </div>
              <button className="btn btn-success w-100">Hitung & Bayar Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ziswaf;