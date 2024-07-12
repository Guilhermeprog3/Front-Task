import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignupCard() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o formulário de registro
    const data = new FormData(event.currentTarget);
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');
    const password = data.get('password');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8', // Cor de fundo da página
      }}
    >
      <Paper
        elevation={3}
        sx={{
          m: 1,
          width: 300,
          padding: 2,
          background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
          color: 'white',
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            name="firstName"
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
          />
          <TextField
            name="lastName"
            label="Sobrenome"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
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
          <Button type="submit" variant="contained" color="primary" sx={{ width: '10rem', margin: '1rem auto', display: 'block' }}>
            Registrar
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
