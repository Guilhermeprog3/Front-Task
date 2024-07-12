import React from 'react';
import Grid from '@mui/material/Grid';
import TaskCard from '../componentes/card';
import FloatingActionButtons from '../componentes/click';

function Home() {
  const tasks = [
    { id: 1, title: 'Tarefa 1' },
    { id: 2, title: 'Tarefa 2' },
    { id: 3, title: 'Tarefa 3' },
    { id: 4, title: 'Tarefa 4' },
    { id: 5, title: 'Tarefa 5' },
    { id: 6, title: 'Tarefa 6' },
    { id: 1, title: 'Tarefa 1' },
    { id: 2, title: 'Tarefa 2' },
    { id: 3, title: 'Tarefa 3' },
    { id: 4, title: 'Tarefa 4' },
    { id: 5, title: 'Tarefa 5' },
    { id: 6, title: 'Tarefa 6' },
    { id: 1, title: 'Tarefa 1' },
    { id: 2, title: 'Tarefa 2' },
    { id: 3, title: 'Tarefa 3' },
    { id: 4, title: 'Tarefa 4' },
    { id: 5, title: 'Tarefa 5' },
    { id: 6, title: 'Tarefa 6' },
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #0D47A1 0%, #000000 100%)', minHeight: '100vh', padding: '2rem' }}>
      <Grid container spacing={0}>
        {tasks.map((task) => (
          <Grid item key={task.id} xs={2} sm={2} md={7}>
            <TaskCard title={task.title} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <FloatingActionButtons />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
