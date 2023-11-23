import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Slider from './components/Slider/Slider';
import { menuentries } from './menuentries';
import Article from './components/Article/Article';

const App = () => {
  const [state, setState] = React.useState({ 'displayArticle': false });
  const handleDisplayArticle = () => {
    setState({'displayArticle':!state.displayArticle})
    // state.displayArticle= !state.displayArticle ==>> INTERDIT !!!
    console.dir(state.displayArticle);
  }
  return (
    <>
      <header>
        <Menu sendEntries={menuentries} handleDisplayArticle={handleDisplayArticle}></Menu>
      </header>
      <main>
        {state.displayArticle ? <Article></Article> : <></>}
      </main>
      <footer></footer>
    </> 
  );
}

export default App;
