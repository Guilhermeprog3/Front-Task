import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMessage } from '../contexts';
import { format, parseISO, isBefore } from 'date-fns';


export default function TaskCard({id, title, descriptions, dueDates, status}) {
  const [completed, setCompleted] = React.useState(status);
  const { message, setMessage } = useMessage();
  const navigate = useNavigate(); 

  const handleCompleteClick = async () => {
    const url = `https://deploy-task-api.onrender.com/tarefa/status/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
      },
    };
    const dataJson = {};
    try {
      const response = await axios.put(url, dataJson, config);
      console.log(response);
      setCompleted(response.data.status);
      setMessage('Tarefa marcada como concluída');
    } catch (error) {
      console.error('Erro ao atualizar a tarefa:', error);
    }

  };

  const handleDeleteClick = async () => {
    const url = `https://deploy-task-api.onrender.com/tarefa/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
      },
    };
    try {
      const response = await axios.delete(url, config);
      console.log('Resposta da exclusão:', response.data);
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
    }
    setMessage('Tarefa excluída');
  };

  const handleMoreInfoClick = () => {
    navigate(`/detalhes`, { state: { id: id, title: title, descriptions: descriptions, dueDates: dueDates } });
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
          {title}
        </Typography>
        <Button
          variant="outlined"
          onClick={handleCompleteClick}
          sx={{
            background: 'COMPLETA'
              ? 'red'
              : completed === 'COMPLETA'
              ? 'linear-gradient(135deg, #4caf50 0%, #2196f3 100%)'
              : 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
            color: 'white',
            marginLeft: 'auto',
          }}
        >
          {completed === 'COMPLETA' ? 'Completa' : 'Incompleta' }
        </Button>
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
