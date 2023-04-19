import Project from '../project/projects'
import './projectsHolder.scss'

function projectsHolder() {

    return (
        <section className='projects-holder'>
            <p className='projects-holder__title'>PROJECTS</p>
            <Project />
            <Project />
            <Project />
            <Project />
        </section>
    )
}

export default projectsHolder