import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardProduct() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="spiderman-comic 00 de vuelta a las bases"
        image="https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/42009/9786075688152.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          The Amazing Spiderman 00 De vuelta a las bases by Nick Spencer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Un reboot de nuestro amistoso y vecino spider-man, en donde se encontrará con nuevos villanos. Con el amor de su vida, Mart Jane y con viejos amigos.
          Escrito por Nick Spencer
        </Typography>
        <Typography variant='h5'>
            $ 3500
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Añadir al Carrito</Button>
        <Button size="small">Ver Producto</Button>
      </CardActions>
    </Card>
  );
}