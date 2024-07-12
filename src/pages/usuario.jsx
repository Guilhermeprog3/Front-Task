import React, { useState } from "react";
import SizeAvatars from "../componentes/avatar/avatar";
import BasicButtons from "../componentes/button/button";
<<<<<<< HEAD
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
=======
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
>>>>>>> 515066e2cfb461a179f89a158ef6ced16e8042a7

function Usuario() {
  const [showPassword, setShowPassword] = useState(false);
  const password = "teste123"; // Senha a ser exibida

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
<<<<<<< HEAD
    <div
      style={{
        background: "linear-gradient(135deg, #0D47A1 0%, #000000 100%)",
        minHeight: "100vh",
        padding: "2rem",
        display: "grid",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <SizeAvatars />
      <div style={{ fontFamily: "sans-serif", fontSize: 15, color: "white" }}>
=======
    <div style={{ background: 'linear-gradient(135deg, #0D47A1 0%, #000000 100%)', minHeight: '100vh', padding: '2rem', display: 'grid', justifyContent: 'center', textAlign: 'center'}}>
      <SizeAvatars/>
      <div style={{ fontFamily: 'sans-serif', fontSize: 15, color: 'white' }}>
>>>>>>> 515066e2cfb461a179f89a158ef6ced16e8042a7
        <p>Nome do Usuário</p>
        <p>kjahdj@gmail.com</p>
        <p>Senha: {showPassword ? password : "•••••••••"}</p>
        {showPassword ? (
<<<<<<< HEAD
          <VisibilityOffIcon
            onClick={togglePasswordVisibility}
            style={{ cursor: "pointer", color: "white" }}
          />
        ) : (
          <VisibilityIcon
            onClick={togglePasswordVisibility}
            style={{ cursor: "pointer", color: "white" }}
          />
        )}
        <BasicButtons />
=======
          <VisibilityOffIcon onClick={togglePasswordVisibility} style={{ cursor: 'pointer', color: 'white' }} />
        ) : (
          <VisibilityIcon onClick={togglePasswordVisibility} style={{ cursor: 'pointer', color: 'white' }} />
        )}
        <BasicButtons/>
>>>>>>> 515066e2cfb461a179f89a158ef6ced16e8042a7
      </div>
    </div>
  );
}

export default Usuario;
