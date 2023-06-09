import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import landgallery from '../../assest/landgallery.png';


const LandGallerypage = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={landgallery}
        title="ground"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ground
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Surat, Gujarat, India.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
      </CardActions>
    </Card>
    )
}

export default LandGallerypage;


