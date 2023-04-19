import './project.scss'
import TodolloDesk from '../../images/TodolloDesk.jpeg'
import TodolloMob from '../../images/TodolloMob.jpg'

function Project() {

    return (
        <div className='project'>
            <p className='project__title'>ToDollo</p>
            <div className='project__desktop'>
                <img className='project__desktop__img' src={TodolloDesk} alt="desktop screenshot" />
                <p className='project__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto animi neque quis veniam excepturi voluptatum quae! Iure vero tenetur nemo. Error dignissimos, laboriosam quos vero accusamus dolorum et aut!</p>
            </div>
            <div className='project__mobile'>
                <p className='project__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto animi neque quis veniam excepturi voluptatum quae! Iure vero tenetur nemo. Error dignissimos, laboriosam quos vero accusamus dolorum et aut!</p>
                <img className='project__mobile__img' src={TodolloMob} alt="mobile screenshot" />
            </div>
        </div>
    )
}

export default Project