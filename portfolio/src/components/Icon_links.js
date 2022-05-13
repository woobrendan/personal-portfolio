import '../Styles/icon-list.scss'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PersonIcon from '@mui/icons-material/Person';

library.add(faEnvelope);


export default function IconLinks() {
  return(
    <div className="icon-list">
      <nav>
        <ul>
          <li>
            <a 
              target="_blank" 
              rel="noreferrer"
              href="https://www.linkedin.com/in/woobrendan/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a 
              target="_blank" 
              rel="noreferrer"
              href="https://github.com/woobrendan"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
              <a href="#About-container">
                <PersonIcon fontSize="large"/>
              </a>
          </li>
          <li>
            <a href="#Experience">
              <WorkHistoryIcon fontSize="large"/>
            </a>
          </li>
          <li>
              <a href="#project-list">
                <StickyNote2Icon fontSize="large"/>
              </a>
          </li>
          <li>
            <a href="#Contact">
              <FontAwesomeIcon icon="envelope" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}