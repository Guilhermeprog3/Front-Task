import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMessage } from "../contexts"; // Importe seu contexto de mensagens aqui

export default function SignupCard() {
  const navigate = useNavigate();
  const { setMessage } = useMessage(); // Obtenha a função setMessage do contexto de mensagens

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const name = data.get("name");

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
        console.log("Resposta:", response.data);
        setMessage("Conta criada com sucesso! Faça login para continuar.");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
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
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
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
            Criar Conta
          </Button>
        </form>
        <Box sx={{ mt: 2 }}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ color: "white", borderColor: "white" }}
            >
              Voltar para Login
            </Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}
