import './footer.scss'

function Footer() {

    return (
        <footer className='footer'>
            <div className='footer__credentials'>
                <p className='footer__text'>Mail: igor_drogaitsev@inbox.ru</p>
                <p className='footer__text'>Tel: +7 977 971 47 06</p>
                <p className='footer__text'>CV: link</p>
            </div>
            <div className='footer__contacts'>
                <p className='footer__text'>Telegram</p>
                <p className='footer__text'>LIn</p>
                <p className='footer__text'>GitHub</p>
            </div>
        </footer>
    )
}

export default Footer