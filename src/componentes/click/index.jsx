import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function FloatingActionButtons() {
  const [showAddTaskButton, setShowAddTaskButton] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowAddTaskButton(!showAddTaskButton);
  };

  const handleAddTask = () => {
    console.log('Adicionar Task');
    navigate('/registrar');
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: '16px', right: '60px' }}>
      {showAddTaskButton && (
        <Fab
          color="secondary"
          aria-label="add-task"
          sx={{
            position: 'absolute',
            bottom: '90px',
            right: '0',
            background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
            color: 'white',
            width: 80,
            height: 80,
          }}
          onClick={handleAddTask}
        >
          <AddTaskIcon sx={{ fontSize: 40 }} />
        </Fab>
      )}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClick}
        sx={{
          background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
          color: 'white',
          width: 80,
          height: 80,
        }}
      >
        <AddIcon sx={{ fontSize: 40 }} />
      </Fab>
    </Box>
  );
}
