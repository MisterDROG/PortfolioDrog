import Contacts from '../contacts/contacts';
import Footer from '../footer/footer';
import Header from '../header/header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
