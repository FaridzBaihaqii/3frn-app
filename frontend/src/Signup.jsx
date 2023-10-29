import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '/src/assets/img/logo.png';

function Signup() {
  function HakCipta() {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center">
        {' © '}
        <Link
          color="inherit"
          href="https://www.instagram.com/3frn.official/">
          3frn.official
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }

  const navigate = useNavigate();

  const [namaDepan, setNamaDepan] = useState('');
  const [namaBelakang, setNamaBelakang] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      namaDepan,
      namaBelakang,
      email,
      password,
      konfirmasiPassword,
    };

    try {
      if (password !== konfirmasiPassword) {
        console.log('Kata sandi tidak sesuai');
        return;
      }

      const response = await axios.post('/api/Signup', formData); // URL endpoint menjadi /api/Signup
      console.log(response.data);
      navigate('/SignInSide'); // Kembali Ke Login
    } catch (error) {
      console.error(error);
    }
  };

  const temaDefault = createTheme();

  return (
    <ThemeProvider theme={temaDefault}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <div className="Logo">
            <img src={Logo} alt="" width={80} height={70} />
          </div>
          <Typography component="h1" variant="h5">
            Daftar Akun
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="namaDepan"
                  required
                  fullWidth
                  id="namaDepan"
                  label="Nama Depan"
                  autoFocus
                  value={namaDepan}
                  onChange={(e) => setNamaDepan(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="namaBelakang"
                  label="Nama Belakang"
                  name="namaBelakang"
                  autoComplete="family-name"
                  value={namaBelakang}
                  onChange={(e) => setNamaBelakang(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="konfirmasiPassword"
                  label="Konfirmasi Password"
                  type="password"
                  id="konfirmasiPassword"
                  autoComplete="new-password"
                  value={konfirmasiPassword}
                  onChange={(e) =>
                    setKonfirmasiPassword(e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                    />
                  }
                  label="Saya ingin menerima pembaruan melalui email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Daftar
            </Button>
            <Grid container sx={{ marginLeft: '100px' }}>
              <Grid item>
                <Link to="/SignInSide" variant="body2">
                  Sudah punya akun? Masuk
                </Link>
              </Grid>
            </Grid>
            <HakCipta sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Signup;
