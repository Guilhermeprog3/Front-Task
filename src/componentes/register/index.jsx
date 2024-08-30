import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useMessage } from '../contexts';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from "axios";
import { format } from 'date-fns';

export default function SimplePaper() {
  const navigate = useNavigate();
  const { setMessage } = useMessage();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = React.useState(false); // Adicionando estado de loading

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Definindo loading como true antes da requisição

    const data = new FormData(event.currentTarget);
    const taskName = data.get('taskName');
    const endDate = data.get('endDate');
    const description = data.get('description');

    const formattedDate = format(new Date(endDate), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    const dataJson = {
      title: taskName,
      description: description,
      dueDate: formattedDate,
      userId: user
    };

    const url = `https://deploy-task-api.onrender.com/tarefa/create`;
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
      },
    };
      
    try {
      const response = await axios.post(url, dataJson, config);
      setMessage('A tarefa foi cadastrada com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    } finally {
      setLoading(false); // Definindo loading como false após a requisição
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          m: 1,
          width: 300,
          padding: 2,
          background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
          color: 'white',
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            name="taskName"
            label="Nome da Tarefa"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
          />
          <TextField
            name="endDate"
            label="Data de Término"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
              style: { color: 'white' },
            }}
            InputProps={{ style: { color: 'white' } }}
          />
          <TextField
            name="description"
            label="Descrição"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: '10rem',
              margin: '1rem auto',
              display: 'block',
              background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
            }}
            disabled={loading} // Desabilitar o botão enquanto carrega
          >
            {loading ? "Carregando..." : "Cadastrar"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
