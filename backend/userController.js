const { Pool } = require('pg');

// Konfigurasi koneksi basis data PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'project',
  password: 'Mistake21_',
  port: 5432, // Sesuaikan dengan port PostgreSQL Anda
});

// Fungsi untuk pendaftaran pengguna
const signup = async (req, res) => {
  const { namaDepan, namaBelakang, email, password, konfirmasiPassword } = req.body;

  // Lakukan validasi data pengguna
  if (!namaDepan || !namaBelakang || !email || !password || !konfirmasiPassword) {
    return res.status(400).json({ message: 'Mohon lengkapi semua field' });
  }

  // Lakukan validasi konfirmasi password
  if (password !== konfirmasiPassword) {
    return res.status(400).json({ message: 'Konfirmasi password tidak sesuai' });
  }

  try {
    // Lakukan operasi untuk menyimpan data pengguna ke database, misalnya menggunakan query ke basis data

    // Contoh penggunaan query dengan PostgreSQL
    await pool.query(
      'INSERT INTO users (nama_depan, nama_belakang, email, password, konfirmasi_password) VALUES ($1, $2, $3, $4, $5)',
      [namaDepan, namaBelakang, email, password, konfirmasiPassword]
    );

    res.status(201).json({ message: 'Pendaftaran pengguna berhasil' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mendaftar pengguna' });
  }
};

module.exports = { signup };
