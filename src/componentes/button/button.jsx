import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

export default function BasicButtons() {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate('/email');
  };

  const handleDelete = () =>{

  };

  return (
    <Stack spacing={2} direction="row" style={{ marginTop: 50 }}>
      <Button
        variant="contained"
        style={{
          background: "linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)",
          color: "white",
        }}
        onClick={handleUpdate}
      >
        Atualizar Dados
      </Button>
    </Stack>
  );
}
