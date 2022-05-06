
import '../Styles/icon-list.scss'
import {faLinkedin, faGithub, faFortAwesome} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
          <a 
            target="_blank" 
            rel="noreferrer"
            href="#Contact"
          >
            <FontAwesomeIcon icon="envelope" />
          </a>
        </li>
      </ul>
      </nav>
    </div>
  )
}