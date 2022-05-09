import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../Styles/about.scss'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';




export default function AboutMe() {
  return (
    <div className="About-container">
      <div className="About-cards">
        <Typography variant="h3" gutterBottom component="div">
          About Me
        </Typography>
        <div className="Card-list">
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <SchoolIcon />
              <Typography gutterBottom variant="h4" component="div">
                Education
              </Typography>
              <ul>
                <li className="school">Lighthouse Labs</li>
                  <ul>
                    <li>Full Stack Web Development</li>
                  </ul>
                  <br></br>
                <li className="school">Brock University</li>
                  <ul>
                    <li>Sport Management</li>
                  </ul>
              </ul>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <WorkIcon />
              <Typography gutterBottom variant="h4" component="div">
                Working Experience
              </Typography>
              <Typography variant="body2" color="text.secondary">
                7+ Years in Professional Sports
              </Typography>
              <ul>
                <li>SRO Motorsports America</li>
                <li>Toronto Blue Jays</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}