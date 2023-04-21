import './project.scss'
import mocMobile from '../../images/mocMobile1.png'
import { projectType } from '../../utils/generalTypes'

interface projectProps {
    project: projectType
}

function Project(props: projectProps) {

    return (
        <div className='project'>
            <p className='project__title'>{props.project.name}</p>
            <div className='project__desktop'>
                <img className='project__desktop__img' src={props.project.desktopImg} alt="desktop screenshot" />
                <div className='project__desktop__text-container'>
                    <p className='project_subtitle'>ABOUT</p>
                    <p className='project__text'><span className='project__span'>The main goal of the project: </span>{props.project.about}</p>
                    <ul className='project__ul-text'>
                        {props.project.aboutPoints.map(point => {
                            return <li className='project__text'>{point}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className='project__mobile'>
                <div className='project__mobile__text-container'>
                    <p className='project_subtitle'>TECHNOLOGIES</p>
                    <p className='project__text'><span className='project__span'>The main technical goal: </span>{props.project.techologies}</p>
                    <ul className='project__ul-text'>
                        {props.project.technologiesPoints.map(point => {
                            return <li className='project__text'>{point}</li>
                        })}
                    </ul>
                    <a className='project__link' href={props.project.githubLink}>GitHub</a>
                    <a className='project__link' href={props.project.webpageLink}>Open site</a>
                </div>
                <img className='project__mobile__img' style={{ backgroundImage: `url(${props.project.mobileImg})` }} src={mocMobile} alt="mobile screenshot" />
            </div>
        </div>
    )
}

export default Project