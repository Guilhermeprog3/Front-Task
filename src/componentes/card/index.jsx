import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

export default function TaskCard() {
  const [completed, setCompleted] = React.useState(false);
  const [dueDate] = React.useState(new Date('2024-08-31'));

  const handleCompleteClick = () => {
    console.log('Tarefa marcada como concluída');
    setCompleted(true);
  };

  const handleDeleteClick = () => {
    console.log('Tarefa excluída');
  };

  const handleModifyClick = () => {
    console.log('Modificar tarefa');
  };

  const handleMoreInfoClick = () => {
    console.log('Mais informações sobre a tarefa');
  };

  const isTaskOverdue = () => {
    return !completed && dueDate < new Date();
  };

  const iconStyle = {
    background: 'linear-gradient(roxo)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <Card style={{ width: '100%', maxWidth: 800, margin: '2rem auto', background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)', color: 'white', marginLeft: '1em', marginTop: '-0.6rem' }}>
      <CardContent style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
          Tarefa
        </Typography>
        <Button
          variant="outlined"
          onClick={handleCompleteClick}
          sx={{
            background: isTaskOverdue()
              ? 'red'
              : completed
              ? 'linear-gradient(135deg, #4caf50 0%, #2196f3 100%)'
              : 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
            color: 'white',
            marginLeft: 'auto',
          }}
        >
          {completed ? 'Finalizada' : isTaskOverdue() ? 'Expirada' : 'Finalizar'}
        </Button>
        <IconButton aria-label="modify" onClick={handleModifyClick}>
          <EditIcon style={iconStyle} />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDeleteClick}>
          <DeleteIcon style={iconStyle} />
        </IconButton>
        <IconButton aria-label="info" onClick={handleMoreInfoClick}>
          <InfoIcon style={iconStyle} />
        </IconButton>
      </CardContent>
    </Card>
  );
}
