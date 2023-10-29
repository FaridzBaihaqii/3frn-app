// errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err); // Cetak kesalahan di konsol

  // Tangani jenis kesalahan tertentu
  if (err instanceof MyCustomError) {
    return res.status(400).json({ message: err.message }); // Tanggapan khusus untuk kesalahan kustom
  }

  // Tanggani jenis kesalahan lainnya
  return res.status(500).json({ message: 'Terjadi kesalahan dalam server' });
};

module.exports = errorHandler;
