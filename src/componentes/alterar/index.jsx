import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useMessage } from '../contexts'; 

export default function SimplePaper() {
  const navigate = useNavigate();
  const { setMessage } = useMessage();

  const [taskName, setTaskName] = React.useState('ESTUDAR REACT');
  const [endDate, setEndDate] = React.useState('2024-08-20');
  const [description, setDescription] = React.useState('EU TENHO QUE ESTUDAR REACT ATÉ ESSA DATA LIMITE');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const taskName = data.get('taskName');
    const endDate = data.get('endDate');
    const description = data.get('description');
    console.log('Task Name:', taskName);
    console.log('End Date:', endDate);
    console.log('Description:', description);

    setMessage('A task foi alterada com sucesso!');
    navigate('/');
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
            InputProps={{ style: { color: 'white' } }}
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
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
            InputProps={{ style: { color: 'white' } }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ width: '10rem', margin: '1rem auto', display: 'block', background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)'}}>
            Alterar
          </Button>
          <Button onClick={handleCancel} variant="contained" color="secondary" sx={{ width: '10rem', margin: '1rem auto', display: 'block', background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)'}}>
            Cancelar
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
