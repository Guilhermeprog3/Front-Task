import React from 'react';
import Grid from '@mui/material/Grid';
import TaskCard from '../componentes/card';
import FloatingActionButtons from '../componentes/click';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useMessage } from '../componentes/contexts';

function Home() {
  const tasks = [
    { id: 1, title: 'Tarefa 1' },
    { id: 2, title: 'Tarefa 2' },
    { id: 3, title: 'Tarefa 3' },
    { id: 4, title: 'Tarefa 4' },
    { id: 5, title: 'Tarefa 5' },
    { id: 6, title: 'Tarefa 6' },
  ];

  const { message, setMessage } = useMessage();

  const handleCloseSnackbar = () => {
    setMessage('');
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #0D47A1 0%, #000000 100%)', minHeight: '100vh', padding: '2rem' }}>
      <Grid container spacing={0}>
        {tasks.map((task) => (
          <Grid item key={task.id} xs={12} sm={6} md={8}>
            <TaskCard title={task.title} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <FloatingActionButtons />
        </Grid>
      </Grid>
      <Snackbar open={Boolean(message)} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%',backgroundColor: '#0D47A1',color: 'white' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Home;
