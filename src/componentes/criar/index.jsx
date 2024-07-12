<<<<<<< HEAD
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";
=======
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { useState } from 'react';

const [setResponse, sizeResponse] = useState("");
const navigate = useNavigate();
>>>>>>> 515066e2cfb461a179f89a158ef6ced16e8042a7

export default function SignupCard() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
<<<<<<< HEAD
    const email = data.get("email");
    const password = data.get("password");
    const name = data.get("name");

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Name:", name);

    const url = "http://localhost:4000/usuario/create";

    const dataJson = {
      username: name,
      email: email,
      accessName: "Usuario",
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(url, dataJson, config)
      .then((response) => {
        console.log("Resposta:", response.dataJson);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
    navigate("/home");
=======
    const email = data.get('email');
    const password = data.get('password');
    const name = data.get('name');
    // Perform signup logic here if needed
    const url = 'http://localhost:4000/usuario/create';
  
    const dataJson =  {
      "username": name, 
      "email": email,  
      "accessName": 'Usuario',
      "password": password,
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    axios.post(url, dataJson, config)
      .then(response => {
        console.log('Resposta:', response.dataJson);
        setResponse(response.dataJson);
        navigate('/home');
      })
      .catch(error => {
        console.error('Erro:', error);
        setResponse(error);
      });

>>>>>>> 515066e2cfb461a179f89a158ef6ced16e8042a7
  };

  

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 300,
          padding: 3,
          textAlign: "center",
          color: "white",
          background: "linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
          />
          <TextField
            name="password"
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
          />
          <TextField
            name="name"
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
<<<<<<< HEAD
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
=======
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
>>>>>>> 515066e2cfb461a179f89a158ef6ced16e8042a7
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)' }}
          >
            Criar Conta
          </Button>
        </form>
        <Box sx={{ mt: 2 }}>
<<<<<<< HEAD
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ color: "white", borderColor: "white" }}
=======
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                color: 'white',
                borderColor: 'white',
                background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
                },
              }}
>>>>>>> 515066e2cfb461a179f89a158ef6ced16e8042a7
            >
              Voltar para Login
            </Button>
          </Link>
        </Box>
      </Paper>
          <Box>
              <p>{sizeResponse}</p>
          </Box>
    </Box>
  );
}
