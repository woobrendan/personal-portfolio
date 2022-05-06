import { SocialIcon } from "react-social-icons"
import '../Styles/icon-list.css'

export default function IconLinks() {
  return(
    <div className="icon-list">
      <SocialIcon url="https://www.linkedin.com/in/woobrendan/" />
      <SocialIcon url="https://github.com/woobrendan" bgColor="#FFFFFF"/>
      <SocialIcon network="mailto" bgColor="#FFFFFF"/>
    </div>
  )
}