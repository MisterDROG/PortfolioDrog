import TodolloDesk from '../images/TodolloDesk.jpeg'
import TodolloMob from '../images/TodolloMob.jpg'
import { projectType } from './generalTypes'

export const porjectsDB: projectType[] = [
    {
        name: 'ToDollo',
        id: 1,
        about: 'to take the key function of Trello and make the most convenient application. As a result, were implemented:',
        aboutPoints: [
            'Add/Delete task branches',
            'Add/Delete/Marking completion of the tasks',
            'Drag and drop tasks',
            'Preloaders/Errors for loading the application, adding elements, deleting elements',
            'Adaptability for vertical screens'
        ],
        desktopImg: TodolloDesk,
        techologies: 'to write the most scalable code using the most modern technologies:',
        technologiesPoints: [
            'Typescript + SCSS - for ease of development and code scaling',
            'Redux - for controlling the state of the application locally and synchronize data with the server',
            'RTK Toolkit + Query - for load status control, preloader/error creation, data caching',
            'Preloaders/Errors - for loading the application, adding elements, deleting elements',
            'Firebase - for online data storage'
        ],
        mobileImg: TodolloMob,
        githubLink: '',
        webpageLink: '',
    },
    {
        name: 'ToDollo',
        id: 2,
        about: 'ToDollo is the analog of popular Trello. The main goal of the project: to take the main function of the prototype and make the most convenient application. As a result, functions were implemented:',
        aboutPoints: [
            'Add/Delete task branches',
            'Add/Delete/Marking completion of the tasks',
            'Drag and drop tasks',
            'Preloaders/Errors for loading the application, adding elements, deleting elements',
            'Adaptability for vertical screens'
        ],
        desktopImg: TodolloDesk,
        techologies: 'The main technical goal: to write the most scalable code using the most modern technologies:',
        technologiesPoints: [
            'Typescript + SCSS - for ease of development and code scaling',
            'Redux - for controlling the state of the application locally and synchronize data with the server',
            'RTK Toolkit + Query - for load status control, preloader/error creation, data caching',
            'Preloaders/Errors - for loading the application, adding elements, deleting elements',
            'Firebase - for online data storage'
        ],
        mobileImg: TodolloMob,
        githubLink: '',
        webpageLink: '',
    },
]