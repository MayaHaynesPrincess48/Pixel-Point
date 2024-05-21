// import { FiDisc, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { avatar1, avatar2, circle1, circle2, circle3, icon1, icon2, icon3, icon4, icon5, icon6, mask1, mask2, mask3 } from '../assets'

const navLinks = [
  {
    id: 'about',
    title: 'About us',
  },
  {
    id: 'services',
    title: 'Services',
  },
  {
    id: 'devOptima',
    title: 'Why DevOptima ',
  },
]

const aboutSmallCards = [
  {
    img: circle1,
    title: 'Row reads',
    used: '50 billion',
    all: 'of 100 billion',
  },
  {
    img: circle2,
    title: 'Row writes',
    used: '16.1 billion',
    all: 'of 50 billion',
  },
  {
    img: circle3,
    title: 'Storage',
    used: '7.5 GB',
    all: 'of 10 GB',
  },
]

const serviceCards = [
  {
    url: mask1,
    title: 'Continuous Integration & Deployment',
    text: 'Streamline your development process with our advanced CI/CD solutions, ensuring faster and more reliable code deployment.',
  },
  {
    url: mask2,
    title: 'Cloud Solutions & Infrastructure Management',
    text: 'Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services.',
  },
  {
    url: mask3,
    title: 'Automated Testing & Quality Assurance',
    text: 'Enhance product quality with our automated testing services, designed to detect issues early and reduce time-to-market.'
  },
]

const devOpsCards = [
  {
    icon: icon1,
    title: 'DevOps transformation',
    text: 'Reshaping businesses with DevOps expertise.',
  },
  {
    icon: icon2,
    title: 'Efficient operations',
    text: 'Streamline processes for productivity gains.',
  },
  {
    icon: icon3,
    title: 'CI/CD implementation',
    text: 'Seamless software delivery pipeline.',
  },
  {
    icon: icon4,
    title: 'Automation mastery',
    text: 'Unlock full automation potential.',
  },
]

const devOptimaCards = [
  {
    icon: icon5,
    text: 'Thanks to DevOptima, our team can focus more on& innovation& and less on operational challenges. Their& cloud management solutions& are top-notch.',
    avatar: avatar1,
  },
  {
    icon: icon6,
    text: `DevOptima has been a game-changer for us. With their support, we've shifted our focus& from operational hurdles to pushing boundaries in innovation.`,
    avatar: avatar2,
  }
]

const footerlinks = [
  {
    title: 'Resources',
    content: ['Docs', 'Release notes', 'Security',],
  },
  {
    title: 'Community',
    content: ['Twitter', 'LinkedIn', 'GitHub', 'Discourse'],
  },
  {
    title: 'Legal',
    content: ['Privacy policy', 'Terms of service',],
  },
]

export { navLinks, aboutSmallCards, serviceCards, devOpsCards, devOptimaCards, footerlinks }
