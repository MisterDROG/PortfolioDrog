import './contacts.scss'

function Contacts() {

    return (
        <div className='contacts' id='contacts'>
            <p className='contacts__title'>CONTACTS</p>
            <p className='contacts__text'>If you are interersted to work with me, check my CV </p>
            <a className='contacts__link' target='_blank' href='https://docs.google.com/document/d/1UYblusSnsxVt1N9fNQoG0SedMsMpz7tlZarAhW37rt4/edit?usp=sharing'>Download CV</a>
            <p className='contacts__text'>Or contact by any link below ↓</p>
        </div>
    )
}

export default Contacts