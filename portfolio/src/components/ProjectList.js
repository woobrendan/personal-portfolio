import {projects} from './projectInfo'
import Project from './Project'

function ProjectList() {
  const mappedProjects = projects.map((project, index) => (
    <Project project={project} key={index}/>
  ))
  return (
    <div className="project-list">
      {mappedProjects}
    </div>
  )
}

export default ProjectList

