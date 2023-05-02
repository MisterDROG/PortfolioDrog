import './project.scss'
import mocMobile from '../../images/mocMobile.png'
import { projectType } from '../../utils/generalTypes'

interface projectProps {
    project: projectType
}

function Project(props: projectProps) {

    return (
        <div className='project'>
            <p className='project__title'>{props.project.name}</p>

            <div className='project__block-container'>
                <div className='project__img-container'>
                    <img className='project__desktop-img' src={props.project.desktopImg} alt="desktop screenshot" />
                </div>
                <div className='project__text-container'>
                    <p className='project_subtitle'>ABOUT</p>
                    <p className='project__text'><span className='project__span'>The main project goal: </span>{props.project.about}</p>
                    <ul className='project__ul-text'>
                        {props.project.aboutPoints.map(point => {
                            return <li className='project__text'>{point}</li>
                        })}
                    </ul>
                    <a className='project__link' target='blanc' href={props.project.webpageLink}>Open site</a>
                </div>
            </div>

            <div className='project__block-container'>
                <div className='project__img-container'>
                    <img className='project__mobile-img' style={{ backgroundImage: `url(${props.project.mobileImg})` }} src={mocMobile} alt="mobile screenshot" />
                </div>
                <div className='project__text-container'>
                    <p className='project_subtitle'>TECHNOLOGIES</p>
                    <p className='project__text'><span className='project__span'>The main technical goal: </span>{props.project.techologies}</p>
                    <ul className='project__ul-text'>
                        {props.project.technologiesPoints.map(point => {
                            return <li className='project__text'>{point}</li>
                        })}
                    </ul>
                    <a className='project__link' target='blanc' href={props.project.githubLink}>Open GitHub</a>
                </div>
            </div>
        </div >
    )
}

export default Project