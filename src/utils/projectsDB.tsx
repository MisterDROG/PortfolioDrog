import { projectType } from './generalTypes'
import TodolloDesk from '../images/projectsImages/TodolloDesk.gif'
import TodolloMob from '../images/projectsImages/TodolloMob.gif'
import HHTechParserDesk from '../images/projectsImages/HHTechParserDesk.gif'
import HHTechParserMob from '../images/projectsImages/HHTechParserMob.png'
import TFVMob from '../images/projectsImages/TFVMob.gif'
import TFVDesk from '../images/projectsImages/TFVDesk.gif'
import BoizMob from '../images/projectsImages/BoizMob.gif'
import BoizDesk from '../images/projectsImages/BoizDesk.gif'


export const porjectsDB: projectType[] = [
    {
        name: 'ToDollo',
        id: 1,
        about: 'to take the key function of Trello and make the most convenient task manager for personal usage. As a result, in app were implemented:',
        aboutPoints: [
            'Add/Delete for task branches',
            'Add/Delete/Marking completion of the tasks',
            'Drag and drop for tasks',
            'Preloaders/Errors for loading the application, adding elements, deleting elements',
            'Adaptability for vertical screens'
        ],
        desktopImg: TodolloDesk,
        techologies: 'to write code with easy scalable functionality and use for it up-to-date front-end technologies:',
        technologiesPoints: [
            'Typescript + SCSS - for ease of development and code scaling',
            'Redux - for controlling the state of the application locally and synchronize data with the server',
            'RTK Toolkit + Query - for load status control, preloader/error creation, data caching',
            'Firebase - for online data storage'
        ],
        mobileImg: TodolloMob,
        mobileImgScale: '94%',
        githubLink: 'https://github.com/MisterDROG/todollo',
        githubLinkBackend: '',
        webpageLink: 'https://misterdrog.github.io/todollo/',
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
        mobileImgScale: '90%',
        githubLink: 'https://github.com/MisterDROG/HHTechParser',
        githubLinkBackend: '',
        webpageLink: 'https://github.com/MisterDROG/HHTechParser/tree/master/exeFilesForUsers',
    },
    {
        name: 'Three Frontend Videos Daily',
        id: 3,
        about: 'YouTube videos are a good option to be up-to-date when you study programming. Unfortunately, YouTube does not always select the best, plus includes your other interests to recommendations. In this regard, I created a service that once a day publishes three front-end videos with high view ratio. It works like this:',
        aboutPoints: [
            'Every day backend parses preloaded YouTube channels',
            'Adds three videos with best raiting (views/average number of views per channel)',
            'User watches today best videos or can choose best for three previous days',
            'Also user can click Randomize and get random videos from the entire accumulated database',
            'Website also has a dark theme, help and support of mobile devices'
        ],
        desktopImg: TFVDesk,
        techologies: 'create a completely independent project by writing both Frontend and Backend parts. Plus, find a well-working recommendation algorithm. Techs used:',
        technologiesPoints: [
            'Node.js + Express - for server creation',
            'Puppeteer - as parsing library',
            'Mongo - for database',
            'Mongoose - for db management and schemas',
            'React - as frontend library',
            'React Router - for pages navigation',
            'React Bootstrap - for fast styling',
        ],
        mobileImg: TFVMob,
        mobileImgScale: '90%',
        githubLink: 'https://github.com/MisterDROG/Three-Frontend-Videos-React',
        githubLinkBackend: 'https://github.com/MisterDROG/ThreeFrontendVideosBackend',
        webpageLink: 'https://misterdrog.github.io/Three-Frontend-Videos-React/',
    },
    {
        name: 'BOIZ Website',
        id: 4,
        about: 'commercial project to develop a website for a brewery in close cooperation with the owner. Customer planned to attract subscribers to their social networks through it. The following has been implemented so far: ',
        aboutPoints: [
            'Main page with a block about the company and recordings of webinars',
            'Page with popular places of the world',
            'Page with an overview of varieties of the main product',
            'Page with the classification of sub products',
            'Online shop with cart and search filters for the goods'
        ],
        desktopImg: BoizDesk,
        techologies: 'create not only a website in terms of code, but also develop an attractive design and a comfortable user interface. Also establish teamwork with a second web developer. Techs used:',
        technologiesPoints: [
            'HTML5, CSS - as basic technologies',
            'Grid/Flex layouts - for shops and inframes',
            'JS ES6 - for scripts control',
            'Adaptability - for mobile devices',
            'Webpack 5 - for assets bundle',
            'Figma - for creating design and logos',
        ],
        mobileImg: BoizMob,
        mobileImgScale: '94%',
        githubLink: 'https://github.com/MisterDROG/brewing_Drog-Dimdim',
        githubLinkBackend: '',
        webpageLink: 'https://misterdrog.github.io/brewing_Drog-Dimdim/',
    },
]