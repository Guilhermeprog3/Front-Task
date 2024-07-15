import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

export default function BasicButtons() {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate('/email');
  };

  return (
    <Stack spacing={2} direction="row" style={{ marginTop: 50 }}>
      <Button
        variant="contained"
        style={{
          background: "linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)",
          color: "white",
          marginLeft: "auto",
        }}
        onClick={handleUpdate}
      >
        Atualizar Dados
      </Button>

      <Button
        variant="contained"
        style={{
          background: "linear-gradient(135deg, #ff5722 0%, #ff9800 100%)",
          color: "white",
        }}
      >
        Excluir Conta
      </Button>
    </Stack>
  );
}
