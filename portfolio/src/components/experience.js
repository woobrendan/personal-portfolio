import { Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import autograph from '../images/Laguna-Autograph.jpg'
import '../Styles/experience.scss'

export default function Experience () {
  return (
    <div className="experience-container">
      <Typography variant="h3" gutterBottom component="div">
        Work Experience
      </Typography>
      <Card >
      <CardMedia
        component="img"
        height="140"
        image={autograph}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SRO Motorsports America
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}