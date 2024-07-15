import React, { useState, useContext, useEffect } from "react";
import SizeAvatars from "../componentes/avatar/avatar";
import BasicButtons from "../componentes/button/button";
import { AuthContext } from ".././context/authContext";
import axios from 'axios';

function Usuario() {
  const [editingImage, setEditingImage] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const { user } = useContext(AuthContext);
  const [userDados, setUserDados] = useState([]);


  const toggleImageEditing = () => {
    setEditingImage(!editingImage);
    if (!editingImage) {
      setNewImageUrl(""); 
    }
  };

  const handleImageUrlChange = (event) => {
    setNewImageUrl(event.target.value);
  };

  const saveNewImage = async () => {
    console.log("Nova imagem salva:", newImageUrl);
    
    const dataJson = {
      avatar: newImageUrl
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
        console.log("Resposta:", response.data);
        setUserDados(response.data); 
      } catch (error) {
        console.error("Erro:", error);
        console.error('Erro ao buscar avatar:', error);
      }

    toggleImageEditing(); 
  };

    
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://deploy-task-api.onrender.com/usuario/${user}`, {
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
      <button onClick={toggleImageEditing} style={{ border: "none", background: "none", cursor: "pointer", position: "relative" }}>
        <SizeAvatars avatar={userDados.avatar}/>
      </button>

      {editingImage && (
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "1rem",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
            minWidth: "200px",
            maxWidth: "80%",
            background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
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
              border: "none",
              borderRadius: "20px",
              color: "white",
              background: "transparent",
              outline: "none",
            }}
          />
          <button onClick={saveNewImage} style={{ marginTop: "0.5rem", padding: "0.5rem", fontSize: "14px", cursor: "pointer", color: "white", background: "rgba(255, 255, 255, 0.5)", border: "none", borderRadius: "20px" }}>
            Salvar
          </button>
        </div>
      )}

      <div style={{ display: 'grid', justifyContent: 'center', fontFamily: "sans-serif", fontSize: 15, color: "white" }}>
        <div>
          <p>{userDados.username}</p>
          <p>{userDados.email}</p>
          <BasicButtons />
        </div>
      </div>
    </div>
  );
}

export default Usuario;
