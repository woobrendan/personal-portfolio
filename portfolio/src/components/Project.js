import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
 
 function Project(props) {
   return (
    <div className="project-container">
       <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={props.gif}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<GitHubIcon />}>
            Delete
          </Button>
        </Stack>
        </CardActions>
      </Card>
    </div>
   )
 }
 
 export default Project
 