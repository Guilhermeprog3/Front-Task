import React, { useState, useContext, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TaskCard from '../componentes/card';
import FloatingActionButtons from '../componentes/click';
import { AuthContext } from ".././context/authContext";
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useMessage } from '../componentes/contexts';

function Home() {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/tarefas/${user}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
          }
        });
        setTasks(response.data); 
        console.log(response);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    fetchTasks();
  }, [user]); 
  const { message, setMessage } = useMessage();

  const handleCloseSnackbar = () => {
    setMessage('');
  };


  return (
    <div style={{ background: 'linear-gradient(135deg, #0D47A1 0%, #000000 100%)', minHeight: '100vh', padding: '2rem' }}>
      <Grid container spacing={3}>
        {tasks.map((task) => (
          <Grid item key={task.id} xs={12} sm={6} md={4}>
            <TaskCard title={task.title} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <FloatingActionButtons />
        </Grid>
      </Grid>
      <p>{tasks}</p>
      <Snackbar open={Boolean(message)} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Home;

