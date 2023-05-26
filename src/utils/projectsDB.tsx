import { projectType } from './generalTypes'
import TodolloDesk from '../images/projectsImages/TodolloDesk.gif'
import TodolloMob from '../images/projectsImages/TodolloMob.gif'
import HHTechParserDesk from '../images/projectsImages/HHTechParserDesk.gif'
import HHTechParserMob from '../images/projectsImages/HHTechParserMob.png'
import TFVMob from '../images/projectsImages/TFVMob.gif'
import TFVDesk from '../images/projectsImages/TFVDesk.gif'
import BoizMob from '../images/projectsImages/BoizMob.gif'
import BoizDesk from '../images/projectsImages/BoizDesk.gif'
import SoHelloMob from '../images/projectsImages/SoHelloMob.gif'
import SoHelloDesk from '../images/projectsImages/SoHelloDesk.gif'


export const porjectsDB: projectType[] = [
    {
        name: '"ToDollo"',
        id: 1,
        about: 'to take the key function of popular task tracker and create the most convenient app for personal usage. As a result, following was implemented:',
        aboutPoints: [
            'Add/Delete for task branches',
            'Add/Delete/Marking completion for tasks',
            'Drag and drop for tasks',
            'Preloaders/Errors for loading the application, adding elements, deleting elements',
            'Adaptability for vertical screens'
        ],
        desktopImg: TodolloDesk,
        techologies: 'to write code with easy scalable functionality and use up-to-date front-end technologies:',
        technologiesPoints: [
            'Typescript + SCSS - for convinient development and code scaling',
            'Redux - for controlling the state of the application locally and synchronize data with the server',
            'RTK Toolkit + Query - for load status control, preloader/error creation, data caching',
            'Firebase - for online data storage'
        ],
        mobileImg: TodolloMob,
        mobileImgScale: '94%',
        githubLink: 'https://github.com/MisterDROG/todollo',
        videoLink: 'https://disk.yandex.ru/i/lDwJOfRaPUH0Yw',
        githubLinkBackend: '',
        webpageLink: 'https://misterdrog.github.io/todollo/',
    },
    {
        name: '"Three Frontend Videos Daily"',
        id: 2,
        about: 'YouTube videos are a good option to be up-to-date when you study programming. Unfortunately, YouTube does not always select the best, plus includes your other interests to recommendations. In this regard, I created a service that once a day publishes three front-end videos with high view ratio. How it works:',
        aboutPoints: [
            'Every day backend parses preloaded YouTube channels',
            'Adds three videos with best raiting (views/average number of views per channel)',
            'User watches todays best videos or can choose best of three previous days',
            'Also user can click Randomize and get random videos from the entire accumulated database',
            'Website also has a dark theme, help page and supports mobile devices'
        ],
        desktopImg: TFVDesk,
        techologies: 'to create a completely independent project by writing both Frontend and Backend parts. Plus, to find a good-working recommendation algorithm. Techs used:',
        technologiesPoints: [
            'Node.js + Express - for server creation',
            'Puppeteer - as parsing library',
            'Mongo - for database',
            'Mongoose - for db management and schemas',
            'React - as frontend library',
            'React Router + Context - for pages navigation and night mode',
            'React Bootstrap - for fast styling',
        ],
        mobileImg: TFVMob,
        mobileImgScale: '90%',
        githubLink: 'https://github.com/MisterDROG/Three-Frontend-Videos-React',
        videoLink: 'https://disk.yandex.ru/i/wS30-Safp4_N_w',
        githubLinkBackend: 'https://github.com/MisterDROG/ThreeFrontendVideosBackend',
        webpageLink: 'https://misterdrog.github.io/Three-Frontend-Videos-React/',
    },
    {
        name: '"SoHello"',
        id: 3,
        about: 'commercial project to develop a service for finding new partners in a professional environment and hobby. The user registers, sets the area of interests, and potential partners are selected for him. With one of them he can contact and establish communication. Functions implemented: ',
        aboutPoints: [
            'Registration by email',
            'Sign in, sign out, change password, delete account',
            'Personal account: editing personal data, changing the avatar, hiding the profile, changing the interest',
            'Finding a partner for the user',
            'Help page with instructions and contacts'
        ],
        desktopImg: SoHelloDesk,
        techologies: 'to carry out the development of the service in the team of product manager and backend developer. Create a simple and understandable interface that will allow a potential client to make a quick transition from the first sight to the first use. Techs used:',
        technologiesPoints: [
            'HTML5, CSS - as basic technologies',
            'JS ES6 + Validator.js - for scripts control',
            'Adaptability - for mobile devices',
            'Webpack 5 - for assets bundle',
            'Firebase Auth, Storage, Database - for backend',
            'Figma - for creating design and logos',
        ],
        mobileImg: SoHelloMob,
        mobileImgScale: '90%',
        githubLink: 'https://github.com/MisterDROG/SoHello',
        videoLink: 'https://disk.yandex.ru/i/9H9eI2iCMkZBLg',
        githubLinkBackend: '',
        webpageLink: 'https://sohello-app.web.app/',
    },
    {
        name: '"HHTechParser"',
        id: 4,
        about: 'Since I try to be up-to-date with new technologies, I decided to write a program that, based on how often each technology occurs in vacancies, create rating for hard skills of IT specialists. The following describes how it works, and if you click "Open Site" button, the link to download .exe file will open. Feel free to try!',
        aboutPoints: [
            'User enters a vacancy that he is interested in',
            'Parser opens the site and compiles a list of vacancy links',
            'After reviewing each, he pulls out all the available technologies',
            'Creates ranking based on the number of mentions',
            'Excel file exports (an example of the result can be seen in the picture below)'
        ],
        desktopImg: HHTechParserDesk,
        techologies: 'to study the technology of parsing web-sites. In a short time to write a useful application for professional growth. The application should be comfortable for any users (quick work, tips, errors display, easy-to-use results export). Techs used:',
        technologiesPoints: [
            'Node.js',
            'Puppeteer - as parsing library',
            'Exeljs - for export results to Excel',
            'Pkg - for creating .exe file for using app without IDE'
        ],
        mobileImg: HHTechParserMob,
        mobileImgScale: '90%',
        githubLink: 'https://github.com/MisterDROG/HHTechParser',
        videoLink: 'https://disk.yandex.ru/i/xJNT4rdS3yY18w',
        githubLinkBackend: '',
        webpageLink: 'https://github.com/MisterDROG/HHTechParser/tree/master/exeFilesForUsers',
    },
    {
        name: '"BOIZ Website"',
        id: 5,
        about: 'commercial project to develop brewery website in close cooperation with the owner. The clients goal is to show his vision of the industry and create the community using this website. The following has been implemented: ',
        aboutPoints: [
            'Main page with a block about the company and recordings of webinars',
            'Page with popular beer places',
            'Page with an overview of main product types',
            'Page with the sub products classification',
            'Online shop with cart and search filters for the goods'
        ],
        desktopImg: BoizDesk,
        techologies: 'create not only a website in terms of code, but also develop an attractive design and a comfortable user interface. The second goal was to establish teamwork with a second web developer. Techs used:',
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
        videoLink: 'https://disk.yandex.ru/i/sgWWIv-ql8whhA',
        githubLinkBackend: '',
        webpageLink: 'https://misterdrog.github.io/brewing_Drog-Dimdim/',
    },

]