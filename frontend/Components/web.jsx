// Import spesifik dari pustaka React
import * as React from 'react';
import './web.css';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {
  Baju,
  Celana,
  Contact,
  Facebook,
  Pembayaran,
  Baju3,
  Celana3,
  Hoodie3,
  Jaket3,
  Kemeja3,
  BCA,
  BRI,
  Hoodie,
  Instagram,
  Jaket,
  Jaket2,
  Logo,
  Master,
  Logoo,
  Return,
  Kemeja,
  GratisOngkir,
  Twitter,
  Visa,
  Linkedin,
  BNI,
  Mandiri,
  Hoodie2,
  Baju2,
  Celana2,
  Kemeja2,
} from '/src/assets';

// export function yang ada di file web.jsx
export default function Web() {
  // Copyright
  function Copyright(props) {
    return (
      <Typography variant="body2" color="white" align="center" {...props}>
        {'Copyright © '}  
        <Link color="inherit" href="https://www.instagram.com/3frn.official">
          3frn.official
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }

  // Navbar
  // const handleLogout = async () => {
  //   try {
  //     // Lakukan proses logout di sini (misalnya menggunakan Firebase)
  //     const auth = getAuth();
  //     await signOut(auth);
  //     // Navigasikan pengguna ke halaman login
  //     navigate('/backend/SignInSide.jsx'); // Ganti '/login' dengan rute yang sesuai
  //   } catch (error) {
  //     // Tangani kesalahan saat logout
  //     console.error('Error during logout:', error);
  //   }
  // };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Logika logout
    navigate('./SignInSide'); // Navigasi ke halaman login setelah logout
  };

  const pages = ['Jaket', 'Hoodie', 'Baju', 'Celana', 'Kemeja'];
  const settings = ['Profile'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    handleCloseUserMenu(); // Tambahkan ini untuk menutup menu pengguna jika terbuka
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      handleCloseNavMenu();
    }
  };
  
  // Avatar
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  // Set Id, Nama, Harga Dan warna 
  useEffect(() => {
    const wrapper = document.querySelector('.sliderWrapper');
    const menuItems = document.querySelectorAll('.menuItem');

    const products = [
      {
        id: 1,
        nama: 'JAKET VARSITY',
        harga: 'Rp.1.350.000,00',
        desc: 'Jaket Varsity Baru dari Oxford Society terinspirasi oleh Jaket Varsity Liverpool.',
        colors: [
          {
            code: 'putih',
            img: Jaket,
          },
          {
            code: 'Hitam',
            img: Jaket2,
          },
          {
            code: 'Biru',
            img: Jaket3,
          }
        ],
      },
      {
        id: 2,
        nama: 'HOODIE ROUGHNECK',
        harga: 'Rp.1.250.000,00',
        desc: 'H264 SIG COLOR CHALK BLACK HOODIE terbuat dari bahan Cotton fleece yang nyaman dikenakan, ditambah grafis dari sablon Plastisol, sehingga jaket ini sangat cocok untuk aktivitas indoor maupun outdoor.',
        colors: [
          { 
            code: 'Putih',
            img: Hoodie,
          },
          {
            code: 'Hitam,',
            img: Hoodie2,
          },
          {
            code: 'Biru',
            img: Hoodie3,
          }
        ],
      },
      {
        id: 3,
        nama: 'BAJU 3 SECOND',
        harga: 'Rp.350.000,00',
        desc: 'Produk ini sangat cocok untuk bergaya casual. Dipakai saat kuliah, kerja atau santai karena bahannya yang premium, fungsional, dan menambah rasa percaya diri saat memakainya.',
        colors: [
          {
            code: 'Putih',
            img: Baju,
          },
          {
            code: 'Hitam',
            img: Baju2,
          },
          {
            code: 'Biru',
            img: Baju3,
          }
        ],
      },
      {
        id: 4,
        nama: 'CELANA JEANS',
        harga: 'Rp.700.000,00',
        desc: 'produk celana yang menggunakan bahan denim, denim itu sendiri merupakan kain yang terbuat dari bahan alam yaitu kapas atau disebut katun (cotton).',
        colors: [
          {
            code: 'Putih',
            img: Celana,
          },
          {
            code: 'Hitam',
            img: Celana2,
          },
          {
            code: 'Biru',
            img: Celana3,
          }
        ],
      },
      {
        id: 5,
        nama: 'KEMEJA KOTAK',
        harga: 'Rp.500.000,00',
        desc: 'pakaian yang terbuat dari bahan flanel. Untuk bahan flanel sendiri berupa jenis kain yang terbuat dari wol atau campuran wol dan sutra.',
        colors: [
          {
            code: 'Putih',
            img: Kemeja,
          },
          {
            code: 'Hitam',
            img: Kemeja2,
          },
          {
            code: 'Biru',
            img: Kemeja3,
          }
        ],
      },
    ];

    // Product
    let choosenProduct = products[0];

    const currentProductImg = document.querySelector('.productImg');
    const currentProductNama = document.querySelector('.productNama');
    const currentProductHarga = document.querySelector('.productHarga');
    const currentProductDesc = document.querySelector('.productDesc');
    const currentProductColors = document.querySelectorAll('.color');
    const currentProductSizes = document.querySelectorAll('.size');

    menuItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        //mengubah slide saat ini
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //mengubah produk yang dipilih
        choosenProduct = products[index];

        //ubah teks CurrentProduct
        currentProductNama.textContent = choosenProduct.nama;
        currentProductHarga.textContent = '' + choosenProduct.harga;
        currentProductDesc.textContent = choosenProduct.desc;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing warna baru
        currentProductColors.forEach((color, index) => {
          color.style.backgroundColor = choosenProduct.color[index].code;
        });
      });
    });

    //untuk menambahkan event listener pada setiap elemen dengan kelas "color" dalam elemen currentProductColors. 
    currentProductColors.forEach((color, index) => {
      color.addEventListener('click', () => {
        currentProductImg.src = choosenProduct.colors[index].img;
      });
    });

    //untuk menambahkan event listener pada setiap elemen dengan kelas "size" dalam koleksi currentProductSizes.
    currentProductSizes.forEach((size) => {
      size.addEventListener('click', () => {
        currentProductSizes.forEach((size) => {
          size.style.backgroundColor = 'white';
          size.style.color = 'black';
        });
        size.style.backgroundColor = 'black';
        size.style.color = 'white';

      });
    });

    //sebagai potongan kode yang menggunakan JavaScript untuk menangani tindakan klik pada elemen dengan kelas "productButton", "close", dan mengubah tampilan elemen dengan kelas "payment".
    const productButton = document.querySelector('.productButton');
    const payment = document.querySelector('.payment');
    const close = document.querySelector('.close');

    productButton.addEventListener('click', () => {
      payment.style.display = 'flex';
    });

    close.addEventListener('click', () => {
      payment.style.display = 'none';
    });
  }, []);

  return (
    <>
    <AppBar id="AppBar"
    sx={{
      position: 'fixed',
      backgroundColor: '#0a0f0f',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div>
            <img src={Logo} alt="" width={70} height={70} />
          </div>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            3frn-app
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handleNavItemClick(page.toLowerCase())}
              sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {page}
            </Button>
            ))}
            </Menu>
          </Box>
          <Button
            component={Link}
            to=""
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
            Daftar Product
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
            <Button
            key={page}
            onClick={() => handleNavItemClick(page.toLowerCase())} // Mengubah menjadi handleNavItemClick dengan ID yang sesuai
            sx={{ my: 2, color: 'white', display: 'block' }}
            >
           {page}
           </Button>
           ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Pengaturan">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              >
              <Avatar alt="" src="/" />
              </StyledBadge>
            </IconButton>

            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <IconButton color="inherit" onClick={handleLogout}>
              <ExitToAppIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    {/* Slider Product */}
    <Box className="slider">
      <div className="sliderWrapper">
        <div className="sliderItem">
          <img src={Jaket} alt="" className="sliderImg" id="jaket" />
          <div className="sliderBg" />
          <Typography variant="h1" className="sliderTitle"
          sx={{
            fontFamily: 'monospace'
          }}>
            JAKET
            <br /> VARSITY
          </Typography>
          <Typography variant="h2" className="sliderPrice">Rp.1.350.000,00</Typography>
          <Button href="#product" variant="contained" className="buyButton">Beli Sekarang!</Button>
        </div>
        <div className="sliderItem">
          <img src={Hoodie} alt="" className="sliderImg" id="hoodie" />
          <div className="sliderBg" />
          <Typography variant="h1" className="sliderTitle"
          sx={{
            fontFamily: 'monospace'
          }}>
            HOODIE
            <br /> ROUGHNECK
          </Typography>
          <Typography variant="h2" className="sliderPrice">Rp.1.250.000,00</Typography>
          <Button href="#product" variant="contained" className="buyButton">Beli Sekarang!</Button>
        </div>
        <div className="sliderItem">
          <img src={Baju} alt="" className="sliderImg" id="baju" />
          <div className="sliderBg" />
          <Typography variant="h1" className="sliderTitle"
          sx={{
            fontFamily: 'monospace'
          }}>
            BAJU
            <br /> 3 SECOND
          </Typography>
          <Typography variant="h2" className="sliderPrice">Rp.350.000,00</Typography>
          <Button href="#product" variant="contained" className="buyButton">Beli Sekarang!</Button>
        </div>
        <div className="sliderItem">
          <img src={Celana} alt="" className="sliderImg" id="celana" />
          <div className="sliderBg" />
          <Typography variant="h1" className="sliderTitle"
          sx={{
            fontFamily: 'monospace'
          }}>
            CELANA
            <br /> JEANS
          </Typography>
          <Typography variant="h2" className="sliderPrice">Rp.700.000,00</Typography>
          <Button href="#product" variant="contained" className="buyButton">Beli Sekarang!</Button>
        </div>
        <div className="sliderItem">
          <img src={Kemeja} alt="" className="sliderImg" id="kemeja" />
          <div className="sliderBg" />
          <Typography variant="h1" className="sliderTitle"
          sx={{
            fontFamily: 'monospace'
          }}>
            KEMEJA
            <br /> KOTAK
          </Typography>
          <Typography variant="h2" className="sliderPrice">Rp.500.000,00</Typography>
          <Button href="#product" variant="contained" className="buyButton">Beli Sekarang!</Button>
        </div>
      </div>
    </Box>
    {/* Fitur */}
    <Box className="features">
      <Box className="feature">
        <img src={GratisOngkir} alt="" className="featureIcon" />
        <Typography variant="h6" className="featureTitle">GratisOngkir</Typography>
        <Typography variant="body2" className="featureDesc">Setiap Kali Transaksi.</Typography>
      </Box>
      <Box className="feature">
        <img src={Return} alt="" className="featureIcon" />
        <Typography variant="h6" className="featureTitle">Garansi</Typography>
        <Typography variant="body2" className="featureDesc">Bisa melakukan Return apabila barang tidak sesuai selama 30 Hari.</Typography>
      </Box>
      <Box className="feature">
        <img src={Pembayaran} alt="" className="featureIcon" />
        <Typography variant="h6" className="featureTitle">Pembayaran</Typography>
        <Typography variant="body2" className="featureDesc">Kartu debit: Visa, Master, BCA, BRI, BNI, Mandiri dll.</Typography>
      </Box>
      <Box className="feature">
        <img src={Contact} alt="" className="featureIcon" />
        <Typography variant="h6" className="featureTitle">Contact</Typography>
        <Typography variant="body2" className="featureDesc">Telp.021-234-569 3frn.official@gmail.com</Typography>
      </Box>
    </Box>
      {/* Detail Product */}
    <Box 
      sx={{
        height: '120vh',
        background: '#d6d6c2',
        position: 'relative',
        clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)',
      }} 
      id="product">
      <img src={Jaket} alt="" className="productImg" />
      <Box className="productDetails">
        <Typography variant="h4" 
        sx={{
          marginLeft: '150px',
          fontSize: '40px',
          fontWeight: '900',
          marginTop: '-20px',
          color: 'white',
          textShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)'
        }}
        >
          JAKET VARSITY
        </Typography>
        <Typography variant="h5"
        sx={{
          marginLeft: '220px',
          fontWeight: '900',
          textShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)',
          color: '#fff'
        }}
        >
          Rp.350.000,00
        </Typography>
        <Typography variant="body1"
        sx={{
          fontStyle: '24px',
          color: '#000',
          marginLeft: '150px',
        }}
        >
          Jaket Varsity Baru dari Oxford Society terinspirasi oleh Jaket Varsity Liverpool.
        </Typography>
        {/* Set Warna */}
        <Box className="colors"
        sx={{
          marginTop: '20px',
        }}>
          <Box className="color" />
          <Box className="color" />
          <Box className="color" />
        </Box>
        {/* Set Ukuran */}
        <Box className="sizes">
          <Typography variant="body2" 
          sx={{
            padding: '5px 20px',
            border: '1px solid #000',
            marginRight: '8px',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#000'
          }}
          className="size"
          >
            S
          </Typography>
          <Typography variant="body2"
          sx={{
            padding: '5px 20px',
            border: '1px solid #000',
            marginRight: '8px',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#000'
          }}
          className="size"
          >
            M
          </Typography>
          <Typography variant="body2" 
          sx={{
            padding: '5px 20px',
            border: '1px solid #000',
            marginRight: '8px',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#000'
          }}
          className="size"
          >
            L
          </Typography>
          <Typography variant="body2"
          sx={{
            padding: '5px 20px',
            border: '1px solid #000',
            marginRight: '8px',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#000'
          }}
          className="size"
          >
            XL
          </Typography>
          <Typography variant="body2"
          sx={{
            padding: '5px 20px',
            border: '1px solid #000',
            marginRight: '8px',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#000'
          }}
          className="size"
          >
            XXL
          </Typography>
          <Typography variant="body2"
          sx={{
            padding: '5px 20px',
            border: '1px solid #000',
            marginRight: '8px',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#000'
          }}
          className="size"
          >
            XXXL
          </Typography>
        </Box>
        {/* Set Pembayaran, untuk ke halaman payment */}
        <Button href="#payment" 
        variant="contained" 
        sx={{
          float: 'right',
          padding: '10px 20px',
          backgroundColor: 'black',
          color: '#fff',
          fontWeight: '600',
          cursor: 'pointer',
        }}
        className="productButton"
        >
          Melakukan Pembayaran!
        </Button>
        <Box className="productLogo">
          <img src={Logoo} alt="" width={110} height={110} />
        </Box>
      </Box>
      {/* halaman paymentnya */}
      <Box className="payment"
      sx={{
        marginTop: '70px',
        width: '500px',
        height: '600px',
      }}>
        <Typography variant="h5" 
        sx={{
          fontSize: '20px',
          color: '#000',
        }}
        >
          Informasi Data Pembeli
        </Typography>
        <Typography variant="body2" component="label">Nama : </Typography>
        <TextField 
          sx={{
            padding: '10px',
            margin: '10px 0px',
            border: 'none',
            borderBottom: '1px solid #808080',
          }}
          type="text" 
          placeholder="Muhammad Faridz Baihaqi" 
        />
        <Typography variant="body2" component="label">Nomor Handphone</Typography>
        <TextField 
          sx={{
            padding: '10px',
            margin: '10px 0px',
            border: 'none',
            borderBottom: '1px solid #808080',
          }}
           type="text" 
           placeholder="+62 878-1186-4374"
        />
        <Typography variant="body2" component="label">Alamat</Typography>
        <TextField
        sx={{
            padding: '10px',
            margin: '10px 0px',
            border: 'none',
            borderBottom: '1px solid #808080',
          }}
          type="text"
          placeholder="jln.Malaka Baru, Gg Swadaya, Rt/Rw:02/01, 13, 17134, Kel: Bintara, Kec: Bekasi Barat, Jawa Barat, Indonesia"
        />
        {/* Ini buat informasi kartu */}
        <Typography 
        variant="h5"
        >
          Informasi Kartu
        </Typography>
        <Box className="cardIcons">
          <img src={Visa} alt="" width={40} className="cardIcon" />
          <img src={Master} alt="" width={40} className="cardIcon" />
          <img src={BRI} alt="" width={40} className="cardIcon" />
          <img src={BCA} alt="" width={40} className="cardIcon" />
          <img src={BNI} alt="" width={30} height={30} className="cardIcon" />
          <img src={Mandiri} alt="" width={40} height={40} className="cardIcon" />
        </Box>
        <TextField type="password" className="payInput" placeholder="Card Number" />
        <Box 
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        >
          <TextField 
          sx={{
            width: '30%',
            color: 'rgb(163, 163, 163)',
          }}
          type="text" placeholder="mm" className="payInput sm" />
          <TextField type="text" placeholder="yyyy" className="payInput sm" />
          <TextField type="text" placeholder="cvv" className="payInput sm" />
        </Box>
        <Button variant="contained" 
        sx={{
          position: 'absolute',
          height: '40px',
          bottom: '-40',
          width: '100%',
          left: '0',
          top: '590px',
          webkitBoxShadow: '0px 0px 13px 2px rgba(0, 0, 0, 0.3)',
          boxShadow: '0px 0px 13px 2px rgba(0, 0, 0, 0.3)',
          backgroundColor: '#369e62',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
        >
          Order!
        </Button>
        <Typography variant="body1" className="close">X</Typography>
      </Box>
    </Box>
      {/* gallery Produk*/}
      <Grid 
      sx={{
        background: '#000',
        padding: '50px',
        display: 'flex'
      }}container spacing={2}>
        <Grid item xs={12}>
          <Typography 
          sx={{
            color: '#fff',
            marginLeft: '30px',
            textShadow: '3px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
          variant="h4" 
          align="center"
          >
            Selamat Datang Kembali!
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography 
          sx={{
            color: '#fff',
            marginLeft: '30px',
            textShadow: '3px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
          variant="h5"
          >
            Selamat Datang Kembali!
          </Typography>
          <img
            src="https://cdn.shopify.com/s/files/1/1258/3447/products/BlankPoster_2000X2000_GS3850-IDon_tFingCareHoodie-2_1500x.jpg?v=1660084621"
            alt=""
            className="galleryImg"
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//84/MTA-40803012/mavvis_mavvis-t-shirt-kaos-baju-atasan-kasual-pria-vs-377-warna-putih-_full01.jpg"
            alt=""
            className="galleryStyle"
          />
          <Typography variant="h5" className="galleryTitle">Ini adalah Awal yang Baik dari hidup Anda!</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography 
          sx={{
            color: '#fff',
            marginLeft: '30px',
            textShadow: '3px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
          variant="h4" 
          className="galleryTitle"
          >
            Tentukan StyleMu!
          </Typography>
          <img
            src="https://cdn.idntimes.com/content-images/community/2021/04/whatsapp-image-2021-04-08-at-111110-am-9-c58938c3f1fc98d2b521f4aeb3fb6224-a3632b124f784ebe93ae6ed2274526e7.jpeg"
            alt=""
            className="galleryImg"
          />
        </Grid>
      </Grid>

      <Grid 
        sx={{
          display: 'flex',
          background: '#000'
        }}
        container spacing={2}>
        <Grid item xs={4}>
            <img
              src="https://s4.bukalapak.com/bukalapak-kontenz-production/content_attachments/67434/original/merek_varsity_jacket_lokal_3.jpg"
              alt=""
              className="nsImg"
            />
          </Grid>
          <Grid item xs={4}>
            <img src={Logoo} className="logoo" alt="" width={110} height={110} />
            <Typography 
            sx={{
              flex: '1',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textShadow: '5px 4px 4px #000',
              justifyContent: 'center',
              textAlign: 'center',
            }}
            variant="h6"
            >
              Tahun Baru 2023
            </Typography>
            <Typography 
            sx={{
              fontSize: '40px',
              color: '#fff',
              marginLeft: '100px',
              marginTop: '20px',
            }}
            variant="h4" 
            >
              Musim Baru
            </Typography>
            <Typography 
            sx={{
              fontSize: '30px',
              color: '#fff',
              marginTop: '20px',
              marginLeft: '70px',
            }}
            variant="h4"
            >
              Koleksi Barang Baru
            </Typography>
            <a href="AppBar">
              <Button 
              sx={{
                padding: '15px',
                color: '#fff',
                fontWeight: '600',
                cursor: 'pointer',
                top: '30px',
                marginLeft: '50px',
                borderRadius: '10px',
              }}
              variant="contained" >Temukan Style Yang Cocok Untukmu</Button>
            </a>
          </Grid>
          <Grid item xs={4}>
            <img
              src="https://artikelsepatu.com/wp-content/uploads/2023/02/7.-Style-Memakai-Sepatu-Vans-Pria-Saat-Menggunakan-Sepatu-Vans-Old-Skool.webp"
              alt=""
              className="nsImg"
            />
          </Grid>
      </Grid>
      {/* footer */}
      <footer className="footer">
  	    <div className="container">
  	 	    <div className="row">
           <div className="footer-col">
  	 			  <h4>Tentang Perusahaan</h4>
  	 			  <ul>
  	 				  <li><a href="https://www.google.com/maps/place/Gg.+Swadaya,+RT.002%2FRW.001,+Bintara,+Kec.+Bekasi+Bar.,+Kota+Bks,+Jawa+Barat/@-6.2229376,106.9460353,17z/data=!3m1!4b1!4m6!3m5!1s0x2e698c855a9f9803:0x354e10746d9962da!8m2!3d-6.2229429!4d106.9486102!16s%2Fg%2F11b5pj998q?entry=ttu">Alamat Perusahaan</a></li>
              <li><a href="https://bit.ly/3N8IbMG">Contack Perusahaan</a></li>
  	 			  </ul>
  	 		  </div>
  	 		  <div className="footer-col">
  	 			  <h4>Bantuan</h4>
  	 			  <ul>
  	 				  <li><a href="#">FAQ</a></li>
  	 				  <li><a href="#">RETURN</a></li>
  	 				  <li><a href="../form/loginForm.jsx">Login / Buat Akun</a></li>
  	 				  <li><a href="../form/gantiForm.jsx">Ganti Kata Sandi</a></li>
  	 			  </ul>
  	 		  </div>
  	 		  <div className="footer-col">
  	 			  <h4>Daftar Product</h4>
  	 			  <ul>
  	 				  <li><a href="jaket">JAKET VARSITY</a></li>
  	 				  <li><a href="hoodie">HOODIE ROUGHNECK</a></li>
  	 				  <li><a href="baju">BAJU 3SECOND</a></li>
  	 				  <li><a href="celana">CELANA JEANS</a></li>
              <li><a href="kemeja">KEMEJA KOTAK</a></li>
  	 			  </ul>
  	 		  </div>
  	 		  <div className="footer-col">
  	 			  <h4>Social Media</h4>
              <div className="fIcons">
               <a href="https://www.facebook.com/3frn.Official/"><i><img src={Facebook} width={30} height={30} alt="" className="fIcon" /></i></a>
               <a href="https://twitter.com/3frnOfficial/"><i><img src={Twitter} width={25} height={30} alt="" className="fIcon" /></i></a>
               <a href="https://www.instagram.com/3frn.official/"><i><img src={Instagram} width={25} height={30} alt="" className="fIcon" /></i></a>
               <a href="https://www.linkedin.com/in/muhammad-faridz-baihaqii-8a87bb246/"><i><img src={Linkedin} width={30} height={30} alt="" className="fIcon" /></i></a>
              </div>
  	 		  </div>
          <div className="copyright">
            <Copyright sx={{ mt: 5 }} />
          </div> 
          <div className="footerLogo">
          <img src={Logoo} alt="" width={110} height={110} />
          </div>
  	 	    </div>
  	    </div>
      </footer>
  </>
  )
};