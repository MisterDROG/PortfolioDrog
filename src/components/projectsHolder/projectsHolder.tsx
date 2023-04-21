import { projectType } from '../../utils/generalTypes'
import Project from '../project/project'
import './projectsHolder.scss'

interface projectsHolderProps {
    projects: projectType[]
}

function projectsHolder(props: projectsHolderProps) {

    return (
        <section className='projects-holder' id='projects'>
            <p className='projects-holder__title'>PROJECTS</p>
            {props.projects.map((project) => {
                return <Project key={project.id} project={project} />
            })}
            <p className='projects-holder__subtitle'>You can also see my other projects by visiting my GITHUB</p>
        </section>
    )
}

export default projectsHolder