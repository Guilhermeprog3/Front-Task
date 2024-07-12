import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const card = (navigate) => (
  <React.Fragment>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', marginTop: 25,}}>
      <Typography
        component="div"
        sx={{
          left: '51px',
          gap: '15px',
          fontSize: 40,
          color: 'blue',
        }}
        gutterBottom
      >
        <h1>404 Not Found</h1>
      </Typography>
      <Typography
        component="div"
        sx={{
          fontSize: 12,
          color: 'blue',
          marginTop: -7,
        }}
        gutterBottom
      >
        <p>Pagina não encontrada. Você pode ir para a página inicial.</p>
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
      <Button
        size="small"
        sx={{
          height: '40px',
          color: 'white',
          fontSize: 10,
          backgroundColor: 'blue',
          '&:hover': {
                      backgroundColor: '#EFF2F4',
                      color: 'blue',
                    },
        }}
        onClick={() => navigate('/')}
      >
        <Box sx={{ paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2 }}>
          <p style={{ textTransform: 'none' }}>Voltar à página inicial</p>
        </Box>
      </Button>
    </CardActions>
  </React.Fragment>
);


export default function OutlinedCard() {
  const navigate = useNavigate();

  return (

    <Box sx={{ maxWidth: 1440,marginLeft:'12rem'}}>
      <Card variant="none" sx={{ }}>
        {card(navigate)}
      </Card>
    </Box>
  );
}