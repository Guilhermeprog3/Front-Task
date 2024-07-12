import SizeAvatars from "../componentes/avatar/avatar";
import BasicButtons from "../componentes/button/button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

function usuario() {
    return (
  
      <div style={{ background: 'linear-gradient(135deg, #0D47A1 0%, #000000 100%)', minHeight: '100vh', padding: '2rem', display: 'grid', justifyContent: 'center', textAlign: 'center'}}>
            <SizeAvatars/>
            <div style={{fontFamily: 'sans-serif', fontSize: 15, color: 'white'}}>
                <p>Nome do Usuario</p>
                <p>kjahdj@gmail.com</p>
                <p>Senha: *********</p>
                <VisibilityIcon/>
                <BasicButtons/>
            </div>
      </div>
  
    );
  }
  
  export default usuario;