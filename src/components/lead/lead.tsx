import './lead.scss'
import myPhoto from '../../images/MyPhoto.png'

function Lead() {

    return (
        <section className='lead' id='lead'>
            <div className='lead__info'>
                <p className='lead__info__text lead__text_size_middle'>Hello, It's Me</p>
                <p className='lead__info__text lead__text_size_big'>IGOR DROGAITSEV</p>
                <p className='lead__info__text lead__text_size_middle'>And I am Frontend Developer</p>
                <p className='lead__info__text lead__text_size_min'>5 years I work with interfaces and data visualization and 2 years I develop in Front-end.</p>
                <p className='lead__info__text lead__text_size_min'>Most of all I appreciate WIN-WIN cooperation. From my side, I try to constantly learn in order to be useful for the company. In projects I'm looking for the opportunity to challenge and develop my skills.</p>
                <p className='lead__info__text lead__text_size_min'>This portfolio helps me showcase my values and leave contacts to connect with me. Welcome!</p>
                <div className='lead__info__link-container'>
                    <a className='lead__info__link' href=''>Download CV</a>
                    <a className='lead__info__link' href=''>Contacts</a>
                </div>
            </div>
            <div className='lead__img-container'>
                <img className='lead__img-container__photo' src={myPhoto} alt='photo' />
            </div>
        </section>
    )
}

export default Lead