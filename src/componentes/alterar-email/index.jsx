import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMessage } from "../contexts";
import { useContext } from 'react';
import { AuthContext } from "../../context/authContext";

export default function UpdateAccountCard() {
  const navigate = useNavigate();
  const { setMessage } = useMessage();
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataJson = { 
      username: name,
      password: password,
      avatar: null
    };
    
      const url = `https://deploy-task-api.onrender.com/usuario/${user}`;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
        },
      };

    try {
      const response = await axios.put(url, dataJson, config);
      setMessage('Conta atualizada com sucesso!');
      navigate('/usuario');
    } catch (error) {
      console.error('Erro ao atualizar a conta:', error);
      setMessage('Erro ao atualizar a conta');
    }
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
            name="password"
            label="Nova Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            name="name"
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #9c27b0 0%, #3f51b5 100%)',
              },
            }}
          >
            Atualizar Conta
          </Button>
        </form>
        <Box sx={{ mt: 2 }}>
          <Link to="/usuario" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ color: "white", borderColor: "white" }}
            >
              Voltar para Perfil
            </Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}
