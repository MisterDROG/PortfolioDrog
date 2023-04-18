import './header.scss'
import logo from '../../images/ProtfolioDrog.png'

function Header() {


    return (
        <header className='header'>
            <div className='header__logo'>
                <img className="header__logo__image" src={logo} alt="logo" />
                <p className='header__logo__moto'>Portfolio.</p>
            </div>
            <div className='header__menu'>
                <a className='header__menu__link'>ABOUT ME</a>
                <a className='header__menu__link'>PROJECTS</a>
                <a className='header__menu__link'>CONTACTS</a>
            </div>
        </header>
    )
}

export default Header