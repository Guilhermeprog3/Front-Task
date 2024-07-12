import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

export default function LoginCard() {
  const { signIn, user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    const url = "http://localhost:4000/login";

    const dataJson = {
      email: email,
      password: password,
    };

    try {
      await signIn(dataJson);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      //setLoading(false);

    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    /*React.useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, [user, navigate]);
    */

    axios
      .post(url, dataJson, config)
      .then((response) => {
        console.log("Resposta:", response.dataJson);
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
          width: 320,
          height: 320,
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)' }}
          >
            Login
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
        <p>{sizeResponse}</p>
      </Paper>
    </Box>
  );
}
