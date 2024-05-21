import { BrowserRouter } from 'react-router-dom'
import {
  Navbar,
  Warning,
  Hero,
  About,
  Services,
  DevOptima,
  ContactUs,
  Footer,
} from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className='bg-[#0A0812] z-0'>
        <Navbar />
        <Warning />
        <div className="relative z-0 hidden 2xl:flex flex-col justify-center pb-44">
          <Hero />
          <About />
          <Services />
          <DevOptima />
          <ContactUs />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
