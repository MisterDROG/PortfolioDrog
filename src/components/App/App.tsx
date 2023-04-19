import Contacts from '../contacts/contacts';
import Footer from '../footer/footer';
import Header from '../header/header';
import Lead from '../lead/lead';
import ProjectsHolder from '../projectsHolder/projectsHolder';
import StackHolder from '../stackHolder/stackHolder';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Lead />
      <ProjectsHolder />
      <StackHolder />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
