import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { Originals, Actions, Comedy, Horror, Romance } from './urls'


function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={Originals} title='Originals' />
      <RowPost url={Actions} title='Actions' isSmall />
      <RowPost url={Comedy} title='Comedy' isSmall />
      <RowPost url={Romance} title='Romance' isSmall />
      <RowPost url={Horror} title='Horror' isSmall />

    </div>
  );
}

export default App;
