import { BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom';
import  { AnimatePresence, motion } from 'framer-motion'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Notes from './components/Notes'
import Voice from './components/voice/Voice'
import Overview from './components/overview/Overview'
import Video from './components/video/Video'
import Pictures from './components/pictures/Pictures'

function App() {

  return (
    <>
    <Router>
      <Header />
          <main class="main main-questions">
            <section class="main__container">
            <AnimatePresence>
            <Switch>
              <Route path="/" component={Overview} exact />
              <Route path="/notes" component={Notes} />
              <Route path="/voice" component={Voice} />
              <Route path="/video" component={Video} />
              <Route path="/pictures" component={Pictures} />
              </Switch>
            </AnimatePresence>
            </section>
         </main>        
      <Footer />
    </Router>
    </>
  );
 
}

export default App
