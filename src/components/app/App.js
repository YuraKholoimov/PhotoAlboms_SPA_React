import Header from '../header/header'
import Albom1 from '../alboms/albom1'
import {BrowserRouter, Route} from 'react-router-dom'
import Albom2 from '../alboms/albom2'
// import Albom3 from '../alboms/albom3'
// import Albom4 from '../alboms/albom4'
// import Request from './components/app/request/fetch'
import './app.css'
import AboutMe from '../about-me/aboutMe'
import Notice from '../notice/notice'

const Alboms = () => {
  return (
    <>
    <Albom1 note="Plotting Cat"/>
    <Albom2 />
    </>
  )
   

}


function App() {
  return (
    <BrowserRouter>
      <>
      <Header />
      <div className='mainSection'>
      <Route path="/albom1" component={Alboms} />
      <Route path="/aboutMe" component={AboutMe} />
      <Route path="/notice" component={Notice } />
        {/* <Albom3 /> 
        <Albom4 /> */}
      </div>
      </>
    </BrowserRouter>

  );
}

export default App;
