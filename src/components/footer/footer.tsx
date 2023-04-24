import './footer.scss'
import TGLogo from '../../images/TGLogo.png'
import LNLogo from '../../images/LNLogo.png'
import GitHubLogo from '../../images/GitHubLogo.png'

function Footer() {

    return (
        <footer className='footer'>
            <div className='footer__row'></div>
            <div className='footer_links-container'>
                <div className='footer__credentials'>
                    <p className='footer__text'>igor_drogaitsev@inbox.ru</p>
                    <p className='footer__text'>+7 977 971 47 06</p>
                </div>
                <div className='footer__contacts'>
                    <div className='footer__link-container'>
                        <a href="https://telegram.me/g_drag" target='blanc'><img className='footer__logo' src={TGLogo} alt="TG logo" /></a>
                        <p className='footer__link'>@g_drag</p>
                    </div>
                    <div className='footer__link-container'>
                        <a href="" target='blanc'><img className='footer__logo' src={LNLogo} alt="LN logo" /></a>
                        <p className='footer__text'>/relLink</p>
                    </div>
                    <div className='footer__link-container'>
                        <a href="https://github.com/MisterDROG" target='blanc'><img className='footer__logo' src={GitHubLogo} alt="GitHub logo" /></a>
                        <p className='footer__text'>MrDROG</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer