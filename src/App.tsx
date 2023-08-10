import './App.scss';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Intro } from './components/Intro';
import { Galery } from './components/Galery';
import { Icons } from './components/Icons';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Intro />
      <Galery />
      <Icons />      
    </div>
  );
}

export default App;
