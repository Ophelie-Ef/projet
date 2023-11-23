import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Slider from './components/Slider/Slider';
import { menuentries } from './menuentries';
import Article from './components/Article/Article';

const App = () => {
  return (
    <>
      <header>
        <Menu sendEntries={menuentries}></Menu>
        <Slider />
        <Article></Article>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
