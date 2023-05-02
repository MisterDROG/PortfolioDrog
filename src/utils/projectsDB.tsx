import TodolloDesk from '../images/projectsImages/TodolloDesk.jpeg'
import TodolloMob from '../images/projectsImages/TodolloMob.jpg'
import HHTechParserDesk from '../images/projectsImages/HHTechParserDesk.gif'
import HHTechParserMob from '../images/projectsImages/HHTechParserMob.png'
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
        name: 'HHTechParser',
        id: 2,
        about: 'Since I try to be up-to-date with new technologies, I decided to write a program that, based on how often each technology occurs in vacancies, create rating for hard skills of IT specialists. The following describes how it works, and if you click "Open Site" button, the link to download .exe file from my GitHub will open. Welcome to try!',
        aboutPoints: [
            'User enters a vacancy that he is interested in',
            'Parser opens the site and compiles a list of vacancy links',
            'After reviewing each, he pulls out all the available technologies',
            'Creates ranking based on the number of mentions',
            'Excel file exports (an example of the result can be seen in the picture below)'
        ],
        desktopImg: HHTechParserDesk,
        techologies: 'to study the technology of parsing web-sites. In a short time to write a useful application for professional growth. The application should be comfortable for use by other people (work quickly, help with comments, show errors, conveniently upload results). For this I used:',
        technologiesPoints: [
            'Node.js',
            'Puppeteer - as parsing library',
            'Exeljs - for export results to Excel',
            'Pkg - for creating .exe file for using app without IDE'
        ],
        mobileImg: HHTechParserMob,
        githubLink: 'https://github.com/MisterDROG/HHTechParser',
        webpageLink: 'https://github.com/MisterDROG/HHTechParser/tree/master/exeFilesForUsers',
    },
]