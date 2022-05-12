import {projects} from './projectInfo'
import Project from './Project'

function ProjectList() {
  const mappedProjects = projects.map(project => (
    <Project project={project} />
  ))
  return (
    <div>
      {mappedProjects}
    </div>
  )
}

export default ProjectList

