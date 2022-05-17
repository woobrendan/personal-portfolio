import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { skills } from "./skill_info";

function Skills() {

  const mappedSkills = skills.map((skill, index) => (
    <Card >
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {skill.title}
      </Typography>
      <Typography gutterBottom variant="subtitle1" component="div">
        Assistant to Coordinating Member
      </Typography>
      <div className="work-info">
        <p>Location: Toronto, ON</p>
        <p>Sept 2021 - Dec 2021</p>
      </div>
      <ul className="job-description-list">
        <li><span>
          Worked a casual contract supporting multiple teams and managers with administrative duties such as  facilitation of official documents, taking meeting notes and manage member absence line
        </span></li>
        <li><span>
          Coordinated manager's schedules, ensuring days and meetings are organized
        </span></li>
        <li><span>
          Facilitated member hearing schedules and caseloads, updating HR software as required
        </span></li>
      </ul>
    </CardContent>
  </Card>
  ))
  return (
    <div id="skills-list">
      <Typography variant="h3" gutterBottom component="div">
        Skills
      </Typography>
    </div>
  )
}

export default Skills
