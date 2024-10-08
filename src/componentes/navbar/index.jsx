import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import taskAppIcon from './Task-App2.png';

const pages = [
  { name: 'CONTA', path: '/usuario' }
];

const settings = ['Cadastro', 'Login', 'Sair'];

function ResponsiveAppBar({ avatar }) {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { signOut } = useContext(AuthContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleCadastro = () => {
    navigate('/criar');
  };

  const handleSair = () => {
    signOut();
    navigate('/login');
  };

  const handleConta = () => {
    navigate('/usuario');
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton onClick={handleHome} sx={{ p: 0, display: 'flex', alignItems: 'center' }}>
            <img 
              src={taskAppIcon} 
              alt="TaskApp Icon" 
              style={{ 
                width: 60, 
                height: 60, 
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))',
                transition: 'filter 0.3s ease-in-out'
              }} 
              onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.8))'}
              onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))'}
            />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography component={Link} to={page.path} textAlign="center" sx={{ textDecoration: 'none', color: 'inherit' }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src={avatar} />
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
                <MenuItem
                  key={setting}
                  onClick={() => {
                    handleCloseUserMenu();
                    if (setting === 'Login') {
                      handleLogin();
                    } else if (setting === 'Cadastro') {
                      handleCadastro();
                    } else if (setting === 'Sair') {
                      handleSair();
                    } else if (setting === 'Conta') {
                      handleConta();
                    }
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
