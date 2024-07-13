import React, { useState, useContext, useEffect } from "react";
import SizeAvatars from "../componentes/avatar/avatar";
import BasicButtons from "../componentes/button/button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AuthContext } from ".././context/authContext";
import axios from 'axios';

function Usuario() {
  const [showPassword, setShowPassword] = useState(false);
  const [editingImage, setEditingImage] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const password = "teste123"; 
  const { user } = useContext(AuthContext);
  const [userDados, setUserDados] = useState([]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleImageEditing = () => {
    setEditingImage(!editingImage);
    if (!editingImage) {
      setNewImageUrl(""); // Limpar o campo de input ao abrir
    }
  };

  const handleImageUrlChange = (event) => {
    setNewImageUrl(event.target.value);
  };

  const saveNewImage = () => {
    console.log("Nova imagem salva:", newImageUrl);
    
    const dataJson = {
      avatar: newImageUrl,
    };

    axios
      .post(url, dataJson, config)
      .then(async () => {
        const response = await axios.get(`http://localhost:4000/usuario/${user}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
          }
        });
      })
      .catch((error) => {
        console.error("Erro:", error);
      });

    toggleImageEditing(); 
  };

    
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/usuario/${user}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
          }
        });
        console.log(response);
        setUserDados(response.data); 
      } catch (error) {
        console.log(error)
        console.error('Erro ao buscar usuario:', error);
      }
    };

    fetchUser();
  }, [user]); 


  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0D47A1 0%, #000000 100%)",
        minHeight: "100vh",
        padding: "2rem",
        display: "grid",
        justifyContent: "center",
        textAlign: "center",
        position: "relative", 
      }}
    >
      {/* Avatar como botão para alterar a imagem */}
      <button onClick={toggleImageEditing} style={{ border: "none", background: "none", cursor: "pointer", position: "relative" }}>
        <SizeAvatars />
      </button>

      {/* Input para inserir o link da nova imagem */}
      {editingImage && (
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "1rem",
            borderRadius: "20px", // Arredondamento maior
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 1000, // Garante que o input esteja sobre o avatar
            minWidth: "200px", // Ajuste conforme necessário
            maxWidth: "80%", // Ajuste conforme necessário
            background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)', // Gradiente entre azul e roxo
          }}
        >
          <input
            type="text"
            placeholder="Insira o link da nova imagem"
            value={newImageUrl}
            onChange={handleImageUrlChange}
            style={{
              padding: "0.5rem",
              width: "100%",
              fontSize: "14px",
              border: "none", // Removida a borda para um visual mais limpo
              borderRadius: "20px", // Arredondamento maior
              color: "white", // Cor do texto
              background: "transparent", // Fundo transparente
              outline: "none", // Removido o contorno ao focar
            }}
          />
          <button onClick={saveNewImage} style={{ marginTop: "0.5rem", padding: "0.5rem", fontSize: "14px", cursor: "pointer", color: "white", background: "rgba(255, 255, 255, 0.5)", border: "none", borderRadius: "20px" }}>
            Salvar
          </button>
        </div>
      )}

      <div style={{ fontFamily: "sans-serif", fontSize: 15, color: "white", marginTop: "1rem" }}>
        <p>{userDados.name}</p>
        <p>{userDados.email}</p>
        <p>Senha: {showPassword ? password : `${userDados.password}`}</p>
        {showPassword ? (
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
      </div>
    </div>
  );
}

export default Usuario;
