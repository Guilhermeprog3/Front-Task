import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useMessage } from '../contexts';
import { AuthContext } from '../../context/authContext';
import axios from "axios";
import { format } from 'date-fns';

export default function SimplePaper() {
  const navigate = useNavigate();
  const { setMessage } = useMessage();
  const location = useLocation();
  const { user } = React.useContext(AuthContext);
  const { id, title, descriptions, dueDates } = location.state || {};

  const [taskName, setTaskName] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    if (location.state) {
      setTaskName(title || '');
      const formattedDate = format(new Date(dueDates), 'yyyy-MM-dd'); 
      setEndDate(formattedDate || '');
      setDescription(descriptions || '');
    }
  }, [location.state, title, dueDates, descriptions]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'taskName':
        setTaskName(value);
        break;
      case 'endDate':
        setEndDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const formattedDate = format(endDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    const dataJson = {
      title: taskName,
      dueDate: formattedDate,
      description: description,
      userId: user
    };

    const url = `https://deploy-task-api.onrender.com/tarefa/${id}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
      },
    };

    try {
      const response = await axios.put(url, dataJson, config);
      setMessage('Tarefa atualizada com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao atualizar a tarefa:', error);
      setMessage('Erro ao atualizar a tarefa');
    }
  };

  const handleCancel = () => {
    navigate('/'); 
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
            InputProps={{ 
              style: { color: 'white' },
            }}
            value={taskName}
            onChange={handleChange}
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
              style: { color: 'white' }
            }}
            InputProps={{ 
              style: { color: 'white' },
            }}
            value={endDate}
            onChange={handleChange}
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
            InputProps={{ 
              style: { color: 'white' },
            }}
            value={description}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="secondary" sx={{ width: '10rem', margin: '1rem auto', display: 'block', background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)'}}>
            Salvar Alteração
          </Button>
          <Button onClick={handleCancel} variant="contained" color="secondary" sx={{ width: '10rem', margin: '1rem auto', display: 'block', background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)'}}>
            Voltar
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
