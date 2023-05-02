import './stackHolder.scss'
import HTML5Logo from '../../images/techsLogos/HTML5Logo.png'
import CSSLogo from '../../images/techsLogos/CSSLogo.png'
import SASSLogo from '../../images/techsLogos/SASSLogo.png'
import TSLogo from '../../images/techsLogos/TypescriptLogo.png'
import ReactLogo from '../../images/techsLogos/ReactLogo.png'
import ReactRouterLogo from '../../images/techsLogos/RRouterLogo.png'
import ReduxLogo from '../../images/techsLogos/ReduxLogo.png'
import WebpackLogo from '../../images/techsLogos/WebpackLogo.png'
import NodeJSLogo from '../../images/techsLogos/NodeJSLogo.png'
import BootstrapLogo from '../../images/techsLogos/BootstrapLogo.png'

function StackHolder() {

    return (
        <section className='stack-holder'>
            <p className='stack-holder__title'>STACK</p>
            <div className='stack-holder__tech-holder'>
                <img className='stack-holder__tech-holder__img' src={HTML5Logo} alt="HTML5 logo" />
                <img className='stack-holder__tech-holder__img' src={CSSLogo} alt="CSS logo" />
                <img className='stack-holder__tech-holder__img' src={SASSLogo} alt="SASS logo" />
                <img className='stack-holder__tech-holder__img' src={TSLogo} alt="TS logo" />
                <img className='stack-holder__tech-holder__img' src={ReactLogo} alt="React logo" />
                <img className='stack-holder__tech-holder__img' src={ReactRouterLogo} alt="ReactRouter logo" />
                <img className='stack-holder__tech-holder__img' src={ReduxLogo} alt="Redux logo" />
                <img className='stack-holder__tech-holder__img' src={BootstrapLogo} alt="Bootstrap logo" />
                <img className='stack-holder__tech-holder__img' src={NodeJSLogo} alt="NodeJS logo" />
                <img className='stack-holder__tech-holder__img' src={WebpackLogo} alt="Webpack logo" />
            </div>
        </section>
    )
}

export default StackHolder