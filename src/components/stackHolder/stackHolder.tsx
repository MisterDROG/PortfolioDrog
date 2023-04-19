import './stackHolder.scss'
import HTML5Logo from '../../images/HTML5Logo.png'

function StackHolder() {

    return (
        <section className='stack-holder'>
            <p className='stack-holder__title'>STACK</p>
            <div className='stack-holder__tech-holder'>
                <img className='stack-holder__tech-holder__img' src={HTML5Logo} alt="techology logo" />
                <img className='stack-holder__tech-holder__img' src={HTML5Logo} alt="techology logo" />
                <img className='stack-holder__tech-holder__img' src={HTML5Logo} alt="techology logo" />
                <img className='stack-holder__tech-holder__img' src={HTML5Logo} alt="techology logo" />
                <img className='stack-holder__tech-holder__img' src={HTML5Logo} alt="techology logo" />
                <img className='stack-holder__tech-holder__img' src={HTML5Logo} alt="techology logo" />
                <img className='stack-holder__tech-holder__img' src={HTML5Logo} alt="techology logo" />
                <img className='stack-holder__tech-holder__img' src={HTML5Logo} alt="techology logo" />
            </div>
        </section>
    )
}

export default StackHolder