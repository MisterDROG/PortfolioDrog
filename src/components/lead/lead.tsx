import './lead.scss'
import myPhoto from '../../images/MyPhoto.png'
import { Link as LinkScroll } from 'react-scroll'

function Lead() {

    return (
        <section className='lead' id='lead'>
            <div className='lead__info'>
                <p className='lead__info__subtitle'>Hello, It's Me</p>
                <p className='lead__info__title'>IGOR DROGAITSEV</p>
                <p className='lead__info__subtitle'>And I am Frontend Developer</p>
                <p className='lead__info__text'>5 years I work with interfaces and data visualization and 2 years with Front-end.</p>
                <p className='lead__info__text'>Most of all I appreciate WIN-WIN cooperation. From my side, I try to constantly learn to be useful for the company. In projects I'm looking for the opportunity to challenge and develop my skills.</p>
                <p className='lead__info__text'>This portfolio helps me to show my projects and leave contacts. Welcome!</p>
                <div className='lead__info__link-container'>
                    <a className='lead__info__link' target='_blank' href='https://docs.google.com/document/d/1YeKjZl2yOtwuFuFGLMII5-mF98bF1GZ7XcCSACxD6aQ/edit'>Download CV</a>
                    <LinkScroll className='lead__info__link' to='contacts' spy={true} smooth={true} offset={-70} duration={500}>Contacts</LinkScroll>
                </div>
            </div>
            <div className='lead__img-container'>
                <img className='lead__img-container__photo' src={myPhoto} alt='photo' />
            </div>
        </section>
    )
}

export default Lead