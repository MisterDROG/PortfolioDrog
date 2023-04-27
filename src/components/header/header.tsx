import './header.scss'
import logo from '../../images/ProtfolioDrog.png'
import menuButton from '../../images/hamburgerIcon.png'
import { useResize } from '../../utils/customHooks/useResize';
import { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll'



function Header() {

    const width = useResize()
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    function menuHandler() {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className='header'>
            <div className='header__logo'>
                <img className='header__logo__image' src={logo} alt='logo' />
                <p className='header__logo__moto'>Portfolio.</p>
            </div>
            {(width > 720)
                ? <nav className='header__menu__desktop'>
                    <LinkScroll className='header__menu__link' to='lead' spy={true} smooth={true} offset={-70} duration={500}>ABOUT ME</LinkScroll>
                    <LinkScroll className='header__menu__link' to='projects' spy={true} smooth={true} offset={-70} duration={500}>PROJECTS</LinkScroll>
                    <LinkScroll className='header__menu__link' to='contacts' spy={true} smooth={true} offset={-70} duration={500}>CONTACTS</LinkScroll>
                </nav>
                : <nav className='header__menu__mobile'>
                    <img className='header__menu__button' src={menuButton} alt='menuButton' onClick={menuHandler} />
                    <div className={menuOpen ? 'header__menu__bar active' : 'header__menu__bar'} onClick={menuHandler}>
                        <LinkScroll className='header__menu__link' to='lead' spy={true} smooth={true} offset={-70} duration={500} onClick={menuHandler}>ABOUT ME</LinkScroll>
                        <LinkScroll className='header__menu__link' to='projects' spy={true} smooth={true} offset={-70} duration={500} onClick={menuHandler}>PROJECTS</LinkScroll>
                        <LinkScroll className='header__menu__link' to='contacts' spy={true} smooth={true} offset={-70} duration={500} onClick={menuHandler}>CONTACTS</LinkScroll>
                    </div>
                    <div className={menuOpen ? 'header__menu__blur active' : 'header__menu__blur'} onClick={menuHandler}></div>
                </nav>
            }
        </header>
    )
}

export default Header