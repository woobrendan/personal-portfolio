import { Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import autograph from '../images/Laguna-Autograph.jpg'
import irb from '../images/IRB.jpeg'
import tbj from '../images/TBJ.jpeg';
import sro from '../images/sro.jpeg'
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
          image={irb}
          alt="Immigration Refugee Board of Canada"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Immigration Refugee Board of Canada
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Assistant to Coordinating Member
          </Typography>
          <div className="work-info">
            <p>Location: Toronto, ON</p>
            <p>Sept 2021 - Dec 2021</p>
          </div>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Card >
        <CardMedia
          component="img"
          height="140"
          image={sro}
          alt="SRO Motorsports Group"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            SRO Motorsports America
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Team Relations Coodinator
          </Typography>
          <div className="work-info">
            <p>Location: Various, USA</p>
            <p>May 2014 - Sept 2021</p>
          </div>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <CardMedia
          component="img"
          height="140"
          image={autograph}
          alt="Laguna Seca Autograph Session"
        />
        </CardContent>
      </Card>
      <Card >
        <CardMedia
          component="img"
          height="140"
          image={tbj}
          alt="Toronto Blue Jays"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Toronto Blue Jays
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Warehouse Assistant
          </Typography>
          <div className="work-info">
            <p>Location: Toronto, ON</p>
            <p>Feb 2018 - Nov 2018</p>
          </div>
          <ul className="job-description-list">
            <li><span>Coordinated the movement of product, receiving the product and its distribution to various vendor locations throughout the stadium and stores</span>
            </li>
            <li><span>Maintained and managed multiple warehouses to ensure cleanliness and inventory accuracy</span></li>
            <li><span>Re-organized warehouses to a new organizational style leading to better work efficiency</span></li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}