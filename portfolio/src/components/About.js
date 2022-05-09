import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import '../Styles/about.scss'
import SchoolIcon from '@mui/icons-material/School';




export default function AboutMe() {
  return (
    <div className="About-container">
      <Typography variant="h3" gutterBottom component="div">
        About Me
      </Typography>
      <div className="Card-list">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <SchoolIcon />
              <Typography gutterBottom variant="h5" component="div">
                Education
              </Typography>
              <ul>
                <li>Lighthouse Labs</li>
                <li>Brock University</li>
              </ul>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  )
}