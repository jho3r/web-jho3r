import todo from '@assets/projects/todo.svg'
import lasdelicias from '@assets/projects/lasdelicias.svg'
import personal from '@assets/projects/personal.svg'
import monitor from '@assets/projects/monitor.svg'
import pomodore from '@assets/projects/pomodore.svg'
import finance from '@assets/projects/finance.png'
import storemanager from '@assets/projects/storemanager.png'
import sellochained from '@assets/projects/sellochained.png'

const projects = [
  {
    title: 'Store Manager',
    headline: "A desktop app to manage a store's inventory and sales.",
    description: '',
    image: storemanager,
    link: 'https://github.com/jho3r/store-manager-desktop',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'Electron', 'Node.js'],
    date: '2023-09-24',
    categories: ['Frontend', 'Backend']
  },
  {
    title: 'Sello Chained CO2',
    headline: 'An smart contract that integrates with a web app to sell CO2 consumption certificates as NFTs.',
    description: '',
    image: sellochained,
    link: 'https://github.com/jho3r/blkchn-sello-chained-co2',
    technologies: ['Solidity', 'React', 'Web3.js', 'Javascript', 'Hardhat'],
    date: '2022-09-24',
    categories: ['Frontend', 'Backend', 'Blockchain']
  },
  {
    title: "Todo's App",
    headline: "A simple todo's app with a simple UI.",
    description: '',
    image: todo,
    link: 'https://jho3r.github.io/web-course-react-todosapp/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'LocalStorage', 'Bootstrap'],
    date: '2020-05-01',
    categories: ['Frontend']
  },
  {
    title: 'Las delicias agrícolas webpage',
    headline: 'Landing page for a farm in Colombia (in process of redesign).',
    description: '',
    image: lasdelicias,
    link: 'https://jho3r.github.io/web-lasdeliciasagricolas/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    date: '2020-05-01',
    categories: ['Frontend'],
    background: '#609165'
  },
  {
    title: 'MonitorFlux Webpage',
    headline: 'A landing page for a monitoring android App.',
    description: '',
    image: monitor,
    link: 'https://jho3r.github.io/android-course-monitorflux/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Premiere Pro'],
    date: '2020-05-01',
    categories: ['Frontend'],
    background: '#DFEEF2'
  },
  {
    title: 'Pomodore App',
    headline: 'Android App to track your pomodoro sessions.',
    description: '',
    image: pomodore,
    link: 'https://github.com/jho3r/android-pomodoreapp',
    technologies: ['Android', 'Java', 'Material Design', 'Illustrator'],
    date: '2020-05-01',
    categories: ['Mobile'],
    background: '#FFF8C1'
  },
  {
    title: 'FinanceApp',
    headline: 'Android App to help you track your personal finances (still in progress).',
    description: '',
    image: finance,
    link: 'https://github.com/jho3r/android-financeapp',
    technologies: ['Android', 'Kotlin', 'Firebase', 'Material Design', 'Illustrator'],
    date: '2020-05-01',
    categories: ['Mobile']
  },
  {
    title: 'Personal website',
    headline: 'A simple personal website to render basic information.',
    description: '',
    image: personal,
    link: 'https://jho3r.github.io/web-course-personalsite/',
    technologies: ['HTML', 'CSS'],
    date: '2020-05-01',
    categories: ['Frontend'],
    background: '#FFFFFF'
  }
]

export default projects
