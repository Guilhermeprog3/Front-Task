import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useMessage } from "../contexts";

export default function LoginCard() {
  const [loading, setLoading] = React.useState(false);
  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { setMessage } = useMessage();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const dataJson = {
      email: email,
      password: password,
    };

    try {
      await signIn(dataJson);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      setMessage("Login realizado com sucesso!");
      navigate("/");
    }
  }, [user, navigate, setMessage]);

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
        elevation={10}
        sx={{
          width: 320,
          height: 320,
          padding: 3,
          textAlign: "center",
          color: "white",
          background: "linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)",
          position: "relative",
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.2)',
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
            {loading ? "Carregando..." : "Login"}
          </Button>
        </form>
        <Box sx={{ mt: 2 }}>
          <Link to="/criar" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ color: "white", borderColor: "white" }}
            >
              Criar Conta
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: -20,
            left: -20,
            right: -20,
            bottom: -20,
            borderRadius: 2,
            zIndex: -1,
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(0, 255, 255, 0.4), 0 0 60px rgba(0, 255, 255, 0.2)',
          }}
        />
      </Paper>
    </Box>
  );
}