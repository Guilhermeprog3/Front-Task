import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'; 
import { useMessage } from '../contexts';

export default function LoginCard() {
  const navigate = useNavigate();
  const { setMessage } = useMessage();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    console.log('Email:', email);
    console.log('Password:', password);
    
    setMessage('Login realizado com sucesso!');
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 300,
          padding: 3,
          textAlign: 'center',
          color: 'white',
          background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
          />
          <TextField
            name="password"
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
        <Box sx={{ mt: 2 }}>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" fullWidth sx={{ color: 'white', borderColor: 'white' }}>
              Criar Conta
            </Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}
